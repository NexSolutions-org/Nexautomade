"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, ArrowLeft, UserCheck } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import EcommercePricingSection from "@/components/EcommercePricingSection";
import { services } from "@/data/services";

type Service = (typeof services)[number];

function BrowserMockup({ src, accentColor }: { src: string; accentColor: string }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[#1C1C28] shadow-2xl"
      style={{ boxShadow: `0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)` }}>
      {/* Browser bar */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#111118] border-b border-[#1C1C28]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex-1 bg-[#0A0A0F] rounded-md px-3 py-1 flex items-center gap-2 max-w-xs mx-auto">
          <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: accentColor, opacity: 0.6 }} />
          <span className="text-[#555566] text-[10px] truncate">nexsolutions.org</span>
        </div>
        <div className="flex gap-1.5 opacity-30">
          <span className="w-3 h-0.5 rounded bg-[#555566]" />
          <span className="w-3 h-0.5 rounded bg-[#555566]" />
        </div>
      </div>
      {/* Screenshot */}
      <div className="relative overflow-hidden" style={{ maxHeight: "420px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="Project preview"
          className="w-full object-cover object-top"
          style={{ display: "block" }}
        />
        {/* Fade bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #0A0A0F)" }} />
      </div>
    </div>
  );
}

export default function ServicePageContent({ service }: { service: Service }) {
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero split section */}
      <section className="section-loose bg-[#0A0A0F] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full opacity-5 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${service.accentColor}, transparent)`, filter: "blur(80px)" }} />

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-12 text-[13px] text-[#555566]">
            <Link href="/" className="hover:text-[#EBEBEB] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/our-services" className="hover:text-[#EBEBEB] transition-colors">Our Services</Link>
            <span>/</span>
            <span className="text-[#EBEBEB]">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* LEFT — content */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Category tag */}
              <span
                className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-6"
                style={{ background: `${service.accentColor}15`, color: service.accentColor, border: `1px solid ${service.accentColor}30` }}
              >
                {service.category}
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-[#EBEBEB] leading-tight mb-6">
                {service.title}
              </h1>

              <p className="text-[#8A8A9A] text-[17px] leading-relaxed mb-10">
                {service.description}
              </p>

              {/* Features checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {service.fullFeatures.map((feat, i) => (
                  <motion.div
                    key={feat}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.3 + i * 0.05 }}
                    className="flex items-start gap-2.5"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${service.accentColor}20` }}
                    >
                      <Check size={10} style={{ color: service.accentColor }} />
                    </span>
                    <span className="text-[#8A8A9A] text-sm leading-relaxed">{feat}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/schedule-meeting"
                  className="btn-primary flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold group"
                >
                  Talk to an Expert
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/our-services"
                  className="btn-secondary flex items-center gap-2 px-7 py-3.5 text-sm"
                >
                  <ArrowLeft size={14} />
                  All Services
                </Link>
              </div>

              {/* Trust stats */}
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-[#1C1C28]">
                {[
                  { value: "186+", label: "Projects" },
                  { value: "100+", label: "Clients" },
                  { value: "98%",  label: "Satisfaction" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-xl font-bold" style={{ color: service.accentColor }}>{s.value}</div>
                    <div className="text-[#555566] text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — browser mockup */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {(service as { mockupImg?: string }).mockupImg ? (
                <BrowserMockup
                  src={(service as { mockupImg?: string }).mockupImg!}
                  accentColor={service.accentColor}
                />
              ) : (
                /* Fallback visual */
                <div className="w-full h-80 rounded-2xl border border-[#1C1C28] bg-[#111118] flex items-center justify-center">
                  {service.iconImg ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={service.iconImg} alt={service.title}
                      className="w-20 h-20 object-contain opacity-30"
                      style={service.iconInvert ? { filter: "brightness(0) invert(1)" } : undefined} />
                  ) : (
                    <UserCheck size={48} style={{ color: service.accentColor, opacity: 0.3 }} />
                  )}
                </div>
              )}

              {/* Service icon badge */}
              <div className="flex items-center gap-3 mt-5 px-1">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center p-2 flex-shrink-0"
                  style={{ background: `${service.accentColor}15`, border: `1px solid ${service.accentColor}25` }}
                >
                  {service.iconImg ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={service.iconImg} alt={service.title} className="w-full h-full object-contain"
                      style={service.iconInvert ? { filter: "brightness(0) invert(1)" } : undefined} />
                  ) : (
                    <UserCheck size={16} style={{ color: service.accentColor }} />
                  )}
                </div>
                <div>
                  <p className="text-[#EBEBEB] text-sm font-semibold">{service.title}</p>
                  <p className="text-[#555566] text-[12px]">Real project by Nexsolutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {service.slug === "ecommerce-services" && <EcommercePricingSection />}

      {/* Other services */}
      <section className="py-20 bg-[#0E0E12] border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h3 className="text-[#EBEBEB] font-bold text-2xl mb-8">Other Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherServices.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={`/our-services/${s.slug}`}
                  className="block group rounded-2xl border border-white/[0.06] bg-[#1D1D1D] p-6 hover:border-white/[0.12] hover:bg-[#252525] transition-all duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 p-2"
                    style={{ background: `${s.accentColor}15`, border: `1px solid ${s.accentColor}30` }}
                  >
                    {s.iconImg ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={s.iconImg} alt={s.title} className="w-full h-full object-contain"
                        style={s.iconInvert ? { filter: "brightness(0) invert(1)" } : undefined} />
                    ) : (
                      <UserCheck size={16} style={{ color: s.accentColor }} />
                    )}
                  </div>
                  <h4 className="text-[#EBEBEB] font-bold text-base mb-2">{s.title}</h4>
                  <p className="text-[#8A8A9A] text-sm leading-relaxed line-clamp-2">{s.shortDesc}</p>
                  <div className="flex items-center gap-1 mt-4 text-xs font-semibold" style={{ color: s.accentColor }}>
                    Learn More <ArrowRight size={12} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection count={3} />
      <CTABanner />
    </>
  );
}
