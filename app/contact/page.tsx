import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us - Nexsolutions | Lahore Pakistan",
  description:
    "Award-winning web development & digital marketing agency in Lahore, Pakistan. Custom websites, AI automation, SEO & e-commerce solutions. 186+ projects completed.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
