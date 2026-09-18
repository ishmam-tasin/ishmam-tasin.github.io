import { links, profile } from "@/content/site";

export function SiteFooter() {
  const items = [
    links.scholar && { label: "Google Scholar", href: links.scholar },
    links.linkedin && { label: "LinkedIn", href: links.linkedin },
    links.github && { label: "GitHub", href: links.github },
    { label: "CV", href: profile.cvUrl },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer className="mt-24 border-t">
      <div className="container-content flex flex-col gap-6 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-serif text-lg font-semibold">{profile.name}</p>
          <p className="text-sm text-muted-foreground">{profile.shortTitle}</p>
          <p className="mt-3 text-sm">
            <span className="text-muted-foreground">Email: </span>
            <a href={`mailto:${profile.email}`} className="link-academic">
              {profile.email}
            </a>
          </p>
        </div>
        <nav aria-label="Footer links">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            {items.map((item, i) => (
              <li key={item.label} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="text-border">|</span>}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container-content pb-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  );
}
