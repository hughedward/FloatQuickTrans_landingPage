'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';
import { downloadLink } from './downloadLink';

interface DownloadButtonProps {
  platform: 'macos' | 'windows';
  variant?: 'default' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  children?: React.ReactNode;
}

/**
 * 增强版下载按钮组件
 * 集成下载统计功能，点击时自动记录下载事件
 */
export default function DownloadButton({
  platform,
  variant = 'default',
  size = 'default',
  className = '',
  children,
}: DownloadButtonProps) {
  /**
   * 处理下载点击事件
   * 记录下载统计并跳转到下载链接
   */
  const handleDownload = async () => {
    try {
      // 异步记录下载事件，不阻塞用户下载
      fetch('/api/downloads/record', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ platform }),
      }).catch((error) => {
        // 静默处理错误，不影响用户体验
        console.warn('记录下载统计失败:', error);
      });

      // 立即跳转到下载链接
      const downloadUrl = platform === 'macos' ? downloadLink.macUrl : downloadLink.winUrl;
      window.open(downloadUrl, '_blank');
    } catch (error) {
      console.error('下载处理失败:', error);
      // 如果出错，仍然尝试跳转到下载链接
      const downloadUrl = platform === 'macos' ? downloadLink.macUrl : downloadLink.winUrl;
      window.open(downloadUrl, '_blank');
    }
  };

  const defaultText = platform === 'macos' ? 'Download for macOS 🥰' : 'Download for Windows 🥸';

  return (
    <Button
      variant={variant}
      size={size}
      className={`transition-transform duration-300 hover:scale-105 ${className}`}
      onClick={handleDownload}
    >
      <Download className="h-4 w-4 mr-2" />
      {children || defaultText}
    </Button>
  );
}