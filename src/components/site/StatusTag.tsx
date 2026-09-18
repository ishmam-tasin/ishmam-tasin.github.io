/** Publication / project status pill. Accent for final states, neutral for in-progress. */
export function StatusTag({ status }: { status: string }) {
  const final = status === "Published" || status === "Accepted" || status === "To appear";
  return <span className={final ? "tag-accent" : "tag"}>{status}</span>;
}
