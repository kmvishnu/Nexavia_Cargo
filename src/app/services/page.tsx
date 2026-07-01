import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Our Services — Nexavia Global Cargo",
  description:
    "End-to-end aviation solutions: airline representation, air charter, freight brokerage, interline, AWB stock, ACMI, customs and automotive logistics.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
