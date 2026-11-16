/**
 * Ongoing research / works in progress (from the CV's "Under Review / Ongoing Work").
 * The data lives in `data/ongoing.json` and is edited from the admin panel.
 * Status strings are kept exactly as the CV states them — do not "upgrade" them.
 */
import data from "./data/ongoing.json";

/** Common statuses. Any other text is allowed too (e.g. "Major revision"). */
export type OngoingStatus =
  | "Under review"
  | "Under review (2nd round)"
  | "In conference"
  | "Ongoing work"
  | "To be submitted"
  | "Planned for submission"
  | (string & {});

/** Which group the item is listed under. */
export type OngoingStage = "review" | "preparation";

export interface OngoingProject {
  id: string;
  title: string;
  /** Use ["Anonymous"] where the CV lists the authors as anonymous. */
  authors: string[];
  authorNote?: string;
  status: OngoingStatus;
  /** "review" = Under Review, "preparation" = In Preparation. Guessed from `status` if unset. */
  stage?: OngoingStage;
  /** Venue as it appears in the CV (target or submitted venue). */
  venue: string;
  venueUrl?: string;
  area: string;
  description?: string;
  pdf?: string;
  image?: string;
  imageAlt?: string;
}

export const ongoing = data as OngoingProject[];

export function ongoingStage(o: OngoingProject): OngoingStage {
  if (o.stage) return o.stage;
  return o.status.startsWith("Under review") || o.status === "In conference"
    ? "review"
    : "preparation";
}

export const underReview = ongoing.filter((o) => ongoingStage(o) === "review");
export const inPreparation = ongoing.filter((o) => ongoingStage(o) === "preparation");
