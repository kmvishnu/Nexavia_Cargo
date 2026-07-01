import { Container } from "./Container";

export function PageHero({
  eyebrow = "Nexavia Global Cargo",
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_60%,white,transparent_45%)]" />
      <Container className="relative py-20 md:py-24 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold">{title}</h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-white/75 leading-relaxed">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
