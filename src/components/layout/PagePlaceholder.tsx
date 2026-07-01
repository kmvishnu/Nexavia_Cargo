import { Container } from "./Container";

export function PagePlaceholder({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-navy text-navy-foreground">
      <Container className="py-28 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
          Nexavia Global Cargo
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          {description ?? "This page is coming soon."}
        </p>
      </Container>
    </section>
  );
}
