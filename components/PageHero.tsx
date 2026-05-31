"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  breadcrumbParent?: { label: string; href: string };
}

export default function PageHero({ title, subtitle, breadcrumb, breadcrumbParent }: PageHeroProps) {
  return (
    <section className="hex-grid py-24 border-b border-[#1E1E2E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-1.5 text-[#8888A0] text-xs mb-5 tracking-wider"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            {breadcrumbParent && (
              <>
                <Link href={breadcrumbParent.href} className="hover:text-white transition-colors">{breadcrumbParent.label}</Link>
                <ChevronRight size={12} />
              </>
            )}
            <span className="text-white">{breadcrumb}</span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="text-5xl md:text-6xl font-bold text-white mb-5"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#8888A0] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-16 h-[2px] rounded-full mx-auto mt-8"
          style={{ background: "linear-gradient(90deg,#6B5CE7,#00D4FF)" }}
        />
      </div>
    </section>
  );
}


