import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Coffee,
  Github,
  Languages,
  Sparkles,
  Zap,
  SquareStack,
  Volume2,
  Pin,
  Keyboard,
  Download,
  MousePointerClick,
  Type,
} from "lucide-react";
import { GithubStars } from '@/components/GithubStars';
import { downloadLink } from '@/components/downloadLink';
import { ThemeToggle } from "@/components/ThemeToggle";



export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background font-body">
      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link
          href="#"
          className="flex items-center justify-center group"
          prefetch={false}
        >
          <Languages className="h-6 w-6 text-foreground transition-transform duration-300 group-hover:rotate-12" />
          <span className="ml-2 text-xl font-semibold font-headline">
            FloatQuickTrans ❄️ 
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link
            href="https://github.com/hughedward/FloatQuickTrans"
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
          >
            <Github className="h-5 w-5" />
            <GithubStars />
          </Link> 
          <Button asChild variant="ghost">
            <Link
              href="https://www.buymeacoffee.com/hughedward"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Coffee className="mr-2 h-4 w-4" />
              Buy me a coffee 🙏
            </Link>
          </Button>
          <ThemeToggle />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-16 md:py-16 lg:py-16 xl:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Instant Translation Floating Over Any App
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    🥳Seamlessly translate text from anywhere on your screen.
                    Real-time streaming, text-to-speech, and global hotkeys to
                    supercharge your workflow.And it's now free 🎉
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    asChild
                    className="transition-transform duration-300 hover:scale-105"
                  >
                    <Link href={downloadLink.macUrl} prefetch={false}>
                      Download for macOS 🥰
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    asChild
                    className="transition-transform duration-300 hover:scale-105"
                  >
                    <Link href={downloadLink.winUrl} prefetch={false}>
                      Download for Windows 🥸
                    </Link>
                  </Button>
                </div>
              </div>
              <Image 
                src="/image-20250717153112790.png"
                alt="FloatQuickTrans App Screenshot"
                width={1200}  // 设置实际图片宽度
                height={800}   // 设置实际图片高度
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last shadow-lg"
              />
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-9 md:py-16 lg:py-16 xl:py-20 bg-secondary/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                  Core Capabilities
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Everything You Need to Be Productive
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our app is designed to be intuitive, fast, and unobtrusive,
                  blending perfectly into your workflow.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <div className="grid gap-4 group">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background border transition-transform duration-300 group-hover:scale-110">
                    <Zap className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">
                    Real-time Streaming
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Watch translations appear character-by-character as they are
                  generated by the AI model.
                </p>
              </div>
              <div className="grid gap-4 group">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background border transition-transform duration-300 group-hover:scale-110">
                    <SquareStack className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">
                    Multi-window Support
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Create multiple translation windows to handle different tasks
                  or languages simultaneously.
                </p>
              </div>
              <div className="grid gap-4 group">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background border transition-transform duration-300 group-hover:scale-110">
                    <Volume2 className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">
                    Text-to-Speech
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Listen to translations in over 30 languages to perfect your
                  pronunciation.
                </p>
              </div>
              <div className="grid gap-4 group">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background border transition-transform duration-300 group-hover:scale-110">
                    <Pin className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">
                    Always on Top
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  The floating window stays above all other applications,
                  ensuring quick access.
                </p>
              </div>
              <div className="grid gap-4 group">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background border transition-transform duration-300 group-hover:scale-110">
                    <Keyboard className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">
                    Global Hotkeys
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Access the app instantly from anywhere with configurable
                  global hotkeys.
                </p>
              </div>
              <div className="grid gap-4 group">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background border transition-transform duration-300 group-hover:scale-110">
                    <Sparkles className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">
                    And Much More
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Enjoy a lightweight, fast, and native experience on both macOS
                  and Windows.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-6 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Get Started in Seconds
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Translating text has never been easier. Follow these three simple steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4 text-center">
                <div className="flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Download className="h-10 w-10" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">1. Download & Install</h3>
                <p className="text-muted-foreground">
                  Get the right version for your operating system (macOS or Windows) and install it.Apply for a 
                  <a target="_blank"
                      rel="noopener noreferrer" className="hover:underline text-blue-500" 
                      href="https://aistudio.google.com/app/apikey "> Gemini </a> 
                  / <a target="_blank"
                      rel="noopener noreferrer" className="text-blue-500 hover:underline" 
                      href="https://platform.deepseek.com/usage"> DeepSeek </a> 
                      API key
                </p>
              </div>
              <div className="grid gap-4 text-center">
                <div className="flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MousePointerClick className="h-10 w-10" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">2. Activate</h3>
                <p className="text-muted-foreground">
                  Use the global hotkey (e.g., Cmd+Shift+Y) to open the floating translation window.
                </p>
              </div>
              <div className="grid gap-4 text-center">
                <div className="flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Type className="h-10 w-10" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">3. Translate</h3>
                <p className="text-muted-foreground">
                  Start typing or paste text into the window and see the real-time translation appear instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-6 md:py-12 lg:py-16 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl w-full mt-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is FloatQuickTrans free?</AccordionTrigger>
                  <AccordionContent>
                    Yes, FloatQuickTrans is free to use. We offer all core features at no cost. You can support the development by buying us a coffee!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What languages are supported for text-to-speech?</AccordionTrigger>
                  <AccordionContent>
                    We support over 30 languages for text-to-speech, allowing you to hear translations in a native voice. The list is constantly expanding.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I use it offline?</AccordionTrigger>
                  <AccordionContent>
                    FloatQuickTrans requires an active internet connection for translation and text-to-speech as it leverages powerful cloud-based AI models.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I configure the global hotkeys?</AccordionTrigger>
                  <AccordionContent>
                    You can customize the global hotkeys in the app's settings/preferences to fit your personal workflow.(Temporarily, changing hotkeys is not supported. If you need to modify the hotkeys, well, I have to alter the code. )
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>The Mac xxx.app is damaged and can't be opened. You should move it to the Trash.?</AccordionTrigger>
                  <AccordionContent>
                    sudo xattr -r -d com.apple.quarantine /Applications/xxx.app
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 FloatQuickTrans. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="https://github.com/hughedward/FloatQuickTrans"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://www.buymeacoffee.com/hughedward"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            Support Us 🙏
          </Link>
        </nav>
      </footer>
    </div>
  );
}
