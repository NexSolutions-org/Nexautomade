import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Us - Nexsolutions | Digital Agency Lahore Pakistan",
  description:
    "Award-winning web development & digital marketing agency in Lahore, Pakistan. Custom websites, AI automation, SEO & e-commerce solutions. 186+ projects completed.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
