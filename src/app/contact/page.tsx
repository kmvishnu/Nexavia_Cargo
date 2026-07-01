import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us — Nexavia Global Cargo",
  description:
    "Get in touch with Nexavia Global Cargo LLC in Dubai. Talk to our team about airline representation, charter, brokerage and more.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
