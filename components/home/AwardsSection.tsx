"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Medal, Layers } from "lucide-react";

const awards = [
  {
    Icon: Trophy,
    title: "Clutch Top Agency",
    year: "2024",
    category: "Web Development",
    accentColor: "#7B5EA7",
    description: "Recognized among top-rated global web agencies",
  },
  {
    Icon: Layers,
    title: "Behance Awards",
    year: "2023",
    category: "UI/UX Design",
    accentColor: "#00C2FF",
    description: "Featured for outstanding digital design work",
  },
  {
    Icon: Star,
    title: "5-Star Rated",
    year: "2024",
    category: "Client Satisfaction",
    accentColor: "#7B5EA7",
    description: "98% satisfaction rate across 100+ clients",
  },
  {
    Icon: Medal,
    title: "Excellence Award",
    year: "2023",
    category: "Digital Innovation",
    accentColor: "#00C2FF",
    description: "Award for innovation in AI-powered web solutions",
  },
];

const recognitions = [
  { label: "Clutch",  sub: "Top Agency" },
  { label: "Behance", sub: "Featured" },
  { label: "Google",  sub: "Partner" },
  { label: "Meta",    sub: "Business" },
];

export default function AwardsSection() {
  return (
    <section className="py-24 bg-[#0D0D14] relative overflow-hidden">

      {/* Decorative arcs top-right */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.06] pointer-events-none">
        {[0,1,2,3,4,5].map((i) => (
          <div key={i} className="absolute rounded-full border border-white"
            style={{
              width:  `${(i+1)*44}px`,
              height: `${(i+1)*44}px`,
              top:    `-${(i+1)*22 - 22}px`,
              right:  `-${(i+1)*22 - 22}px`,
            }} />
        ))}
      </div>

      {/* Decorative arcs bottom-left */}
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-[0.05] pointer-events-none">
        {[0,1,2,3].map((i) => (
          <div key={i} className="absolute rounded-full border border-[#7B5EA7]"
            style={{
              width:  `${(i+1)*48}px`,
              height: `${(i+1)*48}px`,
              bottom: `-${(i+1)*24 - 24}px`,
              left:   `-${(i+1)*24 - 24}px`,
            }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <span className="tag-pill mb-5 inline-block">Award &amp; Achievement</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F0F0F0] leading-tight mb-6">
              Awards &amp;{" "}
              <span className="text-[#00C2FF]">Recognitions</span>
            </h2>
            <p className="text-[#8A8A9A] text-[15px] leading-relaxed mb-10 max-w-sm">
              Our work speaks for itself — internationally recognized for delivering exceptional digital experiences and measurable business results.
            </p>

            {/* Recognition pills */}
            <div className="flex flex-wrap gap-3">
              {recognitions.map((r, i) => (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col items-center px-5 py-3 rounded-xl border border-[#1C1C28] bg-[#12121A]"
                >
                  <span className="text-[#F0F0F0] font-bold text-sm">{r.label}</span>
                  <span className="text-[#8A8A9A] text-[10px] tracking-wider uppercase mt-0.5">{r.sub}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Award cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-[#1C1C28] bg-[#12121A] p-6 overflow-hidden hover:border-[#2A2A3A] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top row: icon + year */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `${award.accentColor}18`,
                      border: `1px solid ${award.accentColor}30`,
                    }}
                  >
                    <award.Icon size={24} style={{ color: award.accentColor }} />
                  </div>
                  <span
                    className="text-xs font-bold tracking-widest px-2.5 py-1 rounded-full"
                    style={{
                      background: `${award.accentColor}15`,
                      color: award.accentColor,
                      border: `1px solid ${award.accentColor}25`,
                    }}
                  >
                    {award.year}
                  </span>
                </div>

                {/* Category */}
                <div className="text-[10px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: award.accentColor }}>
                  {award.category}
                </div>

                <h3 className="text-[#F0F0F0] font-bold text-lg mb-2 leading-tight">{award.title}</h3>
                <p className="text-[#8A8A9A] text-sm leading-relaxed">{award.description}</p>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: `linear-gradient(90deg, ${award.accentColor}, transparent)` }}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
