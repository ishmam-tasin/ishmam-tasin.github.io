import { Link } from "@tanstack/react-router";
import type { ResearchProject } from "@/content/research";
import { StatusTag } from "./StatusTag";
import { Thumbnail } from "./Thumbnail";

export function ResearchCard({ project, detailed = false }: { project: ResearchProject; detailed?: boolean }) {
  const external = project.href.startsWith("http");
  return (
    <article className={detailed ? "card-quiet grid gap-5 p-5 md:grid-cols-[1fr_200px] md:gap-8 md:p-6" : "card-quiet flex h-full flex-col p-5"}>
      <div className="flex min-w-0 flex-1 flex-col">
        <p className="eyebrow">{project.area}</p>
        <h3 className="mt-2 text-lg leading-snug">{project.title}</h3>
        <p className="mt-2 text-[0.95rem] text-muted-foreground">{project.description}</p>
        {detailed && (
          <dl className="mt-3 space-y-1 text-[0.95rem]">
            {project.role && (
              <div className="flex gap-2">
                <dt className="w-28 shrink-0 text-muted-foreground">Role</dt>
                <dd>{project.role}</dd>
              </div>
            )}
            {project.methodology && (
              <div className="flex gap-2">
                <dt className="w-28 shrink-0 text-muted-foreground">Methods</dt>
                <dd>{project.methodology}</dd>
              </div>
            )}
            <div className="flex gap-2">
              <dt className="w-28 shrink-0 text-muted-foreground">Outcome</dt>
              <dd>{project.outcome}</dd>
            </div>
          </dl>
        )}
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <StatusTag status={project.outcomeStatus} />
          {external ? (
            <a href={project.href} className="link-academic text-sm" target="_blank" rel="noopener noreferrer">
              Read more →
            </a>
          ) : (
            <Link to={project.href} className="link-academic text-sm">
              Read more →
            </Link>
          )}
        </div>
      </div>
      {detailed && <Thumbnail src={project.image} alt={project.imageAlt} className="aspect-[4/3] md:aspect-auto md:h-full md:max-h-44" />}
    </article>
  );
}
