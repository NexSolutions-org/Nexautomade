"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe, Zap, ShoppingBag, TrendingUp, Search, Package, UserCheck } from "lucide-react";

const serviceLinks = [
  { href: "/our-services/web-development",              label: "Web Development",               icon: Globe,       color: "#00C2FF" },
  { href: "/our-services/ai-automation-ai-agents",      label: "AI Automation & Agents",        icon: Zap,         color: "#7B5EA7" },
  { href: "/our-services/shopify-online-store-development", label: "Shopify Development",       icon: ShoppingBag, color: "#00C2FF" },
  { href: "/our-services/digital-marketing",            label: "Digital Marketing",             icon: TrendingUp,  color: "#7B5EA7" },
  { href: "/our-services/ai-powered-seo-growth",        label: "AI-Powered SEO",                icon: Search,      color: "#00C2FF" },
  { href: "/our-services/ecommerce-services",           label: "E-commerce Services",           icon: Package,     color: "#7B5EA7" },
  { href: "/our-services/virtual-assistant",            label: "Virtual Assistant",             icon: UserCheck,   color: "#00C2FF" },
];

const navLinks = [
  { href: "/",                 label: "Home" },
  { href: "/about-us",         label: "About Us" },
  { href: "/our-services",     label: "Our Services", hasDropdown: true },
  { href: "/project-showcase", label: "Our Projects" },
  { href: "/contact",          label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [pathname]);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("mobile-menu-toggle", { detail: { open: mobileOpen } }));
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close dropdown on outside click
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

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#1C1C28] pt-[max(0.75rem,env(safe-area-inset-top))] md:pt-0 ${
        scrolled ? "bg-[#0A0A0F]/95 backdrop-blur-md" : "bg-[#0A0A0F]"
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between min-h-[56px] py-2 md:py-0 md:h-20">

            {/* Logo */}
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

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = link.hasDropdown ? isServicesActive : pathname === link.href;

                if (link.hasDropdown) {
                  return (
                    <div key={link.href} className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setServicesOpen((p) => !p)}
                        className={`nav-link-underline relative flex items-center gap-1 px-4 py-2 text-[15px] transition-colors duration-200 rounded-lg ${
                          active ? "text-white" : "text-[#8A8A9A] hover:text-[#F0F0F0]"
                        }`}
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                      >
                        {link.label}
                        <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                        {active && (
                          <span className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-[#00C2FF]" />
                        )}
                      </button>

                      {/* Mega Menu */}
                      {servicesOpen && (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-2xl border border-[#1C1C28] overflow-hidden shadow-2xl"
                          style={{ background: "#0D0D14", boxShadow: "0 20px 60px rgba(0,0,0,0.7)", width: "640px" }}
                        >
                          <div className="grid grid-cols-5">
                            {/* Left — services list */}
                            <div className="col-span-3 p-4 border-r border-[#1C1C28]">
                              <p className="text-[#555566] text-[10px] font-semibold uppercase tracking-widest px-3 mb-3">Services</p>
                              <div className="space-y-0.5">
                                {serviceLinks.map((s) => (
                                  <Link
                                    key={s.href}
                                    href={s.href}
                                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-[#8A8A9A] hover:text-[#EBEBEB] hover:bg-[#12121A] transition-all group"
                                  >
                                    <span className="text-[13px] font-medium">{s.label}</span>
                                    <span className="text-[#333344] group-hover:text-[#555566] transition-colors text-xs">→</span>
                                  </Link>
                                ))}
                              </div>
                              <div className="mt-3 pt-3 border-t border-[#1C1C28] px-3">
                                <Link href="/our-services" className="text-[#00C2FF] text-[12px] font-semibold hover:underline">
                                  View All Services →
                                </Link>
                              </div>
                            </div>

                            {/* Right — image preview */}
                            <div className="col-span-2 p-4 flex flex-col justify-between">
                              <div>
                                <p className="text-[#EBEBEB] text-[13px] font-semibold leading-snug mb-3">We don&apos;t stop there, check out all the services we offer here at Nexsolutions</p>
                                <div className="rounded-xl overflow-hidden border border-[#1C1C28] mb-3">
                                  {/* Browser bar */}
                                  <div className="flex items-center gap-1.5 px-3 py-2 bg-[#111118] border-b border-[#1C1C28]">
                                    <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                                    <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                                    <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                                  </div>
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src="/images/menuimg.png"
                                    alt="Featured project"
                                    className="w-full"
                                    style={{ display: "block", objectFit: "contain" }}
                                  />
                                </div>
                              </div>
                              <Link
                                href="/project-showcase"
                                className="mt-4 block text-center py-2 px-4 rounded-xl text-[12px] font-semibold text-[#0A0A0F] bg-[#00C2FF] hover:bg-[#00aee6] transition-colors"
                              >
                                See All Projects
                              </Link>
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
                    className={`nav-link-underline relative px-4 py-2 text-[15px] transition-colors duration-200 rounded-lg ${
                      active ? "text-white" : "text-[#8A8A9A] hover:text-[#F0F0F0]"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-[#00C2FF]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/schedule-meeting"
                className="px-5 py-2.5 rounded-full text-sm font-bold bg-[#00C2FF] text-[#0A0A0F] hover:bg-[#00aee6] transition-all duration-200 hover:-translate-y-0.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Schedule a Meeting
              </Link>
            </div>

            {/* Mobile toggle */}
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

      {/* Mobile drawer backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[65] bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div className={`fixed top-0 right-0 bottom-0 z-[70] w-72 bg-[#0D0D14] border-l border-[#1C1C28] flex flex-col transition-transform duration-300 lg:hidden ${
        mobileOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1C1C28]">
          <Image src="/images/logo.png" alt="Nexsolutions" width={120} height={40} className="h-8 w-auto object-contain" />
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 rounded-lg border border-[#1C1C28] flex items-center justify-center text-[#8A8A9A] hover:text-white"
          >
            <X size={16} />
          </button>
        </div>

        {/* Links */}
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
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="mt-1 ml-3 space-y-0.5 border-l border-[#1C1C28] pl-3">
                      <Link
                        href="/our-services"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center px-3 py-2.5 rounded-lg text-[13px] text-[#8A8A9A] hover:text-[#EBEBEB] hover:bg-[#12121A] transition-all"
                      >
                        All Services
                      </Link>
                      {serviceLinks.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] text-[#8A8A9A] hover:text-[#EBEBEB] hover:bg-[#12121A] transition-all"
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
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Drawer CTA */}
        <div className="px-4 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] border-t border-[#1C1C28]">
          <Link
            href="/schedule-meeting"
            onClick={() => setMobileOpen(false)}
            className="block text-center w-full px-6 py-3.5 rounded-full text-sm font-bold bg-[#00C2FF] text-[#0A0A0F] hover:bg-[#00aee6] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Schedule a Meeting
          </Link>
        </div>
      </div>

      <div className="h-[calc(4.5rem+max(0.75rem,env(safe-area-inset-top)))] md:h-20" />
    </>
  );
}
