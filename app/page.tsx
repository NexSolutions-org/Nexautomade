import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ClientLogos from "@/components/home/ClientLogos";
import ServicesSlider from "@/components/home/ServicesSlider";
import ProcessSection from "@/components/home/ProcessSection";
import AboutSection from "@/components/home/AboutSection";
import TechStackSection from "@/components/home/TechStackSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import StatsBar from "@/components/StatsBar";
import TestimonialsSection from "@/components/TestimonialsSection";
import PlatformsSection from "@/components/PlatformsSection";
import AwardsSection from "@/components/home/AwardsSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Nexsolutions - Your Growth Partner | Web Dev Agency Lahore",
  description:
    "Award-winning web development & digital marketing agency in Lahore, Pakistan. Custom websites, AI automation, SEO & e-commerce solutions. 186+ projects completed.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ClientLogos />
      <ServicesSlider />
      <ProcessSection />
      <AboutSection />
      <TechStackSection />
      <PortfolioSection />
      <StatsBar />
      <TestimonialsSection count={6} />
      <PlatformsSection />
      <AwardsSection />
      <CTABanner />
    </>
  );
}
