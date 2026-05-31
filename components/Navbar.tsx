"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Zap,
  ShoppingBag,
  TrendingUp,
  Search,
  Package,
  UserCheck,
  ArrowUpRight,
  Star,
} from "lucide-react";

const serviceLinks = [
  { href: "/our-services/web-development", label: "Web Development", sub: "Sites that convert", icon: Globe, color: "#00C2FF" },
  { href: "/our-services/ai-automation-ai-agents", label: "AI Automation", sub: "Smart workflows & agents", icon: Zap, color: "#7B5EA7" },
  { href: "/our-services/shopify-online-store-development", label: "Shopify Development", sub: "Stores built to sell", icon: ShoppingBag, color: "#00C2FF" },
  { href: "/our-services/digital-marketing", label: "Digital Marketing", sub: "Ads that deliver ROI", icon: TrendingUp, color: "#7B5EA7" },
  { href: "/our-services/ai-powered-seo-growth", label: "AI-Powered SEO", sub: "Rank higher, grow faster", icon: Search, color: "#00C2FF" },
  { href: "/our-services/ecommerce-services", label: "E-commerce Services", sub: "End-to-end online stores", icon: Package, color: "#7B5EA7" },
  { href: "/our-services/virtual-assistant", label: "Virtual Assistant", sub: "Dedicated remote support", icon: UserCheck, color: "#00C2FF" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/our-services", label: "Our Services", hasDropdown: true },
  { href: "/project-showcase", label: "Our Projects" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("mobile-menu-toggle", { detail: { open: mobileOpen } }));
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isServicesActive = pathname.startsWith("/our-services");

  const navItemClass = (active: boolean) =>
    `relative flex items-center gap-1 px-4 py-2 text-[14px] transition-all duration-200 rounded-full border ${
      active
        ? "text-white border-white/25 bg-white/[0.04]"
        : "text-[#9A9AAA] border-transparent hover:text-white hover:border-white/10"
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/[0.06] pt-[max(0.75rem,env(safe-area-inset-top))] md:pt-0 ${
          scrolled ? "bg-[#0A0A0F]/95 backdrop-blur-md" : "bg-[#0A0A0F]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between min-h-[56px] py-2 md:py-0 md:h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Nexsolutions Logo"
                width={200}
                height={70}
                className="h-10 sm:h-11 md:h-14 w-auto object-contain"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = link.hasDropdown ? isServicesActive : pathname === link.href;

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      ref={dropdownRef}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button
                        onClick={() => setServicesOpen((p) => !p)}
                        className={navItemClass(active || servicesOpen)}
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {servicesOpen && (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.55)] border border-white/[0.08]"
                          style={{ width: "780px" }}
                        >
                          <div className="grid grid-cols-5">
                            {/* Left — service grid */}
                            <div className="col-span-3 bg-[#F5F5F7] p-6">
                              <div className="grid grid-cols-2 gap-1">
                                {serviceLinks.map((s) => {
                                  const Icon = s.icon;
                                  return (
                                    <Link
                                      key={s.href}
                                      href={s.href}
                                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white transition-all group"
                                    >
                                      <div
                                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                                        style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
                                      >
                                        <Icon size={16} style={{ color: s.color }} />
                                      </div>
                                      <div>
                                        <p className="text-[#111118] text-[13px] font-bold group-hover:text-[#00C2FF] transition-colors">
                                          {s.label}
                                        </p>
                                        <p className="text-[#6B6B7B] text-[11px] mt-0.5">{s.sub}</p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>

                              <div className="mt-5 pt-5 border-t border-[#E0E0E8] flex flex-wrap items-center gap-4">
                                <Link
                                  href="/schedule-meeting"
                                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-bold bg-[#00C2FF] text-[#0A0A0F] hover:bg-[#00aee6] transition-colors uppercase tracking-wide"
                                >
                                  Free Consultation
                                  <ArrowUpRight size={14} />
                                </Link>
                                <div className="flex items-center gap-3">
                                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E8E8EE]">
                                    <div className="flex gap-0.5">
                                      {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} size={10} className="text-amber-400 fill-amber-400" />
                                      ))}
                                    </div>
                                    <span className="text-[#111118] text-[11px] font-semibold">186+ Projects</span>
                                  </div>
                                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E8E8EE]">
                                    <div className="flex gap-0.5">
                                      {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} size={10} className="text-amber-400 fill-amber-400" />
                                      ))}
                                    </div>
                                    <span className="text-[#111118] text-[11px] font-semibold">100+ Clients</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Right — brand panel */}
                            <div
                              className="col-span-2 p-6 flex flex-col justify-between text-white"
                              style={{ background: "linear-gradient(160deg, #00C2FF 0%, #5A8FA8 45%, #7B5EA7 100%)" }}
                            >
                              <div>
                                <div className="flex items-center gap-3 mb-4">
                                  <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-white/30 flex-shrink-0">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/images/nex.webp" alt="Nexsolutions team" className="w-full h-full object-cover" />
                                  </div>
                                  <div>
                                    <p className="font-bold text-sm leading-tight">Nexsolutions Team</p>
                                    <p className="text-white/70 text-[11px] mt-0.5">Creative Nexus · Lahore, PK</p>
                                  </div>
                                </div>
                                <p className="text-[13px] leading-relaxed text-white/90">
                                  We build websites, AI systems, and marketing engines that drive real growth — for
                                  brands in 12+ countries since 2021.
                                </p>
                              </div>
                              <div className="mt-6 space-y-2">
                                <Link
                                  href="/our-services"
                                  className="block text-center py-2.5 px-4 rounded-xl text-[12px] font-bold bg-white/15 border border-white/25 hover:bg-white/25 transition-colors"
                                >
                                  View All Services
                                </Link>
                                <Link
                                  href="/project-showcase"
                                  className="block text-center py-2.5 px-4 rounded-xl text-[12px] font-semibold bg-white text-[#111118] hover:bg-white/90 transition-colors"
                                >
                                  See Our Work
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={navItemClass(active)}
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <Link
                href="/schedule-meeting"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-[#00C2FF] text-[#0A0A0F] hover:bg-[#00aee6] transition-all duration-200 hover:-translate-y-0.5 uppercase tracking-wide"
              >
                Get Started
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-lg border border-[#1C1C28] flex items-center justify-center text-[#8A8A9A] hover:text-white hover:border-[#2A2A3A] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[65] bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-72 bg-[#0D0D14] border-l border-[#1C1C28] flex flex-col transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1C1C28]">
          <Image src="/images/logo.png" alt="Nexsolutions" width={120} height={40} className="h-8 w-auto object-contain" />
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 rounded-lg border border-[#1C1C28] flex items-center justify-center text-[#8A8A9A] hover:text-white"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          {navLinks.map((link) => {
            const active = link.hasDropdown ? isServicesActive : pathname === link.href;

            if (link.hasDropdown) {
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setMobileServicesOpen((p) => !p)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base transition-all duration-200 ${
                      active
                        ? "bg-[#00C2FF]/10 text-[#00C2FF] border border-[#00C2FF]/20"
                        : "text-[#8A8A9A] hover:bg-[#12121A] hover:text-[#F0F0F0]"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="mt-1 ml-3 space-y-0.5 border-l border-[#1C1C28] pl-3">
                      <Link href="/our-services" onClick={() => setMobileOpen(false)} className="flex items-center px-3 py-2.5 rounded-lg text-[13px] text-[#8A8A9A] hover:text-[#EBEBEB]">
                        All Services
                      </Link>
                      {serviceLinks.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] text-[#8A8A9A] hover:text-[#EBEBEB]"
                          >
                            <Icon size={13} style={{ color: s.color }} />
                            {s.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center px-4 py-3.5 rounded-xl text-base transition-all duration-200 ${
                  active
                    ? "bg-[#00C2FF]/10 text-[#00C2FF] border border-[#00C2FF]/20"
                    : "text-[#8A8A9A] hover:bg-[#12121A] hover:text-[#F0F0F0]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="px-4 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] border-t border-[#1C1C28]">
          <Link
            href="/schedule-meeting"
            onClick={() => setMobileOpen(false)}
            className="block text-center w-full px-6 py-3.5 rounded-full text-sm font-bold bg-[#00C2FF] text-[#0A0A0F] hover:bg-[#00aee6] transition-colors"
          >
            Schedule a Meeting
          </Link>
        </div>
      </div>

      <div className="h-[calc(4.5rem+max(0.75rem,env(safe-area-inset-top)))] md:h-20" />
    </>
  );
}
