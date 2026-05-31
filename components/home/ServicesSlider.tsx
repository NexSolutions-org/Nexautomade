"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, UserCheck } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 2;
  const maxIndex = services.length - cardsPerView;

  const prev = () => setCurrentIndex((i) => Math.max(i - 1, 0));
  const next = () => setCurrentIndex((i) => Math.min(i + 1, maxIndex));
  const visible = services.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section className="section-loose bg-[#0E0E12] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1D1D1D] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="section-label">
              <span className="tag-pill">What We Do</span>
            </div>
            <h2 className="text-white mb-4">
              Services built around{" "}
              <span className="text-[#00C2FF]">your business goals</span>
            </h2>
            <p className="text-[#9A9AAA] text-[15px] leading-relaxed">
              From first website to full-scale automation — we pick the right stack, ship on time,
              and stay involved after launch.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <span className="text-[#5C5C6E] text-sm tabular-nums hidden md:block">
              {String(currentIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={currentIndex === 0}
                aria-label="Previous services"
                className="w-11 h-11 rounded-xl bg-[#1D1D1D] border border-white/[0.07] flex items-center justify-center text-[#9A9AAA] hover:border-[#00C2FF]/40 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                disabled={currentIndex >= maxIndex}
                aria-label="Next services"
                className="w-11 h-11 rounded-xl bg-[#1D1D1D] border border-white/[0.07] flex items-center justify-center text-[#9A9AAA] hover:border-[#00C2FF]/40 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((service, idx) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="card-premium group p-8 relative overflow-hidden flex flex-col"
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-[0.06] pointer-events-none -translate-y-1/2 translate-x-1/2"
                  style={{ background: service.accentColor }}
                />

                <div className="flex items-start justify-between gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center p-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: `${service.accentColor}12`,
                      border: `1px solid ${service.accentColor}25`,
                    }}
                  >
                    {service.iconImg ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={service.iconImg}
                        alt=""
                        className="w-full h-full object-contain"
                        style={service.iconInvert ? { filter: "brightness(0) invert(1)" } : undefined}
                      />
                    ) : (
                      <UserCheck size={22} style={{ color: service.accentColor }} />
                    )}
                  </div>
                  <span
                    className="text-[10px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-md"
                    style={{
                      background: `${service.accentColor}10`,
                      color: service.accentColor,
                      border: `1px solid ${service.accentColor}20`,
                    }}
                  >
                    {service.category}
                  </span>
                </div>

                <h3 className="text-white font-bold text-xl mb-2 tracking-tight">{service.title}</h3>
                <p className="text-[#9A9AAA] text-sm leading-relaxed mb-6 flex-1">
                  {service.shortDesc}
                </p>

                <ul className="space-y-2 mb-7">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-[#9A9AAA]">
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: service.accentColor }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    href={`/our-services/${service.slug}`}
                    className="text-sm font-semibold inline-flex items-center gap-1.5 group/link transition-colors"
                    style={{ color: service.accentColor }}
                  >
                    View service
                    <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[#5C5C6E] text-xs font-mono">{service.id}</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: i === currentIndex ? 28 : 6,
                background: i === currentIndex ? "#00C2FF" : "#1D1D1D",
              }}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/our-services" className="btn-outline-cyan px-8 py-3.5 text-sm inline-flex items-center gap-2">
            All services <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
