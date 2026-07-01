import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  sub?: string;
  image: any;
  Icon: LucideIcon;
  slug: string;
}

export function ServiceCard({
  title,
  description,
  sub,
  image,
  Icon,
  slug,
}: Props) {
  return (
    <article className="group relative flex flex-col rounded-lg bg-card shadow-sm ring-1 ring-border/60 transition hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-lg">
        <Image
          src={image}
          alt=""
          placeholder="blur"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      {/* Icon badge - sits on the seam, outside the clipped image div so it never gets cut */}
      <div className="relative -mt-7 flex justify-center">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-navy ring-4 ring-card shadow-md">
          <Icon className="h-6 w-6 text-gold" />
        </div>
      </div>
      <div className="flex flex-1 flex-col px-6 pt-4 pb-6 text-center">
        <h3 className="text-base font-bold text-navy leading-snug">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        {sub && (
          <p className="mt-3 text-xs font-medium text-foreground/70">{sub}</p>
        )}
        <div className="mt-auto pt-5">
          <Link
            href={`/services#${slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-navy transition-colors"
          >
            Learn More <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
