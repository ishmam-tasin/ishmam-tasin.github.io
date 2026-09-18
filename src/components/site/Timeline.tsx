import { Link } from "@tanstack/react-router";
import type { NewsItem } from "@/content/news";

export function Timeline({ items }: { items: NewsItem[] }) {
  return (
    <ol className="relative ml-2 border-l pl-6">
      {items.map((item, i) => (
        <li key={`${item.date}-${i}`} className="relative pb-6 last:pb-0">
          <span aria-hidden="true" className="absolute -left-[1.85rem] top-2 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background" />
          <p className="eyebrow">{item.date}</p>
          <p className="mt-0.5 text-[0.98rem]">
            {item.text}{" "}
            {item.to && (
              <Link to={item.to} className="link-academic text-sm whitespace-nowrap">
                →
              </Link>
            )}
            {item.href && (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="link-academic text-sm whitespace-nowrap">
                →
              </a>
            )}
          </p>
        </li>
      ))}
    </ol>
  );
}
