import { Globe, TrendingUp, Puzzle, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";

const items = [
  {
    title: "Global Network",
    description:
      "Strong partnerships with airlines, operators and logistics providers worldwide.",
    Icon: Globe,
  },
  {
    title: "Commercial Focus",
    description:
      "Driving revenue, capacity and growth through strategic solutions.",
    Icon: TrendingUp,
  },
  {
    title: "Tailored Solutions",
    description:
      "Customized services designed around your operational and commercial objectives.",
    Icon: Puzzle,
  },
  {
    title: "Trusted Partner",
    description:
      "Commitment to integrity, transparency and long-term partnerships.",
    Icon: ShieldCheck,
  },
];

export function TrustStrip() {
  return (
    <div className="relative -mt-32 md:-mt-36 z-10">
      <Container>
        <div className="rounded-lg bg-navy-deep border border-white/10 p-8 md:p-10 text-navy-foreground shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
            {/* 15+ years */}
            <div className="text-center lg:border-r lg:border-white/10 lg:pr-6">
              <div className="text-5xl font-extrabold text-gold leading-none">15+</div>
              <div className="mt-3 text-xs font-bold tracking-[0.18em] text-white uppercase">
                Years of
                <br />
                Industry Experience
              </div>
              <div className="mt-2 text-xs text-white/60">
                Aviation & Cargo Expertise
              </div>
            </div>

            {items.map(({ title, description, Icon }) => (
              <div key={title} className="text-center px-2">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white/5 ring-1 ring-gold/40">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="mt-4 text-sm font-bold text-white">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/65">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
