"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const platforms = [
  { name: "n8n",       symbol: "âš¡", color: "#EA4B71",  icon: null },
  { name: "OpenAI",    symbol: "AI", color: "#10A37F",  icon: "/images/icons/openai-svgrepo-com.svg",                invert: false },
  { name: "React",     symbol: "âš›", color: "#61DAFB",  icon: "/images/icons/react-svgrepo-com.svg",                 invert: false },
  { name: "WordPress", symbol: "W",  color: "#21759B",  icon: "/images/icons/wordpress-color-svgrepo-com.svg",       invert: false },
  { name: "Shopify",   symbol: "S",  color: "#96BF48",  icon: "/images/icons/shopify-svgrepo-com.svg",               invert: false },
  { name: "Vercel",    symbol: "â–³", color: "#FFFFFF",  icon: "/images/icons/vercel-fill-svgrepo-com.svg",            invert: true  },
  { name: "Figma",     symbol: "â—†", color: "#F24E1E",  icon: "/images/icons/figma-svgrepo-com.svg",                 invert: false },
];

const positions = [
  { top: "10%",  left: "15%" },
  { top: "22%",  right: "10%" },
  { top: "48%",  left: "4%" },
  { bottom: "22%", left: "20%" },
  { bottom: "12%", right: "16%" },
  { top: "60%",  right: "6%" },
  { top: "6%",   right: "32%" },
];

export default function PlatformsSection() {
  return (
    <section className="py-24 bg-[#111118] border-y border-[#1E1E2E]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="tag-pill mb-5 inline-block">Integrations</span>
            <p className="text-[#8888A0] text-sm mb-3">Trusted by 40,000+ businesses worldwide.</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Works with your{" "}
              <span className="text-[#00C2FF]">favourite tools</span>
            </h2>
            <p className="text-[#8888A0] text-[15px] leading-relaxed mb-10">
              We integrate with the world&apos;s leading platforms â€” from AI automation tools to e-commerce engines â€” delivering powerful, scalable solutions.
            </p>

            {/* Platform chips â€” mobile only */}
            <div className="flex flex-wrap gap-2 mb-10 lg:hidden">
              {platforms.map((p) => (
                <div key={p.name} className="card flex items-center gap-2 px-3 py-2 text-xs font-medium">
                  {p.icon ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.icon}
                      alt={p.name}
                      className="w-4 h-4 object-contain"
                      style={p.invert ? { filter: "brightness(0) invert(1)" } : undefined}
                    />
                  ) : (
                    <span style={{ color: p.color }}>{p.symbol}</span>
                  )}
                  <span className="text-[#8888A0]">{p.name}</span>
                </div>
              ))}
            </div>

            <Link href="/contact"
              className="btn-primary flex items-center gap-2 px-8 py-3.5 text-sm inline-flex group w-fit">
              Work With Us
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Globe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:flex items-center justify-center h-80"
          >
            {/* Globe */}
            <div className="relative w-52 h-52">
              <div className="w-full h-full rounded-full border border-[#1E1E2E] relative overflow-hidden spin-slow">
                <div className="absolute inset-0"
                  style={{
                    backgroundImage: "radial-gradient(circle, #1E1E2E 1px, transparent 1px)",
                    backgroundSize: "14px 14px",
                  }} />
                <div className="absolute inset-0"
                  style={{ background: "radial-gradient(ellipse at 35% 35%, rgba(107,92,231,0.12), transparent 60%)" }} />
              </div>
              <div className="absolute inset-[-18px] rounded-full border border-[#1E1E2E] border-dashed spin-slow-reverse" />
              <div className="absolute inset-[-36px] rounded-full border border-[#161622] border-dashed" />

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="gradient-text text-xl font-bold">40K+</div>
                  <div className="text-[#8888A0] text-[9px] tracking-widest uppercase">Businesses</div>
                </div>
              </div>
            </div>

            {/* Platform cards */}
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                animate={{ y: [0, index % 2 === 0 ? -7 : 7, 0] }}
                transition={{ duration: 3 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute"
                style={positions[index]}
              >
                <div className="card w-16 p-2.5 text-center flex flex-col items-center">
                  {platform.icon ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={platform.icon}
                      alt={platform.name}
                      className="w-7 h-7 object-contain mb-1.5"
                      style={platform.invert ? { filter: "brightness(0) invert(1)" } : undefined}
                    />
                  ) : (
                    <div className="text-base leading-none mb-1.5" style={{ color: platform.color }}>
                      {platform.symbol}
                    </div>
                  )}
                  <div className="text-[#8888A0] text-[9px] font-medium leading-tight">
                    {platform.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
