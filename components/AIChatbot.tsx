"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ChevronDown } from "lucide-react";

interface Message {
  role: "bot" | "user";
  text: string;
  time: string;
}

interface OpenAIMessage {
  role: "user" | "assistant";
  content: string;
}

const quickReplies = [
  "What services do you offer?",
  "How much does a website cost?",
  "How long does it take?",
  "Do you work internationally?",
  "How do I get started?",
];

function getTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

// Nex AI SVG icon
function NexAIIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="15" fill="url(#grad)" />
      <rect x="9" y="11" width="14" height="10" rx="3" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1.2" strokeOpacity="0.6"/>
      <circle cx="13" cy="16" r="1.8" fill="white" />
      <circle cx="19" cy="16" r="1.8" fill="white" />
      <line x1="9" y1="11" x2="9" y2="8.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" strokeLinecap="round"/>
      <line x1="23" y1="11" x2="23" y2="8.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" strokeLinecap="round"/>
      <circle cx="9" cy="8" r="1.2" fill="white" fillOpacity="0.7" />
      <circle cx="23" cy="8" r="1.2" fill="white" fillOpacity="0.7" />
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7B5EA7"/>
          <stop offset="1" stopColor="#00C2FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I'm Nex AI, your Nexsolutions assistant.\n\nAsk me anything about our services, pricing, portfolio, or how to get started.",
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const [history, setHistory] = useState<OpenAIMessage[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = async (text: string) => {
    if (!text.trim() || typing) return;
    const userText = text.trim();
    setMessages((prev) => [...prev, { role: "user", text: userText, time: getTime() }]);
    setInput("");
    setTyping(true);

    const newHistory: OpenAIMessage[] = [...history, { role: "user", content: userText }];
    setHistory(newHistory);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newHistory }),
      });
      const data = await res.json();
      if (!res.ok) {
        const errMsg = data.error ?? "Something went wrong.";
        setMessages((prev) => [...prev, { role: "bot", text: `⚠️ ${errMsg}\n\nPlease contact us directly:\n📧 info@nexsolutions.org\n💬 WhatsApp: +92 306 2646255`, time: getTime() }]);
        return;
      }
      const reply = data.reply ?? "Sorry, something went wrong. Please try again.";
      setHistory((prev) => [...prev, { role: "assistant", content: reply }]);
      setMessages((prev) => [...prev, { role: "bot", text: reply, time: getTime() }]);
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: "Connection error. Please check your internet and try again.", time: getTime() }]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 16 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-8 right-5 z-50 flex items-center gap-3 pl-2 pr-5 py-2 rounded-full text-white text-sm font-semibold shadow-2xl"
            style={{
              background: "#7B5EA7",
              boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
            }}
          >
            <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
              <NexAIIcon size={22} />
            </span>
            <span>Try Nex AI</span>
            {unread > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#00C2FF] text-[10px] font-bold flex items-center justify-center text-white">
                {unread}
              </span>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 32, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 32 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed bottom-6 right-5 z-50 w-[370px] max-w-[calc(100vw-20px)] rounded-3xl overflow-hidden flex flex-col"
            style={{
              boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
              background: "#0D0D16",
              height: "540px",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4 flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #4A2880 0%, #1A1A3A 60%)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <NexAIIcon size={24} />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-[#1A1A3A]" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">Nex AI</p>
                  <p className="text-white/50 text-[11px] mt-0.5">Nexsolutions · Online now</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                >
                  <ChevronDown size={16} />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4" style={{ scrollbarWidth: "none" }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"} gap-1`}>
                  {msg.role === "bot" && (
                    <div className="flex items-center gap-2 mb-0.5">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: "linear-gradient(135deg,#7B5EA7,#00C2FF)" }}>
                        <NexAIIcon size={14} />
                      </div>
                      <span className="text-[10px] text-white/30 font-medium">Nex AI</span>
                    </div>
                  )}
                  <div className={`max-w-[82%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                    <div
                      className="px-4 py-3 text-[13px] leading-relaxed whitespace-pre-line"
                      style={
                        msg.role === "user"
                          ? {
                              background: "linear-gradient(135deg,#6B3FA0,#0094C6)",
                              color: "#fff",
                              borderRadius: "18px 18px 4px 18px",
                            }
                          : {
                              background: "#181824",
                              color: "#C8C8DC",
                              border: "1px solid rgba(255,255,255,0.07)",
                              borderRadius: "4px 18px 18px 18px",
                            }
                      }
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-white/20 px-1">{msg.time}</span>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ background: "linear-gradient(135deg,#7B5EA7,#00C2FF)" }}>
                    <NexAIIcon size={14} />
                  </div>
                  <div className="px-4 py-3.5 rounded-[4px_18px_18px_18px] flex items-center gap-1.5"
                    style={{ background: "#181824", border: "1px solid rgba(255,255,255,0.07)" }}>
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-white/40"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto flex-shrink-0" style={{ scrollbarWidth: "none" }}>
              {quickReplies.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="flex-shrink-0 text-[11px] px-3 py-1.5 rounded-full border transition-all whitespace-nowrap"
                  style={{
                    border: "1px solid rgba(123,94,167,0.35)",
                    color: "rgba(180,160,220,0.9)",
                    background: "rgba(123,94,167,0.08)",
                  }}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input bar */}
            <div
              className="flex items-center gap-2 px-4 py-3 flex-shrink-0"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0A0A12" }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent text-[#E0E0F0] text-sm placeholder:text-white/20 focus:outline-none"
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || typing}
                className="w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-25"
                style={{ background: "linear-gradient(135deg,#7B5EA7,#00C2FF)" }}
              >
                <Send size={14} className="text-white" strokeWidth={2.5} />
              </button>
            </div>

            {/* Powered by */}
            <div className="text-center py-2 flex-shrink-0" style={{ background: "#0A0A12" }}>
              <span className="text-[10px] text-white/15">Powered by Nexsolutions AI</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
