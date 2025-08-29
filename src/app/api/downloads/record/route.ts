import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * 记录下载事件
 * POST /api/downloads/record
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { platform } = body;

    // 验证平台参数
    if (!platform || !['macos', 'windows'].includes(platform)) {
      return NextResponse.json(
        {
          success: false,
          error: '无效的平台参数，必须是 macos 或 windows',
        },
        { status: 400 }
      );
    }

    // 获取请求信息
    const userAgent = request.headers.get('user-agent') || undefined;
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ip = forwarded ? forwarded.split(',')[0] : realIp || undefined;

    // 使用事务来确保数据一致性
    const result = await prisma.$transaction(async (tx) => {
      // 获取或创建统计记录
      let stats = await tx.downloadStats.findUnique({
        where: { id: 1 },
      });

      if (!stats) {
        // 创建初始统计记录
        stats = await tx.downloadStats.create({
          data: {
            id: 1,
            macosCount: platform === 'macos' ? 1 : 0,
            windowsCount: platform === 'windows' ? 1 : 0,
            lastMacosDownload: platform === 'macos' ? new Date() : undefined,
            lastWindowsDownload: platform === 'windows' ? new Date() : undefined,
          },
        });
      } else {
        // 更新统计记录
        const updateData: any = {};
        
        if (platform === 'macos') {
          updateData.macosCount = stats.macosCount + 1;
          updateData.lastMacosDownload = new Date();
        } else if (platform === 'windows') {
          updateData.windowsCount = stats.windowsCount + 1;
          updateData.lastWindowsDownload = new Date();
        }

        stats = await tx.downloadStats.update({
          where: { id: 1 },
          data: updateData,
        });
      }

      return { stats };
    });

    // 计算当前平台的下载次数
    const currentCount = platform === 'macos' 
      ? result.stats.macosCount 
      : result.stats.windowsCount;

    return NextResponse.json({
      success: true,
      data: {
        platform,
        newCount: currentCount,
        totalCount: result.stats.macosCount + result.stats.windowsCount,
      },
    });
  } catch (error) {
    console.error('记录下载失败:', error);
    return NextResponse.json(
      {
        success: false,
        error: '记录下载失败',
      },
      { status: 500 }
    );
  }
}