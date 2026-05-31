import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service | Nexsolutions",
  description:
    "Read Nexsolutions' Terms of Service. Understand your rights and responsibilities when using our web development, AI automation, and digital marketing services.",
};

export default function TermsOfServicePage() {
  return <TermsContent />;
}
