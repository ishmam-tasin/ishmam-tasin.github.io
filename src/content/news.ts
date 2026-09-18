/**
 * Updates / news timeline. Newest first.
 * `date` is free text (e.g. "May 2026" or just "2026") — use only what you can verify.
 * `to` (internal route) or `href` (external URL) are optional.
 */
export interface NewsItem {
  date: string;
  text: string;
  to?: string;
  href?: string;
}

export const news: NewsItem[] = [
  {
    date: "May 2026",
    text: "Joined the Human Signal in Intelligence, Verification, and Empowerment (HIVE) Lab at Pennsylvania State University as a Research Intern, leading a study on age-verification technologies.",
  },
  {
    date: "2026",
    text: "Paper on self-custodial crypto-wallet usability in Bangladesh accepted at CHIRA 2026.",
    to: "/publications",
  },
  {
    date: "2026",
    text: "“Why Can't I Just Use a Username?” accepted at IEEE DAPPS 2026 (co-first author).",
    to: "/publications",
  },
  {
    date: "2026",
    text: "Paper on inclusive mobile financial services for low-literate users to appear at ACM COMPASS 2026.",
    to: "/publications",
  },
  {
    date: "2026",
    text: "Serving as a peer reviewer for ACM CHI 2027; reviewed papers for ACM COMPASS 2026 and IEEE BCCA 2026.",
    to: "/service",
  },
  {
    date: "2025",
    text: "AuthVR published at IEEE TrustCom 2025; AR-based ATM authentication paper published in IEEE Access.",
    to: "/publications",
  },
  {
    date: "2025",
    text: "Paper on women's cybersecurity practices in Bangladesh to appear at CHIRA 2025.",
    to: "/publications",
  },
  {
    date: "2024",
    text: "Paper on birth declaration in rural last-mile Bangladesh published at ACM COMPASS 2024.",
    href: "https://dl.acm.org/doi/abs/10.1145/3674829.3675086",
  },
  {
    date: "Oct 2023",
    text: "Started as a Graduate Research Assistant, Department of CSE, BRAC University, supervised by Prof. Farida Chowdhury.",
  },
  {
    date: "Sept 2023",
    text: "Graduated with High Distinction, B.Sc. in Computer Science, BRAC University.",
  },
];
