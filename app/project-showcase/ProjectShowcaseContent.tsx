"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import { projects } from "@/data/projects";

const categories = ["All", "Web Dev", "E-commerce", "Digital Marketing", "AI & Automation"];

export default function ProjectShowcaseContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        title="Project Showcase"
        subtitle="26+ completed projects across web development, e-commerce, AI & digital marketing."
        breadcrumb="Project Showcase"
      />

      <section className="py-24 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-14 justify-center">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#6B5CE7] to-[#00D4FF] text-white"
                    : "border border-[#1E1E2E] text-[#9999AA] hover:border-[#6B5CE7]/50 hover:text-white bg-[#111118]"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="project-card bg-[#111118] border border-[#1E1E2E] rounded-2xl overflow-hidden group cursor-pointer hover:border-[#2A2A3E] transition-colors duration-300"
                  onClick={() => window.open(project.url, "_blank")}
                >
                  <div className="aspect-[16/10] relative overflow-hidden bg-[#0D0D14]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ background: "linear-gradient(135deg,#6B5CE7,#00D4FF)" }}>
                      <ExternalLink size={14} className="text-white" />
                    </div>
                    {/* Bottom overlay on hover */}
                    <div className="project-overlay">
                      <span className="text-[#00D4FF] text-xs border border-[#00D4FF]/40 px-3 py-1 rounded-full bg-black/30">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#6B5CE7] tracking-wider uppercase font-semibold">{project.category}</span>
                      <h3 className="text-white font-bold text-base mt-0.5">{project.title}</h3>
                      <p className="text-[#9999AA] text-xs mt-0.5">{project.description}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-[#1E1E2E] flex items-center justify-center text-[#9999AA] group-hover:border-[#6B5CE7] group-hover:text-white transition-all duration-300 ml-4 flex-shrink-0">
                      <ExternalLink size={13} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#9999AA]">No projects in this category.</div>
          )}
        </div>
      </section>
    </>
  );
}


