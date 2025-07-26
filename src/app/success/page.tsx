"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-neutral-50 to-neutral-100 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">🎉 Payment successful!</h1>
        <p className="text-muted-foreground mb-8">
          Thank you for your support, enjoy your tea/coffee ☕
        </p>

        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </motion.div>
    </main>
  );
}
