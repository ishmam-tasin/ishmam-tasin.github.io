import type { Award } from "@/content/awards";

export function AwardList({ items }: { items: Award[] }) {
  return (
    <ul className="divide-y">
      {items.map((a) => (
        <li key={`${a.title}-${a.year}`} className="grid gap-1 py-4 md:grid-cols-[7rem_1fr] md:gap-6">
          <p className="text-sm font-medium text-muted-foreground md:pt-0.5">{a.year}</p>
          <div>
            <h3 className="font-sans text-base font-semibold">
              {a.href ? (
                <a href={a.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  {a.title}
                </a>
              ) : (
                a.title
              )}
              {a.org && <span className="font-normal text-muted-foreground"> — {a.org}</span>}
            </h3>
            {a.description && <p className="mt-0.5 text-[0.95rem] text-muted-foreground">{a.description}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
