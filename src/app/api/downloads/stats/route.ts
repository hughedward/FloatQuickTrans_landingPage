import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * 获取下载统计数据
 * GET /api/downloads/stats
 */
export async function GET() {
  try {
    // 获取下载统计记录（单条记录）
    let stats = await prisma.downloadStats.findUnique({
      where: { id: 1 },
    });

    // 如果记录不存在，创建初始记录
    if (!stats) {
      stats = await prisma.downloadStats.create({
        data: {
          id: 1,
          macosCount: 0,
          windowsCount: 0,
        },
      });
    }

    // 计算总下载次数
    const totalDownloads = stats.macosCount + stats.windowsCount;

    // 格式化返回数据
    const formattedStats = {
      total: totalDownloads,
      platforms: {
        macos: {
          count: stats.macosCount,
          lastUpdated: stats.lastMacosDownload,
        },
        windows: {
          count: stats.windowsCount,
          lastUpdated: stats.lastWindowsDownload,
        },
      },
    };

    return NextResponse.json({
      success: true,
      data: formattedStats,
    });
  } catch (error) {
    console.error('获取下载统计失败:', error);
    return NextResponse.json(
      {
        success: false,
        error: '获取下载统计失败',
      },
      { status: 500 }
    );
  }
}