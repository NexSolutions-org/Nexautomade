"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";
import { services } from "@/data/services";

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/our-services", label: "Our Services" },
  { href: "/project-showcase", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/schedule-meeting", label: "Schedule a Meeting" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/NexsolutionsGlobal", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/nexsolutions_global/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@nexsolutions", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/nexsolutions", label: "LinkedIn" },
];

const serviceLinks = services.slice(0, 6).map((s) => ({
  href: `/our-services/${s.slug}`,
  label: s.title,
}));

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="flex items-center gap-2 text-[#EBEBEB] text-xs font-bold uppercase tracking-[0.18em] mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] flex-shrink-0" />
      {children}
    </h4>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-1.5 text-[#8A8A9A] text-sm hover:text-[#EBEBEB] transition-colors duration-200"
    >
      <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-200 text-[#00C2FF]">→</span>
      {label}
    </Link>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      <footer className="relative bg-[#0A0A0F] border-t border-white/[0.05] overflow-hidden">
        {/* Top accent line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00C2FF]/50 to-transparent" />

        <div className="absolute inset-0 dot-grid opacity-[0.35] pointer-events-none" />
        <div
          className="absolute -top-32 right-0 w-[480px] h-[480px] rounded-full opacity-[0.06] pointer-events-none"
          style={{ background: "radial-gradient(circle, #00C2FF, transparent)", filter: "blur(60px)" }}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10 pt-16 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-14">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-5">
                <Image
                  src="/images/logo.png"
                  alt="Nexsolutions Logo"
                  width={168}
                  height={56}
                  className="h-11 w-auto object-contain"
                />
              </Link>
              <p className="text-[#8A8A9A] text-sm leading-relaxed mb-6 max-w-sm">
                We build intelligent websites, AI systems &amp; marketing engines that drive real
                growth — for brands worldwide.
              </p>

              <div className="flex flex-wrap gap-4 mb-7">
                {[
                  { value: "186+", label: "Projects" },
                  { value: "100+", label: "Clients" },
                  { value: "98%", label: "Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label} className="min-w-[72px]">
                    <div className="text-lg font-bold text-[#00C2FF]">{stat.value}</div>
                    <div className="text-[#555566] text-[11px] uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2.5">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="w-9 h-9 rounded-xl border border-white/[0.07] bg-[#1D1D1D] flex items-center justify-center text-[#9A9AAA] hover:bg-[#00C2FF] hover:text-[#0A0A0F] hover:border-[#00C2FF] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Icon size={15} strokeWidth={1.75} />
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <FooterHeading>Company</FooterHeading>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <FooterHeading>Services</FooterHeading>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Newsletter */}
            <div className="lg:col-span-3">
              <FooterHeading>Contact</FooterHeading>
              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: MapPin,
                    text: "102 Ghaznavi Block, Bahria Town, Lahore, Pakistan",
                    href: null,
                  },
                  { icon: Mail, text: "info@nexsolutions.org", href: "mailto:info@nexsolutions.org" },
                  { icon: Phone, text: "+92 306 2646255", href: "tel:+923062646255" },
                ].map((item) => (
                  <div key={item.text} className="flex gap-3 group">
                    <span className="w-8 h-8 rounded-lg bg-[#00C2FF]/10 border border-[#00C2FF]/15 flex items-center justify-center flex-shrink-0 text-[#00C2FF] group-hover:bg-[#00C2FF]/15 transition-colors">
                      <item.icon size={14} strokeWidth={1.75} />
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[#8A8A9A] text-sm hover:text-[#EBEBEB] transition-colors leading-relaxed pt-1.5"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-[#8A8A9A] text-sm leading-relaxed pt-1.5">{item.text}</p>
                    )}
                  </div>
                ))}
              </div>

              <FooterHeading>Newsletter</FooterHeading>
              <p className="text-[#8A8A9A] text-sm mb-4 leading-relaxed">
                Get updates and insights delivered to your inbox.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 text-sm border border-emerald-500/20 rounded-xl px-4 py-3.5 bg-emerald-500/5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center text-xs">✓</span>
                  You&apos;re subscribed. Thank you!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2.5">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                  className="flex-1 min-w-0 bg-[#1D1D1D] border border-white/[0.07] text-[#EBEBEB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C2FF]/50 focus:shadow-[0_0_0_3px_rgba(0,194,255,0.08)] transition-all placeholder:text-[#5C5C6E]"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#00C2FF] text-[#0A0A0F] hover:bg-[#00aee6] hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </button>
                  </div>
                  <p className="text-[#555566] text-[11px]">No spam. Unsubscribe anytime.</p>
                </form>
              )}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="section-divider mb-6" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
              <p className="text-[#555566] text-xs">
                © {new Date().getFullYear()} Nexsolutions. All rights reserved.
              </p>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-[#2A2A3A]" />
              <p className="text-[#555566] text-xs">Made with care in Lahore, Pakistan</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1">
              {[
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-of-service", label: "Terms of Service" },
                { href: "/contact", label: "Contact" },
              ].map((link, i) => (
                <span key={link.href} className="flex items-center">
                  {i > 0 && <span className="text-[#2A2A3A] mx-3 text-xs select-none">·</span>}
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-[#555566] text-xs hover:text-[#00C2FF] transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={10}
                      className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp float */}
      <a
        href="https://wa.me/923062646255"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float whatsapp-bounce w-[52px] h-[52px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.35)] hover:scale-105 transition-transform duration-200"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
