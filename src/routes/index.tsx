import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Particles } from "@/components/ui/particles";
import { Button } from "@/components/tsxforge/button";
import {
  ArrowRightIcon,
  Terminal,
  Monitor,
  Cpu,
  Fingerprint,
  Layers,
  Box,
  Code2,
  Globe,
  Shield,
  Zap,
  Share2,
  Database,
  LayoutPanelTop,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, gitConfig } from "@/lib/layout.shared";
import { ButtonLink } from "@/components/tsxforge/button-link";

export const Route = createFileRoute("/")({
  component: Home,
});

const SECTION_STAGGER = 0.1;
const ITEM_TRANSITION = { type: "spring", damping: 30, stiffness: 200 };

function Home() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 0.2], [0, 45]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <HomeLayout {...baseOptions()}>
      <div className="relative min-h-screen w-full bg-[#0A0A0B] text-[#EDEDEF] selection:bg-[#8B5CF6]/30 overflow-x-hidden font-sans">
        {/* Ambient background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-dot-matrix opacity-10" />
          <div className="absolute inset-0 bg-noise" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#8B5CF6]/10 blur-[120px] rounded-full opacity-30" />
        </div>

        <div className="relative z-10">
          {/* Section 1: Hero */}
          <section
            ref={heroRef}
            className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 max-w-7xl mx-auto pt-20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                }}
                className="flex flex-col space-y-8"
              >
                {/* Monospace Version Badge */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="inline-flex items-center space-x-3 text-[10px] font-mono tracking-[0.2em] text-zinc-500 uppercase"
                >
                  <span className="w-8 h-px bg-zinc-800" />
                  <span>TSXFORGE_CORE // STABLE_BETA: v1.0.42</span>
                </motion.div>

                {/* Main Headline */}
                <h1 className="flex flex-col text-6xl md:text-8xl lg:text-[120px] font-display font-bold leading-[0.9] tracking-tighter">
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: ITEM_TRANSITION,
                      },
                    }}
                  >
                    THE
                  </motion.span>
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: ITEM_TRANSITION,
                      },
                    }}
                  >
                    COMPONENT
                  </motion.span>
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: ITEM_TRANSITION,
                      },
                    }}
                    className="text-transparent bg-clip-text bg-linear-to-b from-[#8B5CF6] to-[#8B5CF6]/40"
                  >
                    FORGE
                  </motion.span>
                </h1>

                {/* Subhero text */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.8 } },
                  }}
                  className="max-w-md text-zinc-400 text-lg md:text-xl font-light leading-relaxed"
                >
                  Architectural React primitives engineered for technical
                  precision. Beyond UI—we build the logic that drives complex
                  interfaces.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { delay: 1 } },
                  }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <ButtonLink
                    to="/docs/$"
                    params={{ _splat: "" }}
                    className="h-14 px-8 bg-[#8B5CF6] text-white hover:bg-[#7C3AED] border-none rounded-none font-mono uppercase tracking-widest text-xs"
                  >
                    Explore Docs
                  </ButtonLink>
                  <ButtonLink
                    to="/docs/$"
                    params={{ _splat: "components/input" }}
                    variant="ghost"
                    className="h-14 px-8 border border-zinc-800 hover:bg-zinc-900 rounded-none font-mono uppercase tracking-widest text-xs"
                  >
                    Components
                  </ButtonLink>
                </motion.div>
              </motion.div>

              {/* Kinetic Visual Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="hidden lg:flex items-center justify-center relative aspect-square group"
              >
                <motion.div
                  style={{ rotate }}
                  className="w-full h-full border border-zinc-800/50 rounded-full flex items-center justify-center p-12"
                >
                  <div className="w-full h-full border border-zinc-500/10 rounded-full relative animate-orbit">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#8B5CF6] rounded-full blur-[4px]" />
                  </div>
                  <div className="absolute inset-24 border border-zinc-800 rounded-full flex items-center justify-center overflow-hidden">
                    <div className="w-[200%] h-px bg-linear-to-r from-transparent via-[#8B5CF6]/50 to-transparent rotate-45" />
                  </div>
                </motion.div>
                {/* Background Particles integrated into the circle */}
                <div className="absolute inset-0 pointer-events-none">
                  <Particles
                    className="absolute inset-0 z-0"
                    quantity={40}
                    ease={80}
                    color="#8B5CF6"
                    refresh
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section 2: Metrics Strip */}
          <section className="border-y border-zinc-900 bg-black/40 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase overflow-x-auto whitespace-nowrap">
              <div className="flex items-center gap-4">
                <span className="text-[#8B5CF6]">●</span>
                <span>14_CORE_COMPONENTS</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-zinc-800" />
              <div className="flex items-center gap-4">
                <span>100%_TYPESCRIPT_ENGINE</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-zinc-800" />
              <div className="flex items-center gap-4">
                <span>WCAG_2.1_LEVEL_AA</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-zinc-800" />
              <div className="flex items-center gap-4">
                <span>MIT_OPEN_SOURCE</span>
              </div>
            </div>
          </section>

          {/* Section 3: Core Principles */}
          <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col space-y-4 mb-16"
            >
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#8B5CF6] uppercase">
                01 // PHILOSOPHY
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
                Engineered for <br /> Technical Precision.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
              {[
                {
                  id: "01",
                  title: "Built-in Logic",
                  desc: "Beyond just UI. We handle complex state management for pagination, international phone inputs, and file processing routines out of the box.",
                },
                {
                  id: "02",
                  title: "Architectural AA",
                  desc: "WCAG 2.1 Level AA compliance is baked into the DNA. Every component is tested for universal navigation across all design layers.",
                },
                {
                  id: "03",
                  title: "Open Core",
                  desc: "Free forever. Built on GitHub by a global collective. Extensible, community-driven, and open for high-velocity innovation.",
                },
              ].map((feature, i) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-[#0A0A0B] p-10 flex flex-col space-y-8 hover:bg-zinc-950 transition-colors"
                >
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#8B5CF6] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  <span className="font-mono text-xs text-zinc-600 group-hover:text-[#8B5CF6] transition-colors">
                    {feature.id}
                  </span>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold tracking-tight uppercase">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                      {feature.desc}
                    </p>
                  </div>
                  <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRightIcon className="size-5 text-[#8B5CF6]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 4: Showcase Split */}
          <section className="py-32 bg-zinc-950/50 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-24 items-start">
                {/* Left: Component Previews (Bento) */}
                <div className="order-2 lg:order-1 flex flex-col space-y-12">
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono tracking-[0.3em] text-[#8B5CF6] uppercase">
                      02 // SHOWCASE
                    </span>
                    <h2 className="text-4xl font-display font-bold tracking-tighter uppercase">
                      Atomic Elements
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Button Preview */}
                    <div className="col-span-2 p-8 bg-zinc-900/50 border border-zinc-800 rounded-lg flex flex-col items-center justify-center space-y-6">
                      <div className="flex flex-wrap justify-center gap-4">
                        <Button
                          size="sm"
                          className="rounded-none font-mono text-[10px] uppercase tracking-widest px-6"
                        >
                          Primary
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-none font-mono text-[10px] uppercase tracking-widest px-6"
                        >
                          Secondary
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-none font-mono text-[10px] uppercase tracking-widest px-6 underline underline-offset-4"
                        >
                          Ghost
                        </Button>
                      </div>
                      <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                        Button Variants
                      </span>
                    </div>

                    {/* Input Preview */}
                    <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-lg flex flex-col space-y-4">
                      <div className="h-10 border-b border-zinc-700 flex items-center px-1">
                        <span className="text-[10px] font-mono text-zinc-400">
                          Search_
                        </span>
                      </div>
                      <div className="h-10 border-b border-[#8B5CF6] flex items-center px-1">
                        <span className="text-[10px] font-mono text-[#8B5CF6]">
                          Active_Input
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mt-auto">
                        Inputs
                      </span>
                    </div>

                    {/* Info Card Preview */}
                    <div className="p-8 bg-[#8B5CF6]/5 border border-[#8B5CF6]/20 rounded-lg flex flex-col justify-between">
                      <div className="size-8 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center">
                        <LayoutPanelTop className="size-4 text-[#8B5CF6]" />
                      </div>
                      <div className="space-y-1">
                        <div className="h-1 w-full bg-[#8B5CF6]/20 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "70%" }}
                            className="h-full bg-[#8B5CF6]"
                          />
                        </div>
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">
                          Synchronizing_data...
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Code Terminal */}
                <div className="order-1 lg:order-2 sticky top-32">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full bg-[#0A0A0B] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl"
                  >
                    {/* Terminal Header */}
                    <div className="h-10 bg-zinc-900/50 border-b border-zinc-800 flex items-center justify-between px-4">
                      <div className="flex gap-1.5">
                        <div className="size-2.5 rounded-full bg-zinc-800" />
                        <div className="size-2.5 rounded-full bg-zinc-800" />
                        <div className="size-2.5 rounded-full bg-zinc-800" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        Forge_Logic.tsx
                      </span>
                    </div>

                    {/* Code Content */}
                    <div className="p-6 font-mono text-xs leading-relaxed overflow-x-auto overflow-y-hidden">
                      <div className="flex gap-4">
                        <span className="text-zinc-700 select-none">01</span>
                        <span>
                          <span className="text-[#8B5CF6]">import</span> &#123;{" "}
                          <span className="text-emerald-400">Pagination</span>,{" "}
                          <span className="text-[#8B5CF6]">from</span>{" "}
                          <span className="text-amber-200">
                            "@tsxforge/pagination"
                          </span>
                          ;
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-zinc-700 select-none">02</span>
                        <span>&nbsp;</span>
                      </div>
                      <div className="flex gap-4 text-zinc-500">
                        <span className="text-zinc-700 select-none">03</span>
                        <span>
                          <span className="text-[#8B5CF6]">
                            export default function
                          </span>{" "}
                          <span className="text-blue-400">Dashboard</span>()
                          &#123;
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-zinc-700 select-none">04</span>
                        <span className="pl-4">
                          <span className="text-[#8B5CF6]">const</span> [page,
                          setPage] ={" "}
                          <span className="text-blue-400">useState</span>(1);
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-zinc-700 select-none">05</span>
                        <span className="pl-4">&nbsp;</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-zinc-700 select-none">06</span>
                        <span className="pl-4">
                          <span className="text-[#8B5CF6]">return</span> (
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-zinc-700 select-none">07</span>
                        <span className="pl-8 text-zinc-400">
                          &lt;
                          <span className="text-emerald-400">Pagination</span>
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-zinc-700 select-none">08</span>
                        <span className="pl-12 text-zinc-400">
                          current=&#123;
                          <span className="text-zinc-100">page</span>&#125;
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-zinc-700 select-none">09</span>
                        <span className="pl-12 text-zinc-400">
                          onChange=&#123;
                          <span className="text-zinc-100">setPage</span>&#125;
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-zinc-700 select-none">10</span>
                        <span className="pl-8 text-zinc-400">/&gt;</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-zinc-700 select-none">11</span>
                        <span className="pl-4">);</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-zinc-700 select-none">12</span>
                        <span>&#125;</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Component Catalog (Scrolling Strip) */}
          <section className="py-32 overflow-hidden border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
              <div className="flex flex-col space-y-4">
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#8B5CF6] uppercase">
                  03 // CATALOG
                </span>
                <h2 className="text-4xl font-display font-bold tracking-tighter uppercase">
                  The Full Arsenal
                </h2>
              </div>
            </div>

            <div className="relative group/catalog">
              {/* Left Fade */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
              {/* Right Fade */}
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#0A0A0B] to-transparent z-10 pointer-events-none" />

              <motion.div
                className="flex gap-4 px-6 lg:px-12 w-max cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: -3000, right: 0 }}
              >
                {[
                  {
                    name: "Pagination",
                    type: "Logic",
                    icon: <Layers className="size-4" />,
                    id: "01",
                  },
                  {
                    name: "ImageUpload",
                    type: "Input",
                    icon: <Monitor className="size-4" />,
                    id: "02",
                  },
                  {
                    name: "PhoneInput",
                    type: "Input",
                    icon: <Fingerprint className="size-4" />,
                    id: "03",
                  },
                  {
                    name: "Table",
                    type: "Data",
                    icon: <Database className="size-4" />,
                    id: "04",
                  },
                  {
                    name: "DateTimePicker",
                    type: "Input",
                    icon: <Box className="size-4" />,
                    id: "05",
                  },
                  {
                    name: "ColorPicker",
                    type: "Input",
                    icon: <Zap className="size-4" />,
                    id: "06",
                  },
                  {
                    name: "Image",
                    type: "Media",
                    icon: <Share2 className="size-4" />,
                    id: "07",
                  },
                  {
                    name: "Breadcrumb",
                    type: "Nav",
                    icon: <Code2 className="size-4" />,
                    id: "08",
                  },
                  {
                    name: "ActionConfirm",
                    type: "Logic",
                    icon: <Shield className="size-4" />,
                    id: "09",
                  },
                  {
                    name: "DocumentUpload",
                    type: "Input",
                    icon: <Globe className="size-4" />,
                    id: "10",
                  },
                  {
                    name: "EmptyState",
                    type: "Layout",
                    icon: <LayoutPanelTop className="size-4" />,
                    id: "11",
                  },
                  {
                    name: "Button",
                    type: "Action",
                    icon: <Cpu className="size-4" />,
                    id: "12",
                  },
                  {
                    name: "Input",
                    type: "Input",
                    icon: <Terminal className="size-4" />,
                    id: "13",
                  },
                  {
                    name: "Textarea",
                    type: "Input",
                    icon: <Layers className="size-4" />,
                    id: "14",
                  },
                ].map((comp, i) => (
                  <motion.div
                    key={comp.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="w-72 shrink-0 bg-zinc-900/30 border border-zinc-800 p-8 flex flex-col justify-between aspect-video group/card hover:bg-[#8B5CF6]/5 hover:border-[#8B5CF6]/30 transition-all duration-500"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono text-zinc-700 group-hover/card:text-[#8B5CF6] transition-colors">
                        {comp.id}
                      </span>
                      <div className="text-zinc-500 group-hover/card:text-[#8B5CF6] transition-colors">
                        {comp.icon}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold tracking-tight text-lg uppercase">
                        {comp.name}
                      </h4>
                      <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        {comp.type}_Primitive
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-8">
              <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest italic opacity-50">
                ← Drag to navigate full inventory
              </span>
            </div>
          </section>

          {/* Section 6: CTA Section */}
          <section className="py-32 px-6 lg:px-12 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[#8B5CF6]/5" />
            <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#8B5CF6]/20 blur-[160px] rounded-full" />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-tight">
                  Ready to Evolve <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8B5CF6] to-white/40">
                    Your Dev Engine?
                  </span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto"
              >
                Start building high-performance interfaces today with the
                world's most technical React component library. Open source,
                type-safe, and production-ready.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <ButtonLink
                  to="/docs/$"
                  params={{ _splat: "" }}
                  className="h-16 px-12 bg-[#8B5CF6] text-white hover:bg-[#7C3AED] text-lg font-mono uppercase tracking-widest rounded-none shadow-[0_0_50px_-12px_rgba(139,92,246,0.5)]"
                >
                  Get Started Now
                </ButtonLink>
                <ButtonLink
                  to="/docs/$"
                  params={{ _splat: "components/input" }}
                  variant="ghost"
                  className="h-16 px-12 border border-zinc-800 hover:bg-zinc-900 text-lg font-mono uppercase tracking-widest rounded-none"
                >
                  Browse Components
                </ButtonLink>
              </motion.div>
            </div>
          </section>

          {/* Section 7: Footer */}
          <footer className="py-20 px-6 lg:px-12 border-t border-zinc-900 bg-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 text-zinc-500 font-mono text-[10px] tracking-widest uppercase">
              <div className="space-y-6">
                <div className="text-xl font-display font-bold text-[#EDEDEF] tracking-tighter">
                  TSXFORGE
                </div>
                <div className="opacity-50">
                  © 2024 COLLECTIVE // ALL SYSTEMS GO
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
                <div className="flex flex-col space-y-4">
                  <span className="text-zinc-300">Resources</span>
                  <Link
                    to="/docs/$"
                    params={{ _splat: "" }}
                    className="hover:text-[#8B5CF6] transition-colors"
                  >
                    Documentation
                  </Link>
                  <Link
                    to="/docs/$"
                    params={{ _splat: "components/input" }}
                    className="hover:text-[#8B5CF6] transition-colors"
                  >
                    Components
                  </Link>
                  <a
                    href="#"
                    className="hover:text-[#8B5CF6] transition-colors"
                  >
                    Showcase
                  </a>
                </div>
                <div className="flex flex-col space-y-4">
                  <span className="text-zinc-300">Connect</span>
                  <a
                    href={`https://github.com/${gitConfig.user}/${gitConfig.repo}`}
                    className="hover:text-[#8B5CF6] transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#8B5CF6] transition-colors"
                  >
                    Discord
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#8B5CF6] transition-colors"
                  >
                    X / Twitter
                  </a>
                </div>
                <div className="flex flex-col space-y-4">
                  <span className="text-zinc-300">Archive</span>
                  <a
                    href="#"
                    className="hover:text-[#8B5CF6] transition-colors"
                  >
                    Changelog
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#8B5CF6] transition-colors"
                  >
                    Releases
                  </a>
                  <a
                    href={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/LICENSE`}
                    className="hover:text-[#8B5CF6] transition-colors"
                  >
                    License
                  </a>
                </div>
                <div className="flex flex-col space-y-4">
                  <span className="text-zinc-300">Status</span>
                  <div className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Systems_Optimal</span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </HomeLayout>
  );
}
