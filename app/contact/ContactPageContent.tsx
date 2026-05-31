"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import { contactData } from "@/data/contact";

const contactInfo = [
  {
    icon: <MapPin size={20} className="text-[#6B5CE7]" />,
    label: "Address",
    value: contactData.address,
    href: null,
  },
  {
    icon: <Mail size={20} className="text-[#6B5CE7]" />,
    label: "Email",
    value: contactData.email,
    href: `mailto:${contactData.email}`,
  },
  {
    icon: <Phone size={20} className="text-[#6B5CE7]" />,
    label: "Phone",
    value: contactData.phone,
    href: `tel:${contactData.phone.replace(/\s/g, "")}`,
  },
  {
    icon: <MessageCircle size={20} className="text-[#6B5CE7]" />,
    label: "WhatsApp",
    value: "Chat with us on WhatsApp",
    href: contactData.whatsapp,
  },
];

export default function ContactPageContent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch and let's build something amazing together."
        breadcrumb="Contact Us"
      />

      <section className="py-24 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-white mb-3">
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-[#9999AA] text-sm mb-8 leading-relaxed">
                Ready to grow your business? Reach out to us and we&apos;ll get back
                to you within 24 hours with a tailored solution for your needs.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0A0A0F] border border-[#1E1E2E] flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[#9999AA] text-xs mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-white text-sm font-medium hover:text-[#00D4FF] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {submitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-400 text-2xl">✓</span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                    <p className="text-[#9999AA] text-sm">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  action="https://formspree.io/f/YOUR_FORM_ID"
                  method="POST"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#9999AA] text-xs mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full bg-[#111118] border border-[#1E1E2E] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00D4FF] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#9999AA] text-xs mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full bg-[#111118] border border-[#1E1E2E] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00D4FF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#9999AA] text-xs mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+92 300 0000000"
                        className="w-full bg-[#111118] border border-[#1E1E2E] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00D4FF] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#9999AA] text-xs mb-2">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full bg-[#111118] border border-[#1E1E2E] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00D4FF] transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-automation">AI Automation & AI Agents</option>
                        <option value="web-development">Web Development</option>
                        <option value="shopify">Shopify & Online Store</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="seo">AI-Powered SEO & Growth</option>
                        <option value="ecommerce">E-commerce Services</option>
                        <option value="virtual-assistant">Virtual Assistant</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#9999AA] text-xs mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                      rows={5}
                      className="w-full bg-[#111118] border border-[#1E1E2E] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00D4FF] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#6B5CE7] to-[#00D4FF] text-white py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}


