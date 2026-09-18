import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title: string;
  eyebrow?: string;
  intro?: ReactNode;
  /** Optional "View all →" link (internal route). */
  moreTo?: string;
  moreLabel?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, title, eyebrow, intro, moreTo, moreLabel, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-16", className)} aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="mb-8 flex flex-col gap-2 border-b pb-4 md:flex-row md:items-end md:justify-between">
        <div>
          {eyebrow && <p className="eyebrow mb-1">{eyebrow}</p>}
          <h2 id={id ? `${id}-title` : undefined} className="text-2xl md:text-[1.75rem]">
            {title}
          </h2>
          {intro && <div className="mt-2 max-w-3xl text-muted-foreground">{intro}</div>}
        </div>
        {moreTo && (
          <Link to={moreTo} className="link-academic shrink-0 text-sm">
            {moreLabel ?? "View all"} →
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

export function PageHeader({ title, lede }: { title: string; lede?: ReactNode }) {
  return (
    <div className="border-b py-12 md:py-16">
      <div className="container-content">
        <h1 className="text-3xl md:text-4xl">{title}</h1>
        {lede && <div className="mt-4 max-w-3xl text-lg text-muted-foreground">{lede}</div>}
      </div>
    </div>
  );
}
