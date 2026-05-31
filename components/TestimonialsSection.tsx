"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection({ count = 6 }: { count?: number }) {
  const displayed = testimonials.slice(0, count);

  return (
    <section className="section-loose bg-[#0E0E12]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="tag-pill mb-4 inline-block">Client Feedback</span>
          <h2 className="text-white">
            Results our clients{" "}
            <span className="text-[#00C2FF]">talk about</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="card-premium group p-6 relative overflow-hidden"
            >
              {/* Large quote mark */}
              <div className="absolute top-4 right-4 text-6xl font-serif text-[#1E1E2E] select-none leading-none group-hover:text-[#6B5CE7]/20 transition-colors duration-400">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Review */}
              <p className="text-[#8888A0] text-sm leading-relaxed mb-6 relative z-10">
                &ldquo;{t.review}&rdquo;
              </p>

              <div className="border-t border-[#1E1E2E] pt-4 flex items-center gap-3">
                {/* Avatar â€” real photo if available, else gradient initial */}
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-[#2A2A3E]">
                  {t.avatar ? (
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: "linear-gradient(135deg,#6B5CE7,#00D4FF)" }}>
                      {t.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-[#8888A0] text-xs">{t.role}</p>
                </div>
                {/* Verified badge */}
                <div className="ml-auto w-5 h-5 rounded-full bg-[#6B5CE7] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 10 10" className="w-3 h-3">
                    <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Bottom gradient line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: "linear-gradient(90deg,#6B5CE7,#00D4FF)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
