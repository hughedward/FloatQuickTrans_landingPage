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
    <div className={`flex items-center gap-2 ${className}`}>
      <Download className="h-4 w-4" />
      <div className="flex flex-col">
        <span className="text-sm font-medium">
          {formatNumber(stats.total)} 
        </span>
        {showPlatformBreakdown && (
          <div className="text-xs text-muted-foreground flex gap-3">
            {stats.platforms.macos && (
              <span>macOS: {formatNumber(stats.platforms.macos.count)}</span>
            )}
            {stats.platforms.windows && (
              <span>Windows: {formatNumber(stats.platforms.windows.count)}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}