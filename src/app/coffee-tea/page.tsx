"use client";

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
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 py-16 flex flex-col items-center px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-center mb-10"
        >
          <h1 className="text-4xl font-bold mb-4">Buy me a coffee ☕</h1>
          <h3 className="text-2xl font-bold mb-4">To support FloatQuickTrans</h3>
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
          className="h-3 w-64 mx-auto mb-6 bg-neutral-200 dark:bg-neutral-700 [&>*]:bg-green-500"
        />

        {/* Payment options */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
          {/* Alipay */}
          <Card className="flex flex-col items-center">
            <CardHeader>
              <CardTitle>alipay</CardTitle>
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
          <Card className="flex flex-col items-center">
            <CardHeader>
              <CardTitle>wechat-pay</CardTitle>
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
          <Card className="flex flex-col items-center">
            <CardHeader>
              <CardTitle>Stripe</CardTitle>
              <CardDescription>Credit & debit card</CardDescription>
              ToDo:敬请期待
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Button
                onClick={() => {
                  // 使用客户端导航而不是直接修改 window.location
                  // 这样可以避免在页面加载时就触发 API 调用
                  try {
                    window.location.href = "/api/checkout";
                  } catch (error) {
                    console.error("导航到结账页面时出错:", error);
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
          <h2 className="text-2xl font-bold mb-4">Thanks Sponsors ☺️</h2>
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background">
        <p className="text-xs text-muted-foreground">
          &copy; Copyright © 2025 FloatQuickTrans.秋葉商店 All rights reserved
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            href="https://github.com/hughedward/FloatQuickTrans"
            className="text-xs hover:underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="/"
            className="text-xs hover:underline underline-offset-4"
          >
            返回首页
          </a>
        </nav>
      </footer>
    </>
  );
}
