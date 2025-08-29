'use client';

import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

interface DownloadStats {
  total: number;
  platforms: {
    [key: string]: {
      count: number;
      lastUpdated: Date;
    };
  };
}

interface DownloadCounterProps {
  className?: string;
  showPlatformBreakdown?: boolean;
}

/**
 * 下载次数显示组件
 * 显示累计下载次数，支持实时更新
 */
export default function DownloadCounter({ 
  className = '', 
  showPlatformBreakdown = false 
}: DownloadCounterProps) {
  const [stats, setStats] = useState<DownloadStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * 获取下载统计数据
   */
  const fetchStats = async () => {
    try {
      const response = await fetch('/api/downloads/stats');
      const result = await response.json();
      
      if (result.success) {
        setStats(result.data);
        setError(null);
      } else {
        setError(result.error || '获取数据失败');
      }
    } catch (err) {
      setError('网络错误，请稍后重试');
      console.error('获取下载统计失败:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * 格式化数字显示
   */
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  useEffect(() => {
    fetchStats();
    
    // 每30秒刷新一次数据
    const interval = setInterval(fetchStats, 30000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Download className="h-4 w-4 animate-pulse" />
        <span className="text-sm text-muted-foreground">加载中...</span>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Download className="h-4 w-4" />
        <span className="text-sm text-muted-foreground">
          {error || '暂无数据'}
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      {showPlatformBreakdown ? (
        <div className="flex items-center gap-4 px-4 py-2 bg-muted/30 rounded-full border border-border/50">
          <div className="flex items-center gap-2">
            <Download className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              {formatNumber(stats.total)}
            </span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-3 text-xs">
            {stats.platforms.macos && (
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-muted-foreground">
                  macOS: {formatNumber(stats.platforms.macos.count)}
                </span>
              </div>
            )}
            {stats.platforms.windows && (
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-muted-foreground">
                  Windows: {formatNumber(stats.platforms.windows.count)}
                </span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/20 rounded-full">
          <Download className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            {formatNumber(stats.total)}
          </span>
        </div>
      )}
    </div>
  );
}