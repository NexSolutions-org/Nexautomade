"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";
import PlatformsSection from "@/components/PlatformsSection";
import CTABanner from "@/components/CTABanner";
import { aboutData } from "@/data/about";


export default function AboutPageContent() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="The team behind 186+ successful digital products — and counting."
        breadcrumb="About Us"
      />
      <StatsBar />

      {/* Main */}
      <section className="py-24 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* About image */}
              <div className="rounded-2xl overflow-hidden border border-[#1C1C28] mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/abou.webp"
                  alt="Nexsolutions Team"
                  className="w-full h-auto block"
                  style={{ imageRendering: "auto" }}
                />
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3">
                {[{v:"186+",l:"Projects"},{v:"4+",l:"Years"},{v:"98%",l:"Rating"}].map(s => (
                  <div key={s.l} className="card py-4 text-center">
                    <div className="gradient-text font-bold text-xl">{s.v}</div>
                    <div className="text-[#8888A0] text-xs mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="flex gap-3 mt-5">
                {[
                  {icon: <Facebook size={14}/>, href: "https://www.facebook.com/NexsolutionsGlobal"},
                  {icon: <Linkedin size={14}/>, href: "#"},
                  {icon: <Instagram size={14}/>, href: "https://www.instagram.com/nexsolutions_global/"},
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg card flex items-center justify-center text-[#8888A0] hover:text-white hover:border-[#6B5CE7] transition-all duration-200">
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="tag-pill mb-5 inline-block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Built to Drive <span className="gradient-text">Real Results</span>
              </h2>
              <p className="text-[#8888A0] text-[15px] leading-relaxed mb-4">
                We are a globally trusted digital agency specializing in custom web development, AI automation, and performance marketing. Based in Lahore, Pakistan — delivering world-class results for businesses worldwide.
              </p>
              <p className="text-[#8888A0] text-[15px] leading-relaxed mb-8">
                We don&apos;t just build websites — we build systems that generate real business growth. 186 projects and 100+ clients is the proof.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {aboutData.highlights.map((item, i) => (
                  <motion.div key={item}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2.5">
                    <Check size={14} className="text-[#6B5CE7] flex-shrink-0" />
                    <span className="text-[#8888A0] text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary flex items-center gap-2 px-7 py-3.5 text-sm group">
                  Work With Us <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link href="/our-services" className="btn-secondary flex items-center gap-2 px-7 py-3.5 text-sm">
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-[#111118] border-y border-[#1E1E2E]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="tag-pill mb-4 inline-block">Why Nexsolutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ignite Revenue Growth <span className="gradient-text">for Your Brand</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {aboutData.whyUs.map((item, index) => (
              <motion.div key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group p-8 relative overflow-hidden">
                <div className="gradient-text text-5xl font-black mb-4 leading-none">{item.id}</div>
                <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-[#8888A0] text-sm leading-relaxed">{item.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: "linear-gradient(90deg,#6B5CE7,#00D4FF)" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PlatformsSection />
      <CTABanner />
    </>
  );
}


