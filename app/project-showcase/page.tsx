import type { Metadata } from "next";
import ProjectShowcaseContent from "./ProjectShowcaseContent";

export const metadata: Metadata = {
  title: "Project Showcase - 26+ Completed Projects | Nexsolutions",
  description:
    "Award-winning web development & digital marketing agency in Lahore, Pakistan. Custom websites, AI automation, SEO & e-commerce solutions. 186+ projects completed.",
};

export default function ProjectShowcasePage() {
  return <ProjectShowcaseContent />;
}
