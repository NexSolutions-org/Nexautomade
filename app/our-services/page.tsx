import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Our Services - Web Dev, AI, SEO, Marketing | Nexsolutions",
  description:
    "Award-winning web development & digital marketing agency in Lahore, Pakistan. Custom websites, AI automation, SEO & e-commerce solutions. 186+ projects completed.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
