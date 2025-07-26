"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-neutral-50 to-neutral-100 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Payment canceled</h1>
        <p className="text-muted-foreground mb-8">
          It seems you've changed your mind. Feel free to support again anytime!
        </p>

        <Link href="/">
          <Button variant="secondary">Return to homepage</Button>
        </Link>
      </motion.div>
    </main>
  );
}
