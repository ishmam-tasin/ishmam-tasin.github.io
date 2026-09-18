import placeholder from "@/assets/placeholder-paper.jpg";
import { cn } from "@/lib/utils";

/**
 * Image slot used by publication / project cards.
 * Pass `src` to replace the placeholder with a real figure or screenshot.
 */
export function Thumbnail({ src, alt, className }: { src?: string; alt?: string; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-md border bg-placeholder", className)}>
      <img
        src={src ?? placeholder}
        alt={src ? (alt ?? "") : ""}
        loading="lazy"
        width={944}
        height={704}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
