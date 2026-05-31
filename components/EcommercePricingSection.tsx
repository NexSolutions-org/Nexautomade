"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { ecommercePackages } from "@/data/ecommercePackages";

export default function EcommercePricingSection() {
  return (
    <section className="section-loose bg-[#0E0E12] border-t border-white/[0.05] relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #00D4FF, transparent)", filter: "blur(80px)" }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-5"
            style={{ background: "#00D4FF15", color: "#00D4FF", border: "1px solid #00D4FF30" }}>
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#EBEBEB] leading-tight mb-5">
            Ecommerce Website Development Company in Pakistan
          </h2>
          <p className="text-[#8A8A9A] text-[16px] leading-relaxed mb-4">
            Nexsolutions builds fast, secure, and easy-to-use online stores for startups, SMEs, and
            established brands. From Shopify and WooCommerce to fully custom platforms — we deliver
            stores that convert visitors into loyal customers.
          </p>
          <p className="text-[#EBEBEB] font-semibold text-lg">Get Your Free Quote Today</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {ecommercePackages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl border p-7 flex flex-col h-full transition-all duration-200 ${
                pkg.highlighted
                  ? "border-[#00C2FF]/30 bg-[#1D1D1D] shadow-[0_0_40px_rgba(0,212,255,0.06)] md:-mt-2 md:mb-2"
                  : "border-white/[0.06] bg-[#1D1D1D] hover:border-white/[0.12] hover:bg-[#252525]"
              }`}
            >
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#555566] mb-2">
                {pkg.tag}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#EBEBEB] uppercase tracking-wide mb-1">
                {pkg.name}
              </h3>
              <p className="text-[#8A8A9A] text-sm font-medium mb-6">{pkg.price}</p>

              <Link
                href="/schedule-meeting"
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 mb-8 ${
                  pkg.highlighted
                    ? "btn-primary"
                    : "bg-[#EBEBEB] text-[#0A0A0F] hover:bg-white hover:-translate-y-0.5"
                }`}
              >
                Talk to an Expert
                {pkg.highlighted && <ArrowRight size={14} />}
              </Link>

              <ul className="space-y-3 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#00D4FF15]">
                      <Check size={10} className="text-[#00D4FF]" />
                    </span>
                    <span className="text-[#8A8A9A] text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
