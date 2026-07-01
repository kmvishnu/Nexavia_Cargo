import { ArrowRight, Plane } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { aircraftRange } from "./home-content";

export function CharterRange() {
  return (
    <section className="bg-surface-muted pb-16">
      <Container>
        <div className="rounded-lg bg-navy text-navy-foreground px-6 md:px-10 py-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <p className="text-[11px] font-bold tracking-[0.2em] text-gold uppercase mb-4">
                Our Charter Aircraft Range
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {aircraftRange.map((ac) => (
                  <div
                    key={ac}
                    className="flex flex-col items-center gap-1.5 text-white/80"
                  >
                    <Plane
                      className="h-7 w-7 text-white/70"
                      strokeWidth={1.25}
                    />
                    <span className="text-xs font-medium tracking-wide">
                      {ac}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <Link
              href="/services#air-charter"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground transition-colors hover:brightness-105 shrink-0"
            >
              View Charter Solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
