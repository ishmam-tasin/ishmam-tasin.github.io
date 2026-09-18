import { seo } from "@/content/site";

/** Builds per-route head metadata with consistent OG/Twitter tags. */
export function pageHead(opts: { title?: string; description?: string; path: string }) {
  const title = opts.title ? `${opts.title} | ${seo.title.split(" | ")[0]}` : seo.title;
  const description = opts.description ?? seo.description;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: opts.path },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: opts.path }],
  };
}
