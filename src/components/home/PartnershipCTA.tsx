import { ArrowRight } from "lucide-react";
import Image from "next/image";
import worldmap from "@/assets/cta-worldmap.jpg";
import { Container } from "@/components/layout/Container";
import { ProposalButton } from "@/components/marketing/ProposalModal";

export function PartnershipCTA() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <Image
        src={worldmap}
        alt=""
        aria-hidden="true"
        fill
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
      <Container className="relative py-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">
              Let's Build Smarter Aviation Partnerships
            </h2>
            <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-white/75">
              Whether you are an airline looking for representation, a forwarder
              seeking capacity, or a business in need of tailored aviation
              solutions, Nexavia Global Cargo is your trusted partner.
            </p>
          </div>
          <ProposalButton className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground transition-colors hover:brightness-105 shrink-0">
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </ProposalButton>
        </div>
      </Container>
    </section>
  );
}
