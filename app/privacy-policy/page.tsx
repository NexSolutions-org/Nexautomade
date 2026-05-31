import type { Metadata } from "next";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Nexsolutions",
  description:
    "Learn how Nexsolutions collects, uses, and protects your personal information. We are committed to transparency and data privacy.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
