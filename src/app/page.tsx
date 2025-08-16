"use client";
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
import { useEffect } from "react";


export default function Home() {
  // ======彩带，喜庆一下======
  useEffect(() => {
    let confetti: any;
    let cancel = false;
    // 首次访问才播（如果想每次刷新都播，把这一行判断删掉）
    // const alreadyShown = sessionStorage.getItem("confettiShown");
    // if (alreadyShown) return;
    import("canvas-confetti").then((mod) => {
      if (cancel) return;
      confetti = mod.default;

      const duration = 1800;
      const end = Date.now() + duration;

      const defaults = {
        startVelocity: 24, // 速度更快
        gravity: 1.0,      // 下落更快
        ticks: 226,        // 寿命更短
        spread: 100,
        origin: { y: 0 },  // 从顶部
        zIndex: 9999
      };
      // 均匀分布到整条横向
      const stripes = 6;        // 横向“条带”数量，可按需调
      const perShot = 6;        // 每次每条带的颗粒数（密度）


      const interval = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(interval);
          sessionStorage.setItem("confettiShown", "1");
          return;
        }
      
        for (let i = 0; i < stripes; i++) {
          // 均匀分布 + 少量抖动（避免太机械）
          const x = (i + Math.random() * 0.8) / stripes;
          confetti({
            ...defaults,
            particleCount: perShot,
            origin: { y: 0, x }
          });
        }
      }, 160);  // 发射频率（再快就把这个值调小）
    });

    return () => {
      cancel = true;
    };
  }, []);
  // ========================
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background font-body">
      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link
          href="#"
          className="flex items-center justify-center group"
          prefetch={false}
        >
          <Languages className="h-6 w-6 text-foreground transition-transform duration-300 group-hover:rotate-12" />
          <span className="ml-2 text-xl font-semibold font-headline flex items-center">
            FloatQuickTrans 
            <Image 
              src="/output.ico" 
              alt="FloatQuickTrans Icon" 
              width={20} 
              height={20} 
              className="ml-1"
            />
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <a
              href="https://www.producthunt.com/products/floatquicktrans?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-floatquicktrans"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1004478&theme=light&t=1755019643899"
                alt="FloatQuickTrans - Let translation not interrupt your train of thought. | Product Hunt"
                style={{ width: '125px', height: '27px' }}
                width="250"
                height="54"
              />
            </a>
            {/* Twitter(X) 链接 */}
            <a
              href="https://x.com/HughAdward6066"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow me on X"
              className="inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>
              <span className="sr-only">X (Twitter)</span>
            </a>
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
              href="/coffee-tea"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer">
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
              {/* <Image 
                src="/image-20250717153112790.png"
                alt="FloatQuickTrans App Screenshot"
                width={1200}  // 设置实际图片宽度
                height={800}   // 设置实际图片高度
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last shadow-lg"
              /> */}
              <iframe width="560" height="339" src="https://www.youtube.com/embed/MQDMA4nbF5o?si=Ncztu8jFDOjfdh4O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                Let translation not interrupt your train of thought.
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
        {/* Product Hunt demo card + copy */}
        <section className="w-full py-6 md:py-10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              {/* Embed wrapped in a card so the white iframe doesn't feel abrupt on dark bg */}
              <div className="rounded-xl bg-card border shadow-sm p-3 flex justify-center">
                <iframe
                  src="https://cards.producthunt.com/cards/products/1097426"
                  className="border-none w-[500px] h-[405px] max-w-full"
                  title="FloatQuickTrans on Product Hunt"
                  frameBorder={0}
                  allowFullScreen
                />
              </div>

              {/* Context copy on the right */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold font-headline">See it on Product Hunt</h3>
                <p className="text-muted-foreground md:text-lg">
                  Watch a quick demo and follow <span className="font-semibold">FloatQuickTrans</span> on Product Hunt. 
                  {/* 分割线 */}
                  <hr className="my-4" />
                  <p className="text-muted-foreground md:text-lg">
                    We’re trending on <span className="font-semibold">Product Hunt</span> today 🚀  <br />
                    <span className="font-semibold">Your vote counts now — only 24 hours to shine!</span>  
                    <ul className="list-disc pl-5 space-y-2 mt-3">
                      <li>Click “Upvote” to help FloatQuickTrans reach more people ❤️</li>
                      <li>Leave a quick comment — feedback boosts visibility 💬</li>
                      <li>Share the link with friends who love productivity tools 🛠️</li>
                      <li>Let’s make “translation without distraction” go viral 🌍</li>
                    </ul>
                  </p>
                </p>
                <div className="flex items-center gap-3">
                  <Button asChild>
                    <Link
                      href="https://www.producthunt.com/products/floatquicktrans"
                      prefetch={false}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Product Hunt
                    </Link>
                  </Button>
                  <Link
                    href="https://www.producthunt.com/products/floatquicktrans?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-floatquicktrans"
                    prefetch={false}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                    aria-label="Product Hunt badge"
                  >
                    <img
                      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1004478&theme=light"
                      alt="FloatQuickTrans on Product Hunt"
                      width={160}
                      height={34}
                      className="h-[34px] w-auto"
                    />
                  </Link>
                </div>
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
                  Have questions? We've got answers. If you can't find what you're looking for, <br/>
                  feel free to <a className="underline" href="https://github.com/liuyueyi/floatquicktrans/issues">contact us</a>.
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
