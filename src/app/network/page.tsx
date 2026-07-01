import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { PartnershipCTA } from "@/components/home/PartnershipCTA";
import worldmap from "@/assets/cta-worldmap.jpg";
import { MapPin, Plane, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Network — Nexavia Global Cargo",
  description:
    "A Dubai-based hub connecting airlines, operators and forwarders across the Middle East, Asia, Europe, Africa and the Americas.",
};

const regions = [
  {
    name: "Middle East",
    hubs: [
      "Dubai (DXB / DWC)",
      "Abu Dhabi (AUH)",
      "Sharjah (SHJ)",
      "Doha (DOH)",
      "Riyadh (RUH)",
    ],
  },
  {
    name: "Asia Pacific",
    hubs: [
      "Hong Kong (HKG)",
      "Shanghai (PVG)",
      "Singapore (SIN)",
      "Delhi (DEL)",
      "Bangkok (BKK)",
    ],
  },
  {
    name: "Europe",
    hubs: [
      "Frankfurt (FRA)",
      "London (LHR / STN)",
      "Amsterdam (AMS)",
      "Liège (LGG)",
      "Istanbul (IST)",
    ],
  },
  {
    name: "Africa",
    hubs: [
      "Nairobi (NBO)",
      "Johannesburg (JNB)",
      "Lagos (LOS)",
      "Cairo (CAI)",
      "Addis Ababa (ADD)",
    ],
  },
  {
    name: "Americas",
    hubs: [
      "New York (JFK)",
      "Miami (MIA)",
      "Chicago (ORD)",
      "Los Angeles (LAX)",
      "São Paulo (GRU)",
    ],
  },
  {
    name: "CIS & Central Asia",
    hubs: [
      "Almaty (ALA)",
      "Baku (GYD)",
      "Tashkent (TAS)",
      "Tbilisi (TBS)",
      "Yerevan (EVN)",
    ],
  },
];

const stats = [
  { value: "100+", label: "Airline & operator relationships", Icon: Plane },
  {
    value: "300+",
    label: "Destinations reachable via our network",
    Icon: Globe2,
  },
  { value: "6", label: "Regions coordinated from Dubai", Icon: MapPin },
];

export default function NetworkPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Reach"
        title="A Network Built for Cargo"
        description="Rooted in Dubai and extended through trusted partners across every major trade lane."
      />

      <section className="relative overflow-hidden bg-navy text-navy-foreground py-16">
        <Image
          src={worldmap}
          alt=""
          aria-hidden="true"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-navy/70" />
        <Container className="relative">
          <div className="grid gap-8 sm:grid-cols-3">
            {stats.map(({ value, label, Icon }) => (
              <div
                key={label}
                className="rounded-lg bg-white/5 border border-white/10 p-6 text-center"
              >
                <Icon className="mx-auto h-8 w-8 text-gold" />
                <div className="mt-3 text-4xl font-extrabold text-gold">
                  {value}
                </div>
                <div className="mt-1 text-sm text-white/70">{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Our Hubs
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">
              Six regions, one operational spine
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((r) => (
              <div
                key={r.name}
                className="rounded-lg bg-card p-6 ring-1 ring-border/60 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-navy">
                    <MapPin className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-navy">{r.name}</h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {r.hubs.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <PartnershipCTA />
    </>
  );
}
