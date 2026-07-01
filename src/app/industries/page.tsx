import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { PartnershipCTA } from "@/components/home/PartnershipCTA";
import {
  Pill,
  Cpu,
  Car,
  Shirt,
  Wrench,
  Leaf,
  HeartPulse,
  Fuel,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries — Nexavia Global Cargo",
  description:
    "Industry expertise in pharma, high-tech, automotive, fashion, oil & gas, perishables and humanitarian cargo.",
};

const industries = [
  {
    Icon: Pill,
    title: "Pharmaceuticals & Healthcare",
    body: "Temperature-controlled and GDP-compliant transport for pharma, biotech and medical devices.",
  },
  {
    Icon: Cpu,
    title: "High-Tech & Electronics",
    body: "Secure, time-definite movement of semiconductors, servers and consumer electronics.",
  },
  {
    Icon: Car,
    title: "Automotive",
    body: "OEM parts, aftermarket components and luxury vehicles moved with premium handling.",
  },
  {
    Icon: Shirt,
    title: "Fashion & Retail",
    body: "Fast-fashion cycles and seasonal peaks supported with capacity on the busiest lanes.",
  },
  {
    Icon: Wrench,
    title: "AOG & Aerospace",
    body: "Aircraft-on-ground missions delivered with 24/7 activation and specialist handling.",
  },
  {
    Icon: Leaf,
    title: "Perishables",
    body: "Cool-chain integrity for flowers, seafood, fruit and other high-value perishables.",
  },
  {
    Icon: HeartPulse,
    title: "Humanitarian & Relief",
    body: "Rapid-response charters and coordinated logistics for humanitarian operations.",
  },
  {
    Icon: Fuel,
    title: "Oil, Gas & Energy",
    body: "Project cargo, drilling equipment and urgent spares to remote operating sites.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors We Serve"
        title="Industry Expertise Across Global Trade"
        description="From temperature-sensitive pharma to oversized project cargo — we tailor aviation solutions to the demands of every sector."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map(({ Icon, title, body }) => (
              <article
                key={title}
                className="group rounded-lg bg-card p-7 ring-1 ring-border/60 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="grid h-12 w-12 place-items-center rounded-md bg-navy transition-colors group-hover:bg-gold">
                  <Icon className="h-6 w-6 text-gold group-hover:text-navy transition-colors" />
                </div>
                <h3 className="mt-5 text-base font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <PartnershipCTA />
    </>
  );
}
