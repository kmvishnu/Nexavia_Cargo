import { Globe, Plane, Package, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";

const stats = [
  { value: "100+", label: "Airline Partners Worldwide", Icon: Globe },
  { value: "300+", label: "Global Destinations Connected", Icon: Plane },
  { value: "24/7", label: "Dedicated Support & Market Coverage", Icon: Package },
  { value: "Global", label: "Presence Through Strategic Partnerships", Icon: Users },
];

export function StatsRow() {
  return (
    <section className="bg-surface-muted pb-24">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-border pt-12">
          {stats.map(({ value, label, Icon }) => (
            <div key={label} className="flex items-center gap-4">
              <Icon className="h-9 w-9 text-navy/80" strokeWidth={1.5} />
              <div>
                <div className="text-2xl font-extrabold text-navy leading-none">
                  {value}
                </div>
                <div className="mt-1.5 text-xs text-muted-foreground max-w-[180px] leading-snug">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
