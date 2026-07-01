import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { CoreServices } from "@/components/home/CoreServices";
import { CharterRange } from "@/components/home/CharterRange";
import { StatsRow } from "@/components/home/StatsRow";
import { PartnershipCTA } from "@/components/home/PartnershipCTA";

export const metadata: Metadata = {
  title: "Nexavia Global Cargo LLC — Aviation Services & Freight Brokerage",
  description:
    "Dubai-based aviation services and freight brokerage company delivering strategic cargo solutions to airlines, forwarders and global businesses.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CoreServices />
      <CharterRange />
      <StatsRow />
      <PartnershipCTA />
    </>
  );
}
