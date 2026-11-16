/**
 * Updates / news timeline. Newest first.
 * The data lives in `data/news.json` and is edited from the admin panel.
 * `date` is free text (e.g. "May 2026" or just "2026").
 * `to` (internal route) or `href` (external URL) are optional.
 */
import data from "./data/news.json";

export interface NewsItem {
  date: string;
  text: string;
  to?: string;
  href?: string;
}

export const news = data as NewsItem[];
