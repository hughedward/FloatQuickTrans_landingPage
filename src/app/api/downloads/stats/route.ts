import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * 获取下载统计数据
 * GET /api/downloads/stats
 */
export async function GET() {
  try {
    // 获取所有平台的下载统计
    const stats = await prisma.downloadStats.findMany({
      select: {
        platform: true,
        count: true,
        lastUpdated: true,
      },
    });

    // 计算总下载次数
    const totalDownloads = stats.reduce((sum, stat) => sum + stat.count, 0);

    // 格式化返回数据
    const formattedStats = {
      total: totalDownloads,
      platforms: stats.reduce((acc, stat) => {
        acc[stat.platform] = {
          count: stat.count,
          lastUpdated: stat.lastUpdated,
        };
        return acc;
      }, {} as Record<string, { count: number; lastUpdated: Date }>),
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