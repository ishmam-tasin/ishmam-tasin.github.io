import type { Experience } from "@/content/experience";

export function ExperienceList({ items, compact = false }: { items: Experience[]; compact?: boolean }) {
  return (
    <ul className="divide-y">
      {items.map((e) => (
        <li key={`${e.org}-${e.role}`} className="grid gap-2 py-6 md:grid-cols-[11rem_1fr] md:gap-8">
          <p className="text-sm font-medium text-muted-foreground">{e.period}</p>
          <div>
            <h3 className="font-sans text-base font-semibold">
              {e.role}
              <span className="font-normal text-muted-foreground">, </span>
              {e.orgUrl ? (
                <a href={e.orgUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  {e.org}
                </a>
              ) : (
                e.org
              )}
            </h3>
            <p className="text-[0.95rem] text-muted-foreground">{e.unit}</p>
            {e.supervisor && <p className="text-[0.95rem] text-muted-foreground">Supervisor: {e.supervisor}</p>}
            {!compact && (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.95rem]">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
            {compact && <p className="mt-2 text-[0.95rem]">{e.points[0]}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
