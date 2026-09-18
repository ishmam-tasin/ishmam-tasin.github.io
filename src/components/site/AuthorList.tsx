import { profile } from "@/content/site";

/** Renders an author list with the site owner's name in bold. Handles "Name*" markers. */
export function AuthorList({ authors, note }: { authors: string[]; note?: string }) {
  return (
    <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
      {authors.map((a, i) => {
        const isMe = a.replace(/\*+$/, "").trim() === profile.name;
        return (
          <span key={`${a}-${i}`}>
            {isMe ? <strong className="font-semibold text-foreground">{a}</strong> : a}
            {i < authors.length - 1 ? ", " : ""}
          </span>
        );
      })}
      {note && <span className="ml-1 text-sm italic">({note})</span>}
    </p>
  );
}
