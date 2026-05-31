"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Zap, Puzzle, Globe2, HeartHandshake } from "lucide-react";

const features = [
  {
    id: "01",
    title: "Fast Turnaround",
    tag: "Speed",
    description: "Most business sites go live in 1–2 weeks. We move quickly without cutting corners on quality or performance.",
    icon: Zap,
    accentColor: "#6B5CE7",
    tint: "rgba(107,92,231,0.45)",
    points: ["Fixed timelines from day one", "Weekly progress updates"],
    image: "/images/hero/18707-300x200.webp",
  },
  {
    id: "02",
    title: "Built for You",
    tag: "Custom",
    description: "No cookie-cutter templates. Every layout, feature, and integration is shaped around how your business actually works.",
    icon: Puzzle,
    accentColor: "#00D4FF",
    tint: "rgba(0,180,220,0.38)",
    points: ["Tailored UX and architecture", "Scalable from the start"],
    image: "/images/hero/Untitled-1600-x-900-px-1500-x-900-px-4-300x180.webp",
  },
  {
    id: "03",
    title: "Global Delivery",
    tag: "Reach",
    description: "Based in Lahore, trusted in 12+ countries. We've shipped projects for clients across the Middle East, Europe, and North America.",
    icon: Globe2,
    accentColor: "#6B5CE7",
    tint: "rgba(107,92,231,0.45)",
    points: ["Remote-first workflow", "Clear async communication"],
    image: "/images/hero/Untitled-design-43-300x180.webp",
  },
  {
    id: "04",
    title: "Long-Term Support",
    tag: "Partnership",
    description: "Launch day isn't the finish line. We handle maintenance, updates, and growth improvements as your needs evolve.",
    icon: HeartHandshake,
    accentColor: "#00D4FF",
    tint: "rgba(0,180,220,0.38)",
    points: ["Post-launch maintenance plans", "Dedicated account contact"],
    image: "/images/hero/Untitled-1600-x-900-px-1500-x-900-px-1-300x180.webp",
  },
];

export default function FeaturesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-loose bg-[#0E0E12]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-label">
            <span className="tag-pill">Why Nexsolutions</span>
          </div>
          <h2 className="text-white">
            Built for growth,{" "}
            <span className="text-[#00C2FF]">from launch to long-term support</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="flex flex-col lg:flex-row gap-3 lg:h-[480px]"
        >
          {features.map((f, index) => {
            const Icon = f.icon;
            const isActive = active === index;
            return (
              <motion.div
                key={f.id}
                layout
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                  isActive ? "flex-[3]" : "flex-1"
                }`}
                style={{ minHeight: "64px" }}
              >
                {/* Background image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.image}
                  alt={f.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                  style={{
                    opacity: isActive ? 0.95 : 0.8,
                    transform: isActive ? "scale(1.12)" : "scale(1.06)",
                    filter: isActive ? "blur(1px) saturate(1.3) brightness(0.85)" : "blur(2px) saturate(1.1) brightness(0.75)",
                  }}
                />

                {/* Brand color tint */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ background: f.tint, opacity: isActive ? 0.55 : 0.78 }}
                />

                {/* Bottom-to-top dark fade */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: isActive
                      ? "linear-gradient(to top, rgba(10,10,15,0.90) 0%, rgba(10,10,15,0.35) 50%, rgba(10,10,15,0.1) 100%)"
                      : "linear-gradient(to top, rgba(10,10,15,0.85) 0%, rgba(10,10,15,0.4) 60%, rgba(10,10,15,0.15) 100%)",
                  }}
                />

                {/* Active border glow */}
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1.5px ${f.accentColor}55` }}
                  />
                )}

                {/* Left accent bar */}
                {isActive && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
                    style={{
                      background: `linear-gradient(180deg, ${f.accentColor}, ${f.accentColor === "#6B5CE7" ? "#00D4FF" : "#6B5CE7"})`,
                    }}
                  />
                )}

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  {isActive ? (
                    <AnimatePresence>
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col h-full gap-5"
                      >
                        {/* Icon + tag */}
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm"
                            style={{
                              background: `${f.accentColor}25`,
                              border: `1px solid ${f.accentColor}50`,
                            }}
                          >
                            <Icon size={18} style={{ color: f.accentColor }} />
                          </div>
                          <span
                            className="text-[10px] font-bold tracking-[0.22em] uppercase"
                            style={{ color: f.accentColor, textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                          >
                            {f.tag}
                          </span>
                        </div>

                        {/* Title + description */}
                        <div className="flex-1">
                          <h3
                            className="text-white font-bold text-2xl md:text-3xl mb-3 leading-tight"
                            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
                          >
                            {f.title}
                          </h3>
                          <p
                            className="text-white/70 text-sm leading-relaxed max-w-xs"
                            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                          >
                            {f.description}
                          </p>
                        </div>

                        {/* Points */}
                        <div className="space-y-2">
                          {f.points.map((p) => (
                            <div key={p} className="flex items-center gap-2.5 text-sm text-white/75">
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: f.accentColor, boxShadow: `0 0 6px ${f.accentColor}` }}
                              />
                              {p}
                            </div>
                          ))}
                        </div>

                        {/* Arrow */}
                        <div>
                          <button
                            className="w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
                            style={{
                              background: `${f.accentColor}20`,
                              border: `1px solid ${f.accentColor}50`,
                              color: f.accentColor,
                            }}
                          >
                            <ArrowUpRight size={16} />
                          </button>
                        </div>

                        {/* Number watermark */}
                        <div className="absolute bottom-4 right-6 text-[90px] font-black leading-none select-none pointer-events-none text-white/[0.07]">
                          {f.id}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    <div className="flex lg:flex-col items-center justify-center h-full gap-3">
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center backdrop-blur-sm"
                        style={{
                          background: `${f.accentColor}25`,
                          border: `1px solid ${f.accentColor}40`,
                        }}
                      >
                        <Icon size={15} style={{ color: f.accentColor }} />
                      </div>
                      <span
                        className="lg:[writing-mode:vertical-lr] lg:rotate-180 text-xs font-semibold text-white/80 tracking-wide truncate"
                        style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
                      >
                        {f.title}
                      </span>
                      <div className="absolute bottom-4 text-[52px] font-black leading-none select-none pointer-events-none text-white/[0.12]">
                        {f.id}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
