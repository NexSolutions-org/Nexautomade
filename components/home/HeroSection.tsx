"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Phone, Globe, Zap, TrendingUp, Search } from "lucide-react";

const stats = [
  { value: "186+", label: "Projects Done", sub: "since 2021" },
  { value: "100+", label: "Happy Clients", sub: "across 12 countries" },
  { value: "98%", label: "Satisfaction Rate", sub: "verified client rating" },
  { value: "4+", label: "Years Active", sub: "years in business" },
];

const highlights = [
  { label: "Get a Free Audit", href: "/contact" },
  { label: "Book Consultation", href: "/schedule-meeting" },
];

const floatingCards = [
  { icon: Globe, label: "Web Development", color: "#00C2FF", pos: "top" },
  { icon: Zap, label: "AI Automation", color: "#7B5EA7", pos: "right" },
  { icon: TrendingUp, label: "Digital Marketing", color: "#00C2FF", pos: "bottom" },
  { icon: Search, label: "SEO Growth", color: "#7B5EA7", pos: "left" },
];

const posStyle: Record<string, string> = {
  top: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  right: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
  bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  left: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
};

export default function HeroSection() {
  return (
    <section className="hex-grid min-h-[94vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(123,94,167,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 40% 40% at 30% 40%, rgba(0,194,255,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-[#9A9AAA] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
              Perfect Digital Solution
            </p>

            <h1 className="font-extrabold leading-[1.08] tracking-tight mb-6 text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[3.25rem]">
              <span className="text-[#EBEBEB]">Result Driven </span>
              <span className="text-[#00C2FF]">Digital Growth Agency</span>
              <span className="text-[#EBEBEB]"> in Lahore</span>
            </h1>

            <p className="text-[#9A9AAA] text-base md:text-[17px] leading-relaxed mb-8 max-w-lg">
              In today&apos;s digital era, Nexsolutions empowers businesses with high-performance websites, AI
              automation, and marketing that actually delivers measurable results.
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
              {highlights.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2.5 text-[#EBEBEB] text-sm font-medium hover:text-[#00C2FF] transition-colors group"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00C2FF] ring-4 ring-[#00C2FF]/15 group-hover:ring-[#00C2FF]/30 transition-all" />
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
              <Link
                href="/schedule-meeting"
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wide group"
              >
                Contact Us Today
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href="tel:+923062646255"
                className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/[0.08] bg-[#1D1D1D] hover:border-[#00C2FF]/30 transition-colors group"
              >
                <div className="w-11 h-11 rounded-full bg-[#25D366]/15 border border-[#25D366]/25 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone size={18} className="text-[#25D366]" />
                </div>
                <div>
                  <p className="text-[#5C5C6E] text-[10px] uppercase tracking-wider font-semibold">Contact Us</p>
                  <p className="text-[#EBEBEB] text-sm font-bold">+92 306 2646255</p>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "/images/testimonials/What-clients-think-of-Nexsolutions.webp",
                  "/images/testimonials/What-clients-think-of-Nexsolutions2.webp",
                  "/images/testimonials/What-clients-think-of-Nexsolutions-1.webp",
                  "/images/testimonials/360_F_444749923_B0XJTJJRUVlRQHcDeSV1eOG6JjkKdj7Q-1.webp",
                ].map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={i} src={src} alt="client" className="w-8 h-8 rounded-full border-2 border-[#0A0A0F] object-cover" />
                ))}
              </div>
              <span className="text-[#9A9AAA] text-xs">
                Trusted by <span className="text-[#EBEBEB] font-semibold">100+</span> businesses worldwide
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center items-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-[#00C2FF]/20" />
              <div className="absolute inset-[-20px] rounded-full border border-dashed border-[#00C2FF]/15 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-[-40px] rounded-full border border-[#1C1C28]" />

              <div
                className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full opacity-25 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, #7B5EA7, #00C2FF)" }}
              />

              <div
                className="w-48 h-48 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full flex flex-col items-center justify-center relative overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #2A1A4A 0%, #1A1A3A 50%, #0D1A2E 100%)",
                  border: "2px solid rgba(0,194,255,0.25)",
                  boxShadow: "0 0 60px rgba(0,194,255,0.12), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.08) 0%, transparent 60%)" }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/agent.jpg"
                  alt="Nexsolutions AI"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/90 via-[#0A0A0F]/20 to-transparent" />
                <div className="relative z-10 text-center select-none px-4 mt-auto pb-6">
                  <div className="text-white/40 text-[8px] tracking-[0.35em] uppercase mb-1">Powered by AI</div>
                  <div className="text-white font-black text-xl md:text-2xl tracking-tight">Nexsolutions</div>
                </div>
              </div>

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
                        border: "1px solid rgba(255,255,255,0.08)",
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
      </div>
    </section>
  );
}
