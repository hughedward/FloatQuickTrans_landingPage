"use client";

// 添加防止主题切换闪烁的样式
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Github } from "lucide-react";

/**
 * Buy-me-a-coffee page (Shadcn style)
 *
 * Place your payment QR code images under `/public/images/` or any static path you prefer:
 *   - /images/alipay-qr.png
 *   - /images/wechat-qr.png
 *
 * Implement your Stripe checkout route at `/api/checkout` (or update the href below).
 */
// 使用 GitHub 头像
const sponsors = [
  { name: "Alice", avatar: "https://avatars.githubusercontent.com/u/1?v=4" },
  { name: "Bob", avatar: "https://avatars.githubusercontent.com/u/2?v=4" },
  { name: "Charlie", avatar: "https://avatars.githubusercontent.com/u/3?v=4" },
  { name: "David", avatar: "https://avatars.githubusercontent.com/u/4?v=4" },
  { name: "Eve", avatar: "https://avatars.githubusercontent.com/u/5?v=4" },
  { name: "Frank", avatar: "https://avatars.githubusercontent.com/u/6?v=4" },
  { name: "Grace", avatar: "https://avatars.githubusercontent.com/u/7?v=4" },
  // ...
];
const monthTarget = 30;

export default function BuyMeACoffee() {
  // 添加状态来控制页面可见性，防止主题切换闪烁
  const [mounted, setMounted] = useState(false);

  // 在组件挂载后设置状态为true
  useEffect(() => {
    setMounted(true);
  }, []);

  // 如果组件未挂载，返回一个预渲染的骨架屏，保持与当前主题一致的背景色
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        {/* 可以在这里添加一个加载指示器或者保持空白 */}
      </div>
    );
  }

  return (
    <>
      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <a
          href="/"
          className="flex items-center justify-center group"
        >
          <span className="ml-2 text-xl font-semibold font-headline text-foreground">
            FloatQuickTrans ❄️ 
          </span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <a
            href="https://github.com/hughedward/FloatQuickTrans"
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1 text-foreground"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
          <ThemeToggle />
        </nav>
      </header>
      <main className="min-h-screen bg-gradient-to-b from-background to-background/95 py-8 flex flex-col items-center px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-center mb-10"
        >
          <h1 className="text-4xl font-bold mb-4 text-foreground">Buy me a coffee ☕</h1>
          <h3 className="text-2xl font-bold mb-4 text-foreground">To support FloatQuickTrans</h3>
          <p className="text-muted-foreground">
            If my work has helped you, consider buying me a coffee. Your support
            keeps me going!
          </p>
        </motion.div>
        <p className="text-sm text-muted-foreground mb-8">
          month target <strong>{monthTarget} cups</strong>，already got{" "}
          <strong>{sponsors.length} cups</strong>，thanks to all supporters!
        </p>
        <Progress
          value={(sponsors.length / monthTarget) * 100}
          className="h-3 w-64 mx-auto mb-6 bg-secondary [&>*]:bg-primary"
        />

        {/* Payment options */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
          {/* Alipay */}
          <Card className="flex flex-col items-center bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">alipay</CardTitle>
              {/* <CardDescription>Scan to tip via Alipay</CardDescription> */}
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Image
                src="/image-alipay.png"
                alt="Alipay QR"
                width={200}
                height={200}
                className="rounded-lg shadow-lg"
                priority
              />
            </CardContent>
          </Card>

          {/* WeChat Pay */}
          <Card className="flex flex-col items-center bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">wechat-pay</CardTitle>
              {/* <CardDescription>Scan to tip via WeChat</CardDescription> */}
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Image
                src="/image-wechat-z.png"
                alt="WeChat Pay QR"
                width={200}
                height={200}
                className="rounded-lg shadow-lg"
                priority
              />
            </CardContent>
          </Card>

          {/* Stripe */}
          <Card className="flex flex-col items-center bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Stripe</CardTitle>
              <CardDescription className="text-muted-foreground">Credit & debit card</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Button
                onClick={() => {
                  // 直接跳转到Stripe支付链接
                  try {
                    window.open("https://buy.stripe.com/cNi9AU02E0tN2h1dUDbjW01", "_blank");
                  } catch (error) {
                    console.error("打开Stripe支付链接时出错:", error);
                    // 添加错误处理，避免未捕获的异常
                  }
                }}
                className="w-full"
              >
                Pay with Stripe
              </Button>
            </CardContent>
          </Card>
        </div>
        {/* 标题贡献者 */}
        {/* 距离上面一个组件 100px */}
        <div className="flex flex-col items-center mt-[39px]">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Thanks Sponsors ☺️</h2>
        </div>
        {/* 贡献者头像列表 */}
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-3 mb-12">
          {sponsors.map((s, i) => (
            <Image
              key={i}
              src={s.avatar}
              alt={s.name}
              width={40}
              height={40}
              className="rounded-full border"
            />
          ))}
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border bg-background">
        <p className="text-xs text-muted-foreground">
          &copy; Copyright © 2025 FloatQuickTrans.秋葉商店 All rights reserved
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            href="https://github.com/hughedward/FloatQuickTrans"
            className="text-xs text-foreground hover:underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="/"
            className="text-xs text-foreground hover:underline underline-offset-4"
          >
            返回首页
          </a>
        </nav>
      </footer>
    </>
  );
}
