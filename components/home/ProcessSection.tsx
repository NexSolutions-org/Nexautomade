"use client";

import { motion } from "framer-motion";
import { MessageSquare, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery",
    description: "We learn your business, goals, and audience to define a clear strategy before writing a single line of code.",
    icon: MessageSquare,
    color: "#6B5CE7",
  },
  {
    id: "02",
    title: "Design",
    description: "Pixel-perfect wireframes and prototypes are approved before development begins — no surprises.",
    icon: Palette,
    color: "#00D4FF",
  },
  {
    id: "03",
    title: "Development",
    description: "Modern, clean code. Fast, SEO-ready, and built to scale from day one.",
    icon: Code2,
    color: "#6B5CE7",
  },
  {
    id: "04",
    title: "Launch & Grow",
    description: "We deploy, monitor, and support your product post-launch to ensure continued success.",
    icon: Rocket,
    color: "#00D4FF",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-normal bg-[#1D1D1D] border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4 inline-block">How We Work</span>
          <h2 className="text-white">
            From brief to launch in{" "}
            <span className="text-[#00C2FF]">four clear steps</span>
          </h2>
          <p className="text-[#9A9AAA] mt-4 max-w-lg mx-auto text-[15px] leading-relaxed">
            No endless revisions or vague timelines. You know what happens at each stage and when to expect it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#252525] rounded-xl p-7 group hover:bg-[#2a2a2a] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
              >
                {/* Number */}
                <div className="gradient-text text-4xl font-black mb-5 leading-none">{step.id}</div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: `${step.color}15`, border: `1px solid ${step.color}25` }}>
                  <Icon size={18} style={{ color: step.color }} />
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-[#8888A0] text-sm leading-relaxed">{step.description}</p>

                {/* Bottom accent on hover */}
                <div className="mt-6 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                  style={{ background: `linear-gradient(90deg, ${step.color}, ${step.color === "#6B5CE7" ? "#00D4FF" : "#6B5CE7"})` }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


