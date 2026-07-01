import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { PartnershipCTA } from "@/components/home/PartnershipCTA";
import {
  Compass,
  Target,
  Eye,
  Award,
  Users,
  Globe2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Nexavia Global Cargo",
  description:
    "Dubai-based aviation services and freight brokerage company. Learn about Nexavia's mission, vision and values.",
};

const values = [
  {
    Icon: ShieldCheck,
    title: "Integrity",
    body: "We operate with transparency, honesty and accountability in every transaction.",
  },
  {
    Icon: Award,
    title: "Excellence",
    body: "We hold ourselves to the highest professional standards across every mandate.",
  },
  {
    Icon: Users,
    title: "Partnership",
    body: "We build long-term relationships grounded in trust and shared success.",
  },
  {
    Icon: TrendingUp,
    title: "Growth",
    body: "We help our partners unlock new markets, capacity and commercial value.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Aviation Expertise, Delivered from Dubai"
        description="Nexavia Global Cargo LLC is a Dubai-based aviation services and freight brokerage company connecting airlines, operators and shippers to global cargo opportunities."
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Our Story
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">
              Built on 15+ years of aviation expertise
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in Dubai — a global hub for aviation and trade — Nexavia
                brings together a leadership team with more than fifteen years
                of experience across airline commercial, cargo GSA/CSA
                operations, freight brokerage and charter management.
              </p>
              <p>
                We were created to solve one clear problem: airlines, operators
                and forwarders needed a nimble, commercially-minded partner
                capable of moving between strategy and execution without losing
                either. Nexavia sits at that intersection.
              </p>
              <p>
                Today we support carriers entering new markets, brokers
                sourcing capacity, and shippers moving mission-critical cargo —
                all with the same commitment to integrity and performance.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <InfoCard Icon={Target} title="Our Mission">
              To be the trusted commercial bridge between airlines, operators
              and global cargo markets — creating measurable value through
              expertise and partnership.
            </InfoCard>
            <InfoCard Icon={Eye} title="Our Vision">
              To become the Middle East's most respected aviation services and
              freight brokerage house, recognised for integrity and
              performance.
            </InfoCard>
            <InfoCard Icon={Compass} title="Our Approach">
              Consultative, data-driven and long-term — we align our success
              with the commercial outcomes of the partners we represent.
            </InfoCard>
            <InfoCard Icon={Globe2} title="Our Reach">
              Rooted in Dubai, extended through a global network of airline,
              operator, broker and ground-handling partners.
            </InfoCard>
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              What We Stand For
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">
              Values that guide every mandate
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-lg bg-card p-7 ring-1 ring-border/60 shadow-sm text-center"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-navy">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-5 text-base font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <PartnershipCTA />
    </>
  );
}

function InfoCard({
  Icon,
  title,
  children,
}: {
  Icon: typeof Target;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg bg-card p-6 ring-1 ring-border/60 shadow-sm">
      <div className="grid h-11 w-11 place-items-center rounded-md bg-navy">
        <Icon className="h-5 w-5 text-gold" />
      </div>
      <h3 className="mt-4 text-base font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {children}
      </p>
    </div>
  );
}
