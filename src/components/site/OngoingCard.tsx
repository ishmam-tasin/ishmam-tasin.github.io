import type { OngoingProject } from "@/content/ongoing";
import { AuthorList } from "./AuthorList";
import { Thumbnail } from "./Thumbnail";
import { StatusTag } from "./StatusTag";

export function OngoingCard({ item }: { item: OngoingProject }) {
  return (
    <article className="card-quiet grid gap-5 p-5 md:grid-cols-[1fr_200px] md:gap-8 md:p-6">
      <div className="min-w-0">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <StatusTag status={item.status} />
          <span className="text-xs text-muted-foreground">{item.area}</span>
        </div>
        <h3 className="text-lg leading-snug md:text-xl">{item.title}</h3>
        <div className="mt-2">
          <AuthorList authors={item.authors} note={item.authorNote} />
        </div>
        <p className="mt-2 text-[0.95rem]">
          <span className="text-muted-foreground">{item.status}: </span>
          {item.venueUrl ? (
            <a href={item.venueUrl} target="_blank" rel="noopener noreferrer" className="link-academic italic">
              {item.venue}
            </a>
          ) : (
            <span className="italic">{item.venue}</span>
          )}
        </p>
        {item.description && <p className="mt-2 text-[0.95rem] text-muted-foreground">{item.description}</p>}
        {item.pdf && (
          <div className="mt-4">
            <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="btn-outline">
              PDF
            </a>
          </div>
        )}
      </div>
      <Thumbnail src={item.image} alt={item.imageAlt} className="aspect-[4/3] md:aspect-auto md:h-full md:max-h-44" />
    </article>
  );
}
