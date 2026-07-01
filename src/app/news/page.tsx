import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { PartnershipCTA } from "@/components/home/PartnershipCTA";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Insights — Nexavia Global Cargo",
  description:
    "Perspectives on air cargo markets, capacity, charter demand and aviation trends from the Nexavia team.",
};

const posts = [
  {
    tag: "Market Report",
    date: "May 2026",
    title: "Middle East Air Cargo: Q2 Capacity & Rate Outlook",
    excerpt:
      "Belly capacity out of the Gulf continues to expand, while dedicated freighter yields hold on Asia–Europe lanes. Our read on where the market goes next.",
  },
  {
    tag: "Charter",
    date: "April 2026",
    title: "Why Charter Demand Is Outpacing Belly Growth on Project Cargo",
    excerpt:
      "Project cargo, humanitarian missions and AOG needs are keeping charter desks busy — even as scheduled capacity returns.",
  },
  {
    tag: "GSA / CSA",
    date: "March 2026",
    title:
      "Choosing the Right GSA Partner: Five Questions Airlines Should Ask",
    excerpt:
      "A practical framework for airlines evaluating cargo representation in the UAE and wider Middle East.",
  },
  {
    tag: "Interline",
    date: "February 2026",
    title: "Interline Done Right: Turning Agreements into Revenue",
    excerpt:
      "Signing an SPA is easy. Making it produce meaningful uplift is a different discipline — here's what actually works.",
  },
  {
    tag: "Operations",
    date: "January 2026",
    title: "AWB Stock in Dubai: Removing Friction for Forwarders",
    excerpt:
      "How neutral and airline-specific AWB stock in DXB is helping forwarders scale bookings without administrative drag.",
  },
  {
    tag: "Sustainability",
    date: "December 2025",
    title: "SAF and the Cargo Cost Curve: What Shippers Should Know",
    excerpt:
      "Sustainable aviation fuel is coming to your cargo P&L. A short primer on scope, timing and impact.",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Insights"
        title="Perspectives from the Nexavia Team"
        description="Analysis, market updates and practical guidance from the people building smarter aviation partnerships."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col rounded-lg bg-card ring-1 ring-border/60 shadow-sm overflow-hidden transition hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-navy">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/85 to-navy-deep" />
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,white,transparent_45%)]" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-gold/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-navy">
                    <Tag className="h-3 w-3" />
                    {p.tag}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {p.date}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-navy leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {p.excerpt}
                  </p>
                  <div className="mt-auto pt-5">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-navy transition-colors"
                    >
                      Read Article <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <PartnershipCTA />
    </>
  );
}
