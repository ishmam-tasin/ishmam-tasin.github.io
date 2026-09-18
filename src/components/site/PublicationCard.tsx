import type { Publication } from "@/content/publications";
import { AuthorList } from "./AuthorList";
import { Thumbnail } from "./Thumbnail";
import { StatusTag } from "./StatusTag";

const linkLabels: Record<keyof NonNullable<Publication["links"]>, string> = {
  paper: "Paper",
  pdf: "PDF",
  doi: "DOI / Publisher",
  scholar: "Google Scholar",
  project: "Project",
};

export function PublicationCard({ pub }: { pub: Publication }) {
  const linkEntries = Object.entries(pub.links ?? {}).filter(([, v]) => !!v) as [
    keyof typeof linkLabels,
    string,
  ][];

  return (
    <article className="card-quiet grid gap-5 p-5 md:grid-cols-[1fr_200px] md:gap-8 md:p-6">
      <div className="min-w-0">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <StatusTag status={pub.status} />
          <span className="tag">{pub.type}</span>
          <span className="text-xs text-muted-foreground">{pub.area}</span>
        </div>
        <h3 className="text-lg leading-snug md:text-xl">{pub.title}</h3>
        <div className="mt-2">
          <AuthorList authors={pub.authors} note={pub.authorNote} />
        </div>
        <p className="mt-2 text-[0.95rem]">
          <span className="italic">{pub.venue}</span>
          <span className="text-muted-foreground">, {pub.year}</span>
        </p>
        {linkEntries.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {linkEntries.map(([key, href]) => (
              <li key={key}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  {linkLabels[key]}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Thumbnail src={pub.image} alt={pub.imageAlt} className="aspect-[4/3] md:aspect-auto md:h-full md:max-h-44" />
    </article>
  );
}
