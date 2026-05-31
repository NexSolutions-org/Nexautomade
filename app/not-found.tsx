import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center relative overflow-hidden">

      {/* Background hex grid */}
      <div className="hex-grid absolute inset-0 opacity-40" />

      {/* Glow blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(107,92,231,0.08) 0%, transparent 70%)" }} />

      <div className="relative z-10 text-center px-4 max-w-xl mx-auto">

        {/* 404 number */}
        <div className="relative mb-6 select-none">
          <div className="text-[140px] sm:text-[180px] font-black leading-none text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.06)",
            }}>
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[140px] sm:text-[180px] font-black leading-none gradient-text opacity-15 select-none">
              404
            </span>
          </div>
        </div>

        {/* Tag */}
        <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[#1C1C28] bg-[#12121A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]" />
          <span className="text-[#8A8A9A] text-[11px] tracking-[0.18em] uppercase font-medium">Page Not Found</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#F0F0F0] mb-4 leading-tight">
          Oops! This page<br />
          <span className="text-[#00C2FF]">doesn&apos;t exist</span>
        </h1>

        <p className="text-[#8A8A9A] text-[15px] leading-relaxed mb-10 max-w-sm mx-auto">
          The page you&apos;re looking for may have been moved, deleted, or never existed. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/"
            className="btn-primary flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm group">
            <Home size={15} />
            Back to Home
          </Link>
          <Link href="/contact"
            className="btn-secondary flex items-center justify-center gap-2 px-7 py-3.5 text-sm">
            Contact Us
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-[#1C1C28]">
          <p className="text-[#555566] text-xs uppercase tracking-widest mb-4">Quick Links</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { href: "/about-us",         label: "About Us" },
              { href: "/our-services",     label: "Our Services" },
              { href: "/project-showcase", label: "Projects" },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="text-[#8A8A9A] text-sm hover:text-[#00C2FF] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
