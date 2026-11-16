/**
 * Publications — accepted / published / to appear.
 *
 * The data lives in `data/publications.json` and is edited from the admin
 * panel (`/admin_panel.html`). You can also edit the JSON by hand.
 *
 * Author names are plain strings; the site bolds `Md Ishmam Tasin`
 * automatically (see AuthorList component). Keep the CV's author order.
 *
 * `image`: an image URL (e.g. a file in `public/`). When omitted, a neutral
 * placeholder is shown.
 *
 * Links: only keys with a value are rendered. Leave a key out (or "") to hide it.
 */
import data from "./data/publications.json";

export type PublicationStatus = "Published" | "Accepted" | "To appear";
export type PublicationType = "Conference" | "Journal";

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  /** Optional note shown under the author list, e.g. equal contribution. */
  authorNote?: string;
  year: number;
  venue: string;
  venueShort: string;
  type: PublicationType;
  status: PublicationStatus;
  area: string;
  links?: {
    paper?: string;
    pdf?: string;
    doi?: string;
    scholar?: string;
    project?: string;
  };
  image?: string;
  imageAlt?: string;
  /** Show on the homepage "Selected publications" list. */
  selected?: boolean;
}

export const publications = data as Publication[];

export const selectedPublications = publications.filter((p) => p.selected);
