"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { UserCheck, Plus, Minus, ArrowRight } from "lucide-react";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import { services } from "@/data/services";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A standard business website usually ships in 1–2 weeks. E-commerce stores and custom platforms with AI or automation features typically run 3–6 weeks. We share a fixed timeline before any work starts.",
  },
  {
    q: "What's included in your web development service?",
    a: "Design, responsive development, SEO-ready structure, speed optimization, CMS setup, and 30 days of post-launch support. You get a complete product — not just a template with your logo on it.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. We've delivered 186+ projects for businesses in Pakistan, UAE, USA, UK, Canada, and Australia. Remote delivery is how we operate — with regular updates and full transparency.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "That's one of our most common requests. We audit what's not working, rebuild with modern design and faster performance, and improve conversion without losing your existing SEO value where possible.",
  },
  {
    q: "What tech stack do you use?",
    a: "Next.js and React for custom builds, WordPress and Shopify for CMS and e-commerce, plus OpenAI and n8n for AI automation. We choose based on your project — not what's trendy.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. We offer maintenance plans covering updates, monitoring, bug fixes, and feature additions. Most of our long-term clients started with a single project.",
  },
  {
    q: "How is pricing structured?",
    a: "Project-based, quoted upfront. No hidden fees. After a discovery call, you'll receive a detailed proposal within 24 hours with scope, timeline, and cost broken down clearly.",
  },
  {
    q: "How do we get started?",
    a: "Fill out the contact form or message us on WhatsApp. We'll schedule a free discovery call, understand your requirements, and send a proposal — usually within one business day.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`rounded-xl overflow-hidden transition-all duration-300 ${
        open
          ? "border border-[#00C2FF]/25 bg-[#1D1D1D] shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          : "border border-white/[0.06] bg-[#1D1D1D]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`font-semibold text-sm md:text-[15px] transition-colors ${open ? "text-white" : "text-[#C8C8D4]"}`}>
          {q}
        </span>
        <span
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
          style={{
            background: open ? "rgba(0,194,255,0.12)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${open ? "rgba(0,194,255,0.25)" : "rgba(255,255,255,0.06)"}`,
          }}
        >
          {open ? <Minus size={14} className="text-[#00C2FF]" /> : <Plus size={14} className="text-[#9A9AAA]" />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <div className="h-px bg-white/[0.06] mb-4" />
          <p className="text-[#9A9AAA] text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </motion.div>
  );
}

export default function ServicesPageContent() {
  const featured = services[0];
  const rest = services.slice(1);

  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Web development, AI automation, e-commerce, and digital marketing — built for businesses that want measurable results, not just a nice-looking site."
        breadcrumb="Our Services"
      />

      {/* Trust strip */}
      <div className="bg-[#1D1D1D] border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center">
            {[
              { v: "186+", l: "Projects delivered" },
              { v: "12+", l: "Countries served" },
              { v: "98%", l: "Client satisfaction" },
              { v: "24hr", l: "Proposal turnaround" },
            ].map((s) => (
              <div key={s.l} className="flex items-center gap-2">
                <span className="text-[#00C2FF] font-bold text-lg">{s.v}</span>
                <span className="text-[#9A9AAA] text-sm">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section-loose bg-[#0A0A0F] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          {/* Featured service — full width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 rounded-2xl border border-white/[0.07] bg-[#1D1D1D] overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span
                  className="inline-block text-[10px] font-bold tracking-[0.16em] uppercase px-2.5 py-1 rounded-md w-fit mb-4"
                  style={{
                    background: `${featured.accentColor}12`,
                    color: featured.accentColor,
                    border: `1px solid ${featured.accentColor}25`,
                  }}
                >
                  Featured · {featured.category}
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">{featured.title}</h3>
                <p className="text-[#9A9AAA] text-[15px] leading-relaxed mb-6">{featured.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/our-services/${featured.slug}`}
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                  >
                    Explore service <ArrowRight size={14} />
                  </Link>
                  <Link href="/contact" className="btn-secondary inline-flex items-center gap-2 px-6 py-3 text-sm">
                    Get a quote
                  </Link>
                </div>
              </div>
              {(featured as { mockupImg?: string }).mockupImg && (
                <div className="relative h-56 lg:h-auto min-h-[240px] border-t lg:border-t-0 lg:border-l border-white/[0.06]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={(featured as { mockupImg?: string }).mockupImg!}
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D1D] via-transparent to-transparent lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1D] via-transparent to-transparent lg:hidden" />
                </div>
              )}
            </div>
          </motion.div>

          {/* Remaining services — varied grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
                className={`card-premium group p-7 relative overflow-hidden ${
                  index === 2 ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-0 md:p-0" : ""
                }`}
              >
                <div className={index === 2 ? "p-7 flex flex-col justify-center" : ""}>
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 p-3 transition-transform group-hover:scale-105"
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
                        <UserCheck size={24} style={{ color: service.accentColor }} />
                      )}
                    </div>
                    <div>
                      <span className="text-[#5C5C6E] text-xs font-mono">{service.id}</span>
                      <h3 className="text-white font-bold text-lg leading-tight mt-0.5">{service.title}</h3>
                    </div>
                  </div>

                  <p className="text-[#9A9AAA] text-sm leading-relaxed mb-5">{service.shortDesc}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[#9A9AAA]">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: service.accentColor }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-5 pt-4 border-t border-white/[0.06]">
                    <Link
                      href={`/our-services/${service.slug}`}
                      className="text-sm font-semibold hover:underline"
                      style={{ color: service.accentColor }}
                    >
                      Learn more →
                    </Link>
                    <Link href="/schedule-meeting" className="text-[#9A9AAA] text-sm hover:text-white transition-colors">
                      Book a call
                    </Link>
                  </div>
                </div>

                {index === 2 && (service as { mockupImg?: string }).mockupImg && (
                  <div className="relative h-48 md:h-auto border-t md:border-t-0 md:border-l border-white/[0.06] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={(service as { mockupImg?: string }).mockupImg!}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-normal bg-[#0E0E12]">
        <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="tag-pill mb-4 inline-block">FAQ</span>
            <h2 className="text-white mb-4">Common questions</h2>
            <p className="text-[#9A9AAA] text-[15px] leading-relaxed">
              Straight answers before you commit. Still unsure?{" "}
              <Link href="/contact" className="text-[#00C2FF] hover:underline">Talk to us directly</Link>.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection count={3} />
      <CTABanner />
    </>
  );
}
