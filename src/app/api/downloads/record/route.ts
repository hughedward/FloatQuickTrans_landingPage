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
      // 记录下载事件
      const downloadRecord = await tx.downloadRecord.create({
        data: {
          platform,
          userAgent,
          ip,
        },
      });

      // 更新或创建统计数据
      const downloadStats = await tx.downloadStats.upsert({
        where: {
          platform,
        },
        update: {
          count: {
            increment: 1,
          },
        },
        create: {
          platform,
          count: 1,
        },
      });

      return { downloadRecord, downloadStats };
    });

    return NextResponse.json({
      success: true,
      data: {
        platform,
        newCount: result.downloadStats.count,
        recordId: result.downloadRecord.id,
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