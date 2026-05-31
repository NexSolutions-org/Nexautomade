"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Shield, Mail } from "lucide-react";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      "Nexsolutions provides digital growth, automation, and web platform services for businesses operating across regions, including the USA, UK, UAE, and Pakistan. This Privacy Policy explains how we collect, use, and protect personal and business information when you visit our website, submit a form, or engage us for services.",
      "We are committed to handling data in a lawful, fair, and transparent manner. By using our website or services, you acknowledge the practices described in this policy.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: [
      "We collect information you provide directly when filling out contact forms, requesting consultations, or subscribing to updates. This includes your name, email address, phone number, company name, and project details.",
      "We also collect technical data automatically — such as your IP address, browser type, pages visited, and time spent on the site — to help us improve website performance and user experience.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    content: [
      "We use collected information to respond to your inquiries, deliver the services you request, and provide ongoing support. We may also use it to send you relevant updates, project communications, or service announcements.",
      "We never use your information for unsolicited marketing without your consent. If you opt in to our newsletter or updates, you can unsubscribe at any time.",
    ],
  },
  {
    id: "cookies-tracking",
    title: "Cookies & Tracking",
    content: [
      "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand how visitors interact with our content.",
      "You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of the website. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain until deleted).",
    ],
  },
  {
    id: "data-sharing",
    title: "Data Sharing & Third Parties",
    content: [
      "We do not sell, rent, or trade your personal information to third parties. We may share data with trusted service providers — such as hosting, analytics, or CRM tools — strictly to operate our business, and only under confidentiality agreements.",
      "We may also disclose information if required by law, court order, or to protect the rights and safety of Nexsolutions, our clients, or the public.",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: [
      "We retain your personal data only as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.",
      "Once data is no longer needed, it is securely deleted or anonymized. You may request deletion of your data at any time by contacting us directly.",
    ],
  },
  {
    id: "user-rights",
    title: "User Rights",
    content: [
      "You have the right to access, correct, or delete personal information we hold about you. You may also request data portability, restrict processing, or withdraw consent where applicable.",
      "To exercise any of these rights, please contact us at info@nexsolutions.org. We will respond to all valid requests within 30 days.",
    ],
  },
  {
    id: "security-measures",
    title: "Security Measures",
    content: [
      "We implement industry-standard security measures to protect your information — including SSL encryption, secure servers, restricted access controls, and regular security reviews.",
      "While we take all reasonable precautions, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and avoid sharing sensitive information unnecessarily.",
    ],
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    content: [
      "As a global agency working with clients across multiple regions, your data may be processed or stored in countries outside your own. We ensure all international transfers comply with applicable data protection laws and are covered by appropriate safeguards.",
      "By using our services, you consent to the transfer of your information to our facilities and to those third parties with whom we share it as described in this policy.",
    ],
  },
  {
    id: "contact-information",
    title: "Contact Information",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to us. We are happy to clarify how your data is handled and address any privacy-related matter.",
      "Email: info@nexsolutions.org · Address: Lahore, Punjab, Pakistan · Website: nexsolutions.org",
    ],
  },
];

export default function PrivacyPolicyContent() {
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
                  <Shield size={13} className="text-[#00C2FF]" />
                  <span className="text-[#00C2FF] text-[11px] font-bold tracking-[0.22em] uppercase">
                    Policy Center
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#F0F0F0] mb-4 leading-tight">
                  Privacy Policy
                </h1>
                <p className="text-[#8A8A9A] text-[15px] leading-relaxed max-w-2xl mb-5">
                  We believe trust starts with clarity. This page explains how your information is handled across our website and services.
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
                  <p className="text-[#F0F0F0] font-semibold text-sm mb-1">Questions about this policy?</p>
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
