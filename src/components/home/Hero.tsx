import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import heroImg from "@/assets/hero-cargo-plane.jpg";
import { Container } from "@/components/layout/Container";
import { ProposalButton } from "@/components/marketing/ProposalModal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      {/* background image */}
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Cargo aircraft being loaded at Dubai airport"
          className="object-cover object-center"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
      </div>

      <Container className="relative pt-20 pb-44 md:pt-28 md:pb-56">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            Connecting Airlines. Unlocking Global Cargo Opportunities.
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
            Aviation Expertise.
            <br />
            Global Connections.
            <br />
            <span className="text-gold">Commercial Excellence.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-[15px] leading-relaxed text-white/80">
            Nexavia Global Cargo LLC is a Dubai-based aviation services and
            freight brokerage company delivering strategic cargo solutions to
            airlines, freight forwarders, charter operators, and global
            businesses. We connect capacity with opportunity through expertise,
            partnerships, and performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ProposalButton className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-colors hover:brightness-105">
              Request a Proposal
              <ArrowRight className="h-4 w-4" />
            </ProposalButton>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
