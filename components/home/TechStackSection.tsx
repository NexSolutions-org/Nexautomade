"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js",     icon: "/images/icons/next-js-svgrepo-com.svg",               category: "Frontend",   invert: true },
  { name: "React",       icon: "/images/icons/react-svgrepo-com.svg",                  category: "Frontend" },
  { name: "TypeScript",  icon: "/images/icons/typescript-official-svgrepo-com.svg",    category: "Language" },
  { name: "Tailwind",    icon: "/images/icons/tailwind-svgrepo-com.svg",               category: "CSS" },
  { name: "n8n",         icon: null,                                                    symbol: "⚡",  category: "Automation" },
  { name: "OpenAI",      icon: "/images/icons/openai-svgrepo-com.svg",                 category: "AI/ML" },
  { name: "WordPress",   icon: "/images/icons/wordpress-color-svgrepo-com.svg",        category: "CMS" },
  { name: "Shopify",     icon: "/images/icons/shopify-svgrepo-com.svg",                category: "E-commerce" },
  { name: "Vercel",      icon: "/images/icons/vercel-fill-svgrepo-com.svg",            category: "Deploy" },
  { name: "Figma",       icon: "/images/icons/figma-svgrepo-com.svg",                  category: "Design" },
  { name: "Google Ads",  icon: "/images/icons/google-ads-svgrepo-com.svg",             category: "Marketing" },
  { name: "Meta Ads",    icon: "/images/icons/meta-logo-facebook-2-svgrepo-com.svg",   category: "Marketing" },
];

export default function TechStackSection() {
  return (
    <section className="py-24 bg-[#0A0A0F]">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
        >
          <div>
            <span className="tag-pill mb-4 inline-block">Tech Stack</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Tools We <span className="text-[#00C2FF]">Master</span>
            </h2>
          </div>
          <p className="text-[#8888A0] text-sm max-w-xs leading-relaxed">
            Industry-leading technologies to build fast, scalable, future-proof products.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="card p-5 text-center group cursor-default card-cyan flex flex-col items-center"
            >
              <div className="w-14 h-14 mb-3 flex items-center justify-center">
                {tech.icon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-110"
                    style={(tech as { invert?: boolean }).invert ? { filter: "brightness(0) invert(1)" } : undefined}
                  />
                ) : (
                  <span className="text-2xl font-mono font-bold text-[#8888A0] group-hover:text-white transition-colors duration-200 leading-none">
                    {(tech as { symbol?: string }).symbol}
                  </span>
                )}
              </div>
              <div className="text-white text-xs font-semibold">{tech.name}</div>
              <div className="text-[#8888A0] text-[9px] mt-0.5 uppercase tracking-wider">{tech.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


