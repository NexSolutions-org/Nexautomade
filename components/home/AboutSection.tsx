"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const highlights = [
  "Ongoing Website Maintenance",
  "Mobile-First Development",
  "Strategic Growth Techniques",
  "AI Automation & Chatbots",
  "100+ Satisfied Clients",
  "Targeted Meta & Google Ads",
];

const codeLines = [
  "const nexsolutions = {",
  '  clients: "100+",',
  '  projects: "186+",',
  '  rating: "98%",',
  '  location: "Lahore, PK",',
  "};",
  "",
  "async function buildYourFuture() {",
  "  return await grow(design, develop);",
  "}",
];

export default function AboutSection() {
  return (
    <section className="section-loose bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — image + stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Nex image */}
            <div className="rounded-2xl overflow-hidden border border-[#1E1E2E]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/nex.webp"
                alt="Nexsolutions"
                className="w-full h-auto block"
                style={{ imageRendering: "auto" }}
              />
            </div>

            {/* Stats below image */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { v: "186+", l: "Projects" },
                { v: "4+", l: "Years" },
                { v: "98%", l: "Satisfaction" },
              ].map((s) => (
                <div key={s.l} className="card py-4 text-center">
                  <div className="gradient-text font-bold text-xl">{s.v}</div>
                  <div className="text-[#8888A0] text-xs mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="tag-pill mb-5 inline-block">About Nexsolutions</span>
            <h2 className="text-[#F0F0F0] mb-5 leading-tight">
              A Lahore agency with{" "}
              <span className="text-[#00C2FF]">global reach</span>
            </h2>
            <p className="text-[#9A9AAA] text-[15px] leading-relaxed mb-4">
              We&apos;re a small, senior team — not a factory. Every project gets direct attention from people who actually build the product, not account managers reading scripts.
            </p>
            <p className="text-[#9A9AAA] text-[15px] leading-relaxed mb-8">
              186+ delivered projects across web, AI, e-commerce, and marketing. Most clients come back for phase two.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-10">
              {highlights.map((item, i) => (
                <motion.div key={item}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="flex items-center gap-2.5">
                  <Check size={14} className="text-[#6B5CE7] flex-shrink-0" />
                  <span className="text-[#8888A0] text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/about-us" className="btn-primary flex items-center gap-2 px-7 py-3.5 text-sm group">
                Learn More
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/contact" className="btn-secondary flex items-center gap-2 px-7 py-3.5 text-sm">
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


