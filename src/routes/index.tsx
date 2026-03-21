import { createFileRoute, Link } from "@tanstack/react-router";
import { Particles } from "@/components/ui/particles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import { ButtonLink } from "@/components/tsxforge/button-link";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <HomeLayout {...baseOptions()}>
      <div className="relative flex flex-col min-h-screen w-full overflow-hidden bg-background bg-grid-white dark:bg-grid-white/5">
        {/* Futuristic Scanline Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-linear-to-b from-transparent via-primary/5 to-transparent h-20 w-full animate-scanline opacity-20" />

        {/* Background Particles */}
        {mounted && (
          <Particles
            className="absolute inset-0 z-0"
            quantity={100}
            ease={80}
            color="#9ca3af"
            refresh
          />
        )}

        <div className="relative z-10 flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center space-y-12 mb-24">
            {/* Architectural ID Badge */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div
                className={cn(
                  "group rounded-full border border-black/5 bg-neutral-100 px-4 py-1 text-xs font-mono text-neutral-600 transition-all ease-in dark:border-white/5 dark:bg-neutral-900 dark:text-neutral-400",
                )}
              >
                <span className="opacity-50">ARCHITECT_CORE // </span>
                <span className="font-bold">POLYGON_MESH_ID: 982-FF-02</span>
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tighter uppercase font-sans text-glow">
                The Synthetic <br />
                <span className="text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/40">
                  Architect
                </span>
              </h1>
              <p className="max-w-3xl mx-auto text-muted-foreground text-lg sm:text-xl md:text-2xl leading-relaxed font-sans bg-background/50 backdrop-blur-xs p-4 rounded-xl border border-border/20">
                A precision-milled component library for the next generation of
                digital archives. Built for high-frequency interfaces and
                spatial clarity.
              </p>
            </div>

            {/* CTA & Terminal */}
            <div className="flex flex-col items-center space-y-8 w-full max-w-2xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink to="/docs/$" params={{ _splat: "" }}>
                  <span className="whitespace-pre-wrap text-center text-sm font-bold tracking-widest uppercase text-white lg:text-base">
                    Explore the Docs
                  </span>
                </ButtonLink>

                <ButtonLink
                  variant="outline"
                  to="/docs/$"
                  params={{ _splat: "components/input" }}
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-bold tracking-widest uppercase text-white lg:text-base">
                    Component Gallery
                  </span>
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-24 border-t border-border/50 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-600">
            <div className="space-y-4 p-6 rounded-2xl bg-secondary/20 backdrop-blur-sm border border-border/50 transition-all hover:bg-secondary/30">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-mono font-bold">
                01
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">
                Performance
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                60fps native performance with zero-runtime CSS overhead.
                Precision-milled for speed and minimal bundle footprint.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-2xl bg-secondary/20 backdrop-blur-sm border border-border/50 transition-all hover:bg-secondary/30">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-mono font-bold">
                02
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">
                Accessibility
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                WCAG 2.1 Level AA compliance out of the box. Designed for
                universal navigation across all architectural layers.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-2xl bg-secondary/20 backdrop-blur-sm border border-border/50 transition-all hover:bg-secondary/30">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-mono font-bold">
                03
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">
                Open-Source
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Free forever. Built on GitHub by a global collective of
                synthetic architects for the open-web initiative.
              </p>
            </div>
          </div>

          {/* Footer Branding */}
          <footer className="pt-24 pb-12 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-mono text-muted-foreground/60 tracking-widest uppercase">
            <div>© 2024 TSXFORGE // SYNTHETIC ARCHITECT DIVISION</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Status
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                License
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Changelog
              </a>
            </div>
          </footer>
        </div>
      </div>
    </HomeLayout>
  );
}
