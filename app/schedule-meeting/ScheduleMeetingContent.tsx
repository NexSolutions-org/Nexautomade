"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, Phone, Globe, FileText, CheckCircle, Loader2, Clock, Users, Star } from "lucide-react";
import PageHero from "@/components/PageHero";

const services = [
  "Web Development",
  "AI Automation & AI Agents",
  "Shopify Store Development",
  "Digital Marketing",
  "AI-Powered SEO",
  "E-commerce Solutions",
  "Virtual Assistant",
  "Other / Not Sure",
];

const budgets = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000+",
  "Let's Discuss",
];

const timeslots = [
  "Morning (9AM – 12PM PKT)",
  "Afternoon (12PM – 4PM PKT)",
  "Evening (4PM – 8PM PKT)",
  "Flexible / Any Time",
];

const stats = [
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Star, value: "98%", label: "Satisfaction Rate" },
  { icon: Clock, value: "24h", label: "Response Time" },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  website: string;
  service: string;
  budget: string;
  timeslot: string;
  requirements: string;
}

const empty: FormData = {
  name: "",
  email: "",
  phone: "",
  website: "",
  service: "",
  budget: "",
  timeslot: "",
  requirements: "",
};

export default function ScheduleMeetingContent() {
  const [form, setForm] = useState<FormData>(empty);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (k: keyof FormData, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/schedule-meeting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error ?? "Something went wrong.");
      }
      setStatus("success");
      setForm(empty);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <>
      <PageHero
        title="Schedule a Meeting"
        subtitle="Tell us about your project and we'll reach out within 24 hours to confirm your free consultation."
        breadcrumb="Schedule a Meeting"
      />

      <section className="py-20 bg-[#0A0A0F] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

        {/* Glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5 pointer-events-none"
          style={{ background: "radial-gradient(circle, #7B5EA7, transparent)" }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-5 pointer-events-none"
          style={{ background: "radial-gradient(circle, #00C2FF, transparent)" }} />

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Left panel */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <span className="tag-pill mb-4 inline-block">Free Consultation</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                  Let&apos;s Build Something <span className="gradient-text">Great Together</span>
                </h2>
                <p className="text-[#8A8A9A] text-[15px] leading-relaxed">
                  Fill out the form and our team will review your project requirements and get back to you with a tailored proposal.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="bg-[#111118] border border-[#1C1C28] rounded-2xl p-4 text-center">
                    <Icon size={18} className="text-[#00C2FF] mx-auto mb-2" />
                    <p className="text-white font-bold text-lg leading-none">{value}</p>
                    <p className="text-[#8A8A9A] text-[11px] mt-1">{label}</p>
                  </div>
                ))}
              </div>

              {/* What to expect */}
              <div className="bg-[#111118] border border-[#1C1C28] rounded-2xl p-6 space-y-4">
                <p className="text-white font-semibold text-sm">What happens next?</p>
                {[
                  { step: "01", text: "We review your requirements within 24 hours" },
                  { step: "02", text: "Our team schedules a discovery call with you" },
                  { step: "03", text: "We send a detailed proposal & timeline" },
                  { step: "04", text: "Project kicks off on your agreed date" },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="text-[11px] font-black gradient-text flex-shrink-0 mt-0.5">{step}</span>
                    <p className="text-[#8A8A9A] text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div className="space-y-3">
                <a href="mailto:info@nexsolutions.org"
                  className="flex items-center gap-3 text-[#8A8A9A] text-sm hover:text-[#00C2FF] transition-colors group">
                  <span className="w-9 h-9 rounded-xl bg-[#111118] border border-[#1C1C28] flex items-center justify-center group-hover:border-[#00C2FF]/30 transition-colors">
                    <Mail size={15} className="text-[#00C2FF]" />
                  </span>
                  info@nexsolutions.org
                </a>
                <a href="https://wa.me/923062646255" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#8A8A9A] text-sm hover:text-[#00C2FF] transition-colors group">
                  <span className="w-9 h-9 rounded-xl bg-[#111118] border border-[#1C1C28] flex items-center justify-center group-hover:border-[#00C2FF]/30 transition-colors">
                    <Phone size={15} className="text-[#00C2FF]" />
                  </span>
                  +92 306 2646255
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              {status === "success" ? (
                <div className="bg-[#111118] border border-[#1C1C28] rounded-3xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-3">Meeting Request Sent!</h3>
                  <p className="text-[#8A8A9A] text-sm leading-relaxed max-w-sm mx-auto mb-8">
                    Thank you! We have received your request and will reach out within 24 hours to confirm your meeting. Check your inbox for a confirmation email.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-3 rounded-full text-sm font-bold bg-[#00C2FF] text-[#0A0A0F] hover:bg-[#00aee6] transition-colors"
                  >
                    Schedule Another Meeting
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#111118] border border-[#1C1C28] rounded-3xl p-8 space-y-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg,#7B5EA7,#00C2FF)" }}>
                      <Calendar size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-base">Book Your Free Consultation</p>
                      <p className="text-[#8A8A9A] text-[12px]">All fields marked * are required</p>
                    </div>
                  </div>

                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Full Name *" icon={<Users size={14} />}>
                      <input
                        required
                        type="text"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        className="input-field"
                      />
                    </Field>
                    <Field label="Email Address *" icon={<Mail size={14} />}>
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        className="input-field"
                      />
                    </Field>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Phone Number *" icon={<Phone size={14} />}>
                      <input
                        required
                        type="tel"
                        placeholder="+1 234 567 8900"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        className="input-field"
                      />
                    </Field>
                    <Field label="Your Website (if any)" icon={<Globe size={14} />}>
                      <input
                        type="url"
                        placeholder="https://yourwebsite.com"
                        value={form.website}
                        onChange={(e) => set("website", e.target.value)}
                        className="input-field"
                      />
                    </Field>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Service Required *" icon={<Star size={14} />}>
                      <select
                        required
                        value={form.service}
                        onChange={(e) => set("service", e.target.value)}
                        className="input-field"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </Field>
                    <Field label="Estimated Budget" icon={<FileText size={14} />}>
                      <select
                        value={form.budget}
                        onChange={(e) => set("budget", e.target.value)}
                        className="input-field"
                      >
                        <option value="">Select budget range</option>
                        {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </Field>
                  </div>

                  {/* Preferred time */}
                  <Field label="Preferred Meeting Time" icon={<Clock size={14} />}>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      {timeslots.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => set("timeslot", t)}
                          className={`px-3 py-2 rounded-xl text-[11px] font-medium border transition-all text-center leading-tight ${
                            form.timeslot === t
                              ? "border-[#00C2FF]/50 bg-[#00C2FF]/10 text-[#00C2FF]"
                              : "border-[#1C1C28] bg-[#0D0D14] text-[#8A8A9A] hover:border-[#2A2A3A] hover:text-[#C0C0D0]"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </Field>

                  {/* Requirements */}
                  <Field label="Project Requirements *" icon={<FileText size={14} />}>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your project, goals, and any specific features you need..."
                      value={form.requirements}
                      onChange={(e) => set("requirements", e.target.value)}
                      className="input-field resize-none"
                    />
                  </Field>

                  {/* Error */}
                  {status === "error" && (
                    <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      {errorMsg}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 rounded-2xl font-bold text-[#0A0A0F] text-sm flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: "linear-gradient(135deg,#7B5EA7,#00C2FF)" }}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Calendar size={16} />
                        Schedule My Free Meeting
                      </>
                    )}
                  </button>

                  <p className="text-[#8A8A9A] text-[11px] text-center">
                    By submitting, you agree to our{" "}
                    <a href="/privacy-policy" className="text-[#00C2FF] hover:underline">Privacy Policy</a>.
                    We never share your data.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-1.5 text-[#C0C0D0] text-[13px] font-medium">
        <span className="text-[#00C2FF]">{icon}</span>
        {label}
      </label>
      {children}
    </div>
  );
}
