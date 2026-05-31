"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the Nexsolutions website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.",
      "These terms apply to all visitors, clients, and users who access or use our services. We reserve the right to update these terms at any time, and continued use of the site constitutes acceptance of the revised terms.",
    ],
  },
  {
    id: "services",
    title: "Our Services",
    content: [
      "Nexsolutions offers web development, AI automation, digital marketing, SEO, Shopify development, e-commerce services, and virtual assistant solutions. The scope and deliverables for each engagement are defined in separate project agreements or proposals.",
      "We reserve the right to modify, suspend, or discontinue any service at any time. We will provide reasonable notice of significant changes that may affect ongoing client projects.",
    ],
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    content: [
      "Clients are responsible for providing accurate, timely, and complete information required to deliver the agreed services. Delays caused by missing or incorrect information may affect project timelines and are not the responsibility of Nexsolutions.",
      "Clients must ensure they hold all necessary rights to any content, images, trademarks, or materials provided to us for use in their projects.",
    ],
  },
  {
    id: "payment-terms",
    title: "Payment Terms",
    content: [
      "Payment terms are specified in individual project proposals or agreements. Generally, a deposit is required before work begins, with remaining payments due at agreed milestones or project completion.",
      "Late payments may result in work being paused until payment is received. We reserve the right to charge a late fee on overdue balances as specified in the project agreement.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: [
      "Upon full payment, clients receive ownership of the final deliverables as specified in the project agreement. Nexsolutions retains the right to display completed work in our portfolio unless a non-disclosure agreement is in place.",
      "All third-party tools, frameworks, or libraries used remain subject to their respective licenses. Nexsolutions retains ownership of any proprietary methodologies, templates, or processes used during project development.",
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    content: [
      "Both parties agree to keep confidential any proprietary business information, trade secrets, or sensitive data shared during the course of the engagement. This obligation survives the termination of any project or agreement.",
      "Nexsolutions will not share client business data, strategies, or project details with third parties without explicit written consent, except as required by law.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: [
      "Nexsolutions shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability to any client shall not exceed the total fees paid for the specific service in question.",
      "We do not guarantee specific business outcomes such as revenue increases, traffic growth, or search rankings. Results depend on many factors beyond our control including market conditions and algorithm changes.",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    content: [
      "Either party may terminate a project engagement with written notice as specified in the project agreement. Upon termination, the client is responsible for paying for all work completed up to the termination date.",
      "Nexsolutions reserves the right to immediately terminate services if a client engages in fraudulent, abusive, or unlawful behavior, or violates these terms of service.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: [
      "These Terms of Service shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising from these terms or our services shall be resolved through good-faith negotiation.",
      "If negotiation fails to resolve a dispute within 30 days, both parties agree to submit to binding arbitration in Lahore, Pakistan.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      "For any questions, concerns, or clarifications regarding these Terms of Service, please don't hesitate to reach out to our team. We aim to resolve all queries promptly and transparently.",
      "Email: info@nexsolutions.org · Address: Lahore, Punjab, Pakistan · Website: nexsolutions.org",
    ],
  },
];

export default function TermsContent() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.findIndex((r) => r === entry.target);
            if (idx !== -1) setActiveSection(idx);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sectionRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (idx: number) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>

      <div className="min-h-screen bg-[#0A0A0F] pt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
          <div className="flex gap-12 lg:gap-20">

            {/* ── Sidebar ── */}
            <aside className="hidden lg:flex flex-col w-64 flex-shrink-0">
              <div className="sticky top-28">
                <p className="text-[#8A8A9A] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
                  On This Page
                </p>
                <nav className="space-y-1">
                  {sections.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(i)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                        activeSection === i
                          ? "bg-[#12121A] text-[#F0F0F0] border-l-2 border-[#00C2FF]"
                          : "text-[#8A8A9A] hover:text-[#F0F0F0] hover:bg-[#12121A]/50 border-l-2 border-transparent"
                      }`}
                    >
                      {i + 1}. {s.title}
                    </button>
                  ))}
                </nav>
                <p className="text-[#555566] text-xs mt-6 px-1">
                  Section {activeSection + 1} of {sections.length}
                </p>
              </div>
            </aside>

            {/* ── Main Content ── */}
            <main className="flex-1 min-w-0">

              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="flex items-center gap-2 mb-4">
                  <FileText size={13} className="text-[#00C2FF]" />
                  <span className="text-[#00C2FF] text-[11px] font-bold tracking-[0.22em] uppercase">
                    Policy Center
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#F0F0F0] mb-4 leading-tight">
                  Terms of Service
                </h1>
                <p className="text-[#8A8A9A] text-[15px] leading-relaxed max-w-2xl mb-5">
                  Please read these terms carefully before engaging our services. By working with Nexsolutions, you agree to the conditions outlined below.
                </p>
                <p className="text-[#8A8A9A] text-sm">
                  Last updated: <strong className="text-[#F0F0F0]">May 22, 2026</strong>
                </p>
                <div className="mt-8 h-px bg-[#1C1C28]" />
              </motion.div>

              {/* Sections */}
              <div className="space-y-0">
                {sections.map((section, i) => (
                  <motion.section
                    key={section.id}
                    ref={(el) => { sectionRefs.current[i] = el; }}
                    id={section.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    className="py-10"
                  >
                    <h2 className="text-2xl font-bold text-[#F0F0F0] mb-5 leading-tight">
                      {section.title}
                    </h2>
                    <div className="space-y-4">
                      {section.content.map((para, pi) => (
                        <p key={pi} className="text-[#8A8A9A] text-[15px] leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                    {i < sections.length - 1 && (
                      <div className="mt-10 h-px bg-[#1C1C28]" />
                    )}
                  </motion.section>
                ))}
              </div>

              {/* Footer note */}
              <div className="mt-6 p-6 rounded-2xl bg-[#12121A] border border-[#1C1C28] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00C2FF]/10 border border-[#00C2FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={16} className="text-[#00C2FF]" />
                </div>
                <div>
                  <p className="text-[#F0F0F0] font-semibold text-sm mb-1">Questions about these terms?</p>
                  <p className="text-[#8A8A9A] text-sm">
                    Contact us at{" "}
                    <a href="mailto:info@nexsolutions.org" className="text-[#00C2FF] hover:underline">
                      info@nexsolutions.org
                    </a>{" "}
                    and we&apos;ll respond within 24 hours.
                  </p>
                </div>
              </div>

            </main>
          </div>
        </div>
      </div>

    </>
  );
}
