import { Fragment } from "react";

const LINK = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;

/**
 * Renders plain text where `[label](https://url)` becomes an external link.
 * Used for content edited from the admin panel (e.g. collaborations).
 */
export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const i = m.index ?? 0;
    if (i > last) parts.push(text.slice(last, i));
    parts.push(
      <a
        key={i}
        href={m[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="link-academic font-medium"
      >
        {m[1]}
      </a>,
    );
    last = i + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <Fragment>{parts}</Fragment>;
}
