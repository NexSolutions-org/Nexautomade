"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export default function PortfolioSection() {
  const displayed = projects.slice(0, 8);

  return (
    <section className="py-24 bg-[#0F0F18] border-y border-[#1C1C28]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-pill mb-4 inline-block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              <span className="text-[#00C2FF]">Latest</span> Work
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-xs"
          >
            <p className="text-[#8888A0] text-sm leading-relaxed mb-3">
              26+ completed projects across web, e-commerce, AI & marketing.
            </p>
            <Link href="/project-showcase" className="text-[#00D4FF] text-sm font-medium hover:underline inline-flex items-center gap-1.5">
              View all projects <ArrowRight size={13} />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {displayed.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              className="project-card card group cursor-pointer overflow-hidden hover:border-[#2A2A3E]"
              onClick={() => window.open(project.url, "_blank")}
            >
              {/* Image area */}
              <div className="aspect-[16/10] relative overflow-hidden bg-[#0D0D14]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Hover overlay */}
                <div className="project-overlay">
                  <div className="mb-1">
                    <span className="text-[10px] text-[#00D4FF] border border-[#00D4FF]/30 px-2.5 py-0.5 rounded-full bg-black/30">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-white font-semibold text-sm">{project.title}</p>
                  <p className="text-white/60 text-xs">{project.description}</p>
                </div>
                {/* External link icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink size={13} className="text-white" />
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#6B5CE7] uppercase tracking-widest font-semibold">{project.category}</span>
                  <h3 className="text-white font-semibold text-base mt-0.5">{project.title}</h3>
                  <p className="text-[#8888A0] text-xs mt-0.5">{project.description}</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-[#1E1E2E] flex items-center justify-center text-[#8888A0] group-hover:border-[#6B5CE7] group-hover:text-white transition-all duration-200 ml-4 flex-shrink-0">
                  <ArrowRight size={13} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/project-showcase"
            className="btn-outline-cyan px-10 py-3.5 text-sm inline-flex items-center gap-2">
            View All 26 Projects <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}


