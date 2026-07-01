"use client";

import { useEffect } from "react";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { PartnershipCTA } from "@/components/home/PartnershipCTA";
import { serviceCards } from "@/components/home/home-content";
import { ProposalButton } from "@/components/marketing/ProposalModal";
import { ArrowRight, Check } from "lucide-react";

export default function ServicesPageClient() {
  // Scroll to hash after render (Vite transition compatibility)
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      // small delay to allow layout
      setTimeout(
        () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
        100
      );
    }
  }, []);

  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="End-to-End Aviation Solutions"
        description="Eight specialised service lines designed to help airlines, forwarders and shippers unlock capacity, revenue and reach."
      />

      {/* jump nav */}
      <section className="border-b border-border bg-surface-muted">
        <Container className="py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {serviceCards.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="hover:text-navy transition-colors"
              >
                {s.title.split("(")[0].trim()}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {serviceCards.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          className={`scroll-mt-24 py-20 ${
            i % 2 === 1 ? "bg-surface-muted" : "bg-background"
          }`}
        >
          <Container>
            <div
              className={`grid gap-10 lg:grid-cols-2 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-border/60">
                  <Image
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover aspect-[16/11]"
                    placeholder="blur"
                  />
                </div>
                <div className="absolute -bottom-5 left-6 grid h-14 w-14 place-items-center rounded-full bg-navy ring-4 ring-background shadow-md">
                  <s.Icon className="h-6 w-6 text-gold" />
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                  Service 0{i + 1}
                </p>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold text-navy">
                  {s.title}
                </h2>
                {s.sub && (
                  <p className="mt-2 text-xs font-medium text-foreground/70">
                    {s.sub}
                  </p>
                )}
                <div className="mt-5 space-y-3 text-muted-foreground leading-relaxed">
                  {s.details.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
                <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {s.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <ProposalButton
                    service={s.title}
                    className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-deep"
                  >
                    Request a Proposal
                    <ArrowRight className="h-4 w-4" />
                  </ProposalButton>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <PartnershipCTA />
    </>
  );
}
