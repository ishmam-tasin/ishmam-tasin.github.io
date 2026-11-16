/**
 * Research narrative: overview, themes, questions, contexts, selected projects
 * and collaborations.
 *
 * The data lives in `data/research.json`, `data/projects.json` and
 * `data/collaborations.json`, and is edited from the admin panel.
 */
import research from "./data/research.json";
import projects from "./data/projects.json";
import collabs from "./data/collaborations.json";

export interface ResearchTheme {
  title: string;
  text: string;
}

export interface ResearchQuestion {
  n: string;
  title: string;
  question: string;
  note: string;
}

export const researchOverview: string[] = research.overview;
export const researchThemes: ResearchTheme[] = research.themes;
export const researchQuestions: ResearchQuestion[] = research.questions;
export const researchContexts: string[] = research.contexts;

export interface Collaboration {
  org: string;
  /** Plain text; `[Name](https://url)` becomes a link. */
  description: string;
}

export const collaborations = collabs as Collaboration[];

export interface ResearchProject {
  id: string;
  title: string;
  area: string;
  description: string;
  role?: string;
  methodology?: string;
  outcome: string;
  outcomeStatus: string;
  /** Route or external URL for "Read more". */
  href: string;
  image?: string;
  imageAlt?: string;
  /** Show on the homepage. */
  selected?: boolean;
}

export const researchProjects = projects as ResearchProject[];

export const selectedProjects = researchProjects.filter((p) => p.selected);
