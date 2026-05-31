"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Shield, Star } from "lucide-react";

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const trustPoints = [
  { icon: Clock, text: "Proposal within 24 hours" },
  { icon: Shield, text: "No obligation consultation" },
  { icon: Star, text: "98% client satisfaction" },
];

export default function CTABanner() {
  return (
    <section className="section-normal bg-[#0A0A0F] border-t border-white/[0.05] relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #00C2FF, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/[0.07] bg-[#1D1D1D] p-8 md:p-12 lg:p-14 shadow-[0_24px_80px_rgba(0,0,0,0.4)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 border border-white/[0.08] bg-[#252525] px-3.5 py-1.5 rounded-full mb-6">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[#9A9AAA] text-xs tracking-wide">Taking new projects for 2026</span>
              </div>

              <h2 className="text-white mb-4 leading-tight">
                Have a project in mind?{" "}
                <span className="text-[#00C2FF]">Let&apos;s talk it through.</span>
              </h2>
              <p className="text-[#9A9AAA] text-[15px] leading-relaxed mb-8 max-w-md">
                Book a free call with our team. We&apos;ll review your goals, suggest a practical
                approach, and send a clear quote — no pressure, no jargon.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/schedule-meeting"
                  className="btn-primary flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold group"
                >
                  Book a Free Call
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/923062646255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-[#25D366]/25 bg-[#25D366]/[0.06] text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/40 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200"
                >
                  <WhatsAppIcon size={16} />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {trustPoints.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#252525]/60 border border-white/[0.05]"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#00C2FF]/10 border border-[#00C2FF]/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#00C2FF]" />
                  </div>
                  <span className="text-[#EBEBEB] text-sm font-medium">{text}</span>
                </div>
              ))}

              <div className="p-4 rounded-xl border border-white/[0.05] bg-[#161616]">
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[#9A9AAA] text-sm leading-relaxed italic">
                  &ldquo;Professional team, clear communication, and they delivered exactly what we
                  needed on schedule.&rdquo;
                </p>
                <p className="text-[#5C5C6E] text-xs mt-2">— Verified Nexsolutions client</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
