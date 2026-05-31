"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Client 24",           img: "/images/clients/1-300x150.webp" },
  { name: "Eraedge",             img: "/images/clients/2-300x158.webp" },
  { name: "Power",               img: "/images/clients/3-300x138.webp" },
  { name: "The Emirates Caravan",img: "/images/clients/4-300x135.webp" },
  { name: "Riftstone Ventures",  img: "/images/clients/5.webp" },
  { name: "Wildlife & Parks",    img: "/images/clients/6-300x136.webp" },
  { name: "Nomad Insights",      img: "/images/clients/7-300x138.webp" },
  { name: "Monday Hosters",      img: "/images/clients/8.webp" },
  { name: "SK Foods",            img: "/images/clients/9-300x142.webp" },
  { name: "Empire Company",      img: "/images/clients/10.webp" },
];

export default function ClientLogos() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-14 bg-[#0A0A0F] border-y border-[#1E1E2E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[#8888A0] text-sm tracking-widest uppercase"
        >
          Trusted by <span className="gradient-text font-semibold">100+</span> businesses worldwide
        </motion.p>
      </div>

      <div className="flex animate-marquee items-center">
        {doubled.map((client, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-3 flex items-center justify-center w-52 h-[72px] px-4 py-2 rounded-xl border border-[#1C1C28] bg-[#12121A] hover:border-[#00C2FF]/40 transition-colors duration-300 group"
          >
            <Image
              src={client.img}
              alt={client.name}
              width={180}
              height={64}
              className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
