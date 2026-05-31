import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import ServicePageContent from "./ServicePageContent";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDesc,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();
  return <ServicePageContent service={service} />;
}
