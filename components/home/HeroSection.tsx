"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Zap, TrendingUp, Search } from "lucide-react";

const stats = [
  { value: "186+", label: "Projects Done",      sub: "since 2021" },
  { value: "100+", label: "Happy Clients",      sub: "across 12 countries" },
  { value: "98%",  label: "Satisfaction Rate",  sub: "verified client rating" },
  { value: "4+",   label: "Years Active",       sub: "years in business" },
];

const floatingCards = [
  { icon: Globe,      label: "Web Development",   color: "#00C2FF", pos: "top" },
  { icon: Zap,        label: "AI Automation",     color: "#7B5EA7", pos: "right" },
  { icon: TrendingUp, label: "Digital Marketing", color: "#00C2FF", pos: "bottom" },
  { icon: Search,     label: "SEO Growth",        color: "#7B5EA7", pos: "left" },
];

const posStyle: Record<string, string> = {
  top:    "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  right:  "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
  bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  left:   "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
};

export default function HeroSection() {
  return (
    <section className="hex-grid min-h-[94vh] flex items-center relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(123,94,167,0.07) 0%, transparent 70%)" }} className="absolute inset-0" />
        <div style={{ background: "radial-gradient(ellipse 40% 40% at 30% 40%, rgba(0,194,255,0.05) 0%, transparent 70%)" }} className="absolute inset-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-white/[0.08] bg-[#1D1D1D]">
              <span className="w-2 h-2 rounded-full bg-[#00C2FF]" />
              <span className="text-[#9A9AAA] text-[11px] tracking-[0.16em] uppercase font-medium">
                Lahore-based · Serving 12+ countries
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-extrabold leading-[1.06] tracking-tight mb-7">
              <span className="block text-[#EBEBEB]/30 font-light text-2xl md:text-3xl xl:text-4xl mb-2 tracking-normal">
                your trusted
              </span>
              <span className="block text-[#EBEBEB] text-[46px] sm:text-5xl md:text-6xl xl:text-[76px]">
                Digital
              </span>
              <span className="block gradient-text text-[46px] sm:text-5xl md:text-6xl xl:text-[76px]">
                Growth
              </span>
              <span className="block text-[#EBEBEB]/30 font-light text-2xl md:text-3xl xl:text-4xl mt-2 tracking-normal">
                partner
              </span>
            </h1>

            <p className="text-[#9A9AAA] text-base md:text-[17px] leading-relaxed mb-9 max-w-md">
              Websites that win clients. AI tools that save hours. Marketing that moves the needle — built by a team that&apos;s shipped 186+ projects since 2021.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
              <Link href="/schedule-meeting"
                className="btn-primary flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold group">
                Schedule a Meeting
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/project-showcase"
                className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 text-sm">
                View Our Work
              </Link>
            </div>

            {/* Trust line */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "/images/testimonials/What-clients-think-of-Nexsolutions.webp",
                  "/images/testimonials/What-clients-think-of-Nexsolutions2.webp",
                  "/images/testimonials/What-clients-think-of-Nexsolutions-1.webp",
                  "/images/testimonials/360_F_444749923_B0XJTJJRUVlRQHcDeSV1eOG6JjkKdj7Q-1.webp",
                ].map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={src}
                    alt="client"
                    className="w-8 h-8 rounded-full border-2 border-[#0A0A0F] object-cover"
                  />
                ))}
              </div>
              <span className="text-[#8A8A9A] text-xs">
                Trusted by <span className="text-[#EBEBEB] font-semibold">100+</span> businesses worldwide
              </span>
            </div>
          </motion.div>

          {/* RIGHT — circle + floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center items-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] flex items-center justify-center">

              {/* Outer rings */}
              <div className="absolute inset-0 rounded-full border border-[#1C1C28]" />
              <div className="absolute inset-[-28px] rounded-full border border-[#161622]" />
              <div className="absolute inset-[-54px] rounded-full border border-[#111119] opacity-50" />

              {/* Subtle glow behind circle */}
              <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, #7B5EA7, #00C2FF)" }} />

              {/* Main circle */}
              <div
                className="w-48 h-48 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full flex flex-col items-center justify-center relative"
                style={{
                  background: "linear-gradient(145deg, #2A1A4A 0%, #1A1A3A 50%, #0D1A2E 100%)",
                  border: "1px solid rgba(123,94,167,0.3)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 0 40px rgba(123,94,167,0.15)",
                }}
              >
                <div className="absolute inset-0 rounded-full"
                  style={{ background: "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.07) 0%, transparent 60%)" }} />
                <div className="relative z-10 text-center select-none px-4">
                  <div className="text-white/30 text-[8px] tracking-[0.4em] uppercase mb-2">Digital Agency</div>
                  <div className="text-white font-black text-3xl md:text-4xl tracking-tight leading-none">Nex</div>
                  <div className="text-[#00C2FF] font-light text-base md:text-lg tracking-[0.15em] mt-0.5">solutions</div>
                  <div className="w-8 h-px mx-auto mt-3 mb-3 bg-white/15" />
                  <div className="text-white/25 text-[9px] tracking-[0.3em] uppercase">Est. 2021</div>
                </div>
              </div>

              {/* Floating service cards */}
              {floatingCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.pos}
                    className={`absolute ${posStyle[card.pos]} z-10`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  >
                    <div
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl whitespace-nowrap"
                      style={{
                        background: "#1D1D1D",
                        border: "1px solid rgba(255,255,255,0.07)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                      }}
                    >
                      <div
                        className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${card.color}15`, border: `1px solid ${card.color}25` }}
                      >
                        <Icon size={14} style={{ color: card.color }} />
                      </div>
                      <span className="text-[#EBEBEB] text-[12px] font-semibold hidden sm:block">{card.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 md:mt-20 pt-8 md:pt-10 border-t border-[#1C1C28]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="gradient-text text-2xl md:text-3xl font-bold mb-0.5">{s.value}</div>
                <div className="text-[#EBEBEB] text-sm font-medium">{s.label}</div>
                <div className="text-[#555566] text-[11px] mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[#555566] text-[10px] tracking-widest uppercase">scroll</span>
          <div className="w-5 h-8 rounded-full border border-[#1C1C28] flex justify-center pt-1.5">
            <div className="w-0.5 h-2 rounded-full bg-[#8A8A9A] scroll-dot" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
