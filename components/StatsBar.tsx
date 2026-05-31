"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Briefcase, Users, ThumbsUp, Clock } from "lucide-react";

const stats = [
  { value: 186, suffix: "+", label: "Projects Completed", icon: Briefcase },
  { value: 100, suffix: "+", label: "Satisfied Clients", icon: Users },
  { value: 98, suffix: "%", label: "Positive Rating", icon: ThumbsUp },
  { value: 4, suffix: "+", label: "Years Experience", icon: Clock },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="gradient-text text-4xl md:text-5xl font-bold tabular-nums">
      {count}
      {suffix}
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="section-tight bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[#1D1D1D] border border-white/[0.06] rounded-xl py-8 px-6 text-center group hover:border-[#00C2FF]/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00C2FF]/10 border border-[#00C2FF]/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon size={18} className="text-[#00C2FF]" />
                  </div>
                </div>
                <CountUp target={stat.value} suffix={stat.suffix} />
                <p className="text-[#9A9AAA] text-sm mt-2">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
