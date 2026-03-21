import { createFileRoute, Link } from '@tanstack/react-router';
import { Particles } from '@/components/ui/particles';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { ArrowRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative flex flex-col min-h-screen w-full items-center justify-center overflow-hidden bg-background">
      {/* Background Particles */}
      {mounted && (
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color="#9ca3af"
          refresh
        />
      )}

      <div className="z-10 flex flex-col items-center justify-center space-y-8 px-4 text-center max-w-4xl mx-auto">
        {/* Shiny Badge */}
        <div className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}>
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Introducing TsxForge Components</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>

        {/* Hero Headlines */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground dark:text-white">
            Build Modern UIs <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-600 to-neutral-900 dark:from-neutral-100 dark:to-neutral-500">
              Instantly
            </span>
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl mt-4 max-w-2xl">
            A comprehensive catalog of accessible, customizable components built on top of TailwindCSS, Shadcn UI & Framer Motion.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/docs/$" params={{ _splat: '' }}>
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
                Explore the Docs
              </span>
            </ShimmerButton>
          </Link>

          <Link
            to="/docs/$"
            params={{ _splat: 'components/input' }}
            className={cn(
              "group inline-flex items-center justify-center h-[50px] px-8 rounded-full border-2 border-border bg-background text-sm font-medium hover:bg-muted transition-colors"
            )}
          >
            Component Gallery
          </Link>
        </div>
      </div>
    </main>
  );
}
