import type { Metadata } from "next";
import ScheduleMeetingContent from "./ScheduleMeetingContent";

export const metadata: Metadata = {
  title: "Schedule a Meeting — Nexsolutions",
  description: "Book a free consultation call with Nexsolutions. Tell us about your project and we'll get back to you within 24 hours.",
};

export default function ScheduleMeetingPage() {
  return <ScheduleMeetingContent />;
}
