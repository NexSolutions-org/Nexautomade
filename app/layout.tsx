import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

export const metadata: Metadata = {
  title: "Nexsolutions - Your Growth Partner | Web Dev Agency Lahore",
  description:
    "At Nexsolutions, we build high-performance websites and intelligent digital systems — helping brands grow faster through AI automation, smart marketing, and conversion-focused design.",
  keywords:
    "web development lahore, digital marketing pakistan, AI automation, SEO services, e-commerce development",
  icons: {
    icon: "/images/fav.png",
    shortcut: "/images/fav.png",
    apple: "/images/fav.png",
  },
  openGraph: {
    title: "Nexsolutions - Your Growth Partner",
    description:
      "Award-winning web development & digital marketing agency in Lahore, Pakistan.",
    siteName: "Nexsolutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}
