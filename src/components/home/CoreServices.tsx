import { Container } from "@/components/layout/Container";
import { serviceCards } from "./home-content";
import { ServiceCard } from "./ServiceCard";

export function CoreServices() {
  return (
    <section className="bg-surface-muted py-24">
      <Container>
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            Our Core Services
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">
            End-to-End Aviation Solutions
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
            Specialized services designed to support airlines, freight
            forwarders and global cargo stakeholders.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
