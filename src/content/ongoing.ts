/**
 * Ongoing research / works in progress (from the CV's "Under Review / Ongoing Work").
 * Status strings are kept exactly as the CV states them — do not "upgrade" them.
 */

export type OngoingStatus =
  | "Under review"
  | "Under review (2nd round)"
  | "In conference"
  | "Ongoing work"
  | "To be submitted"
  | "Planned for submission";

export interface OngoingProject {
  id: string;
  title: string;
  /** Use ["Anonymous"] where the CV lists the authors as anonymous. */
  authors: string[];
  authorNote?: string;
  status: OngoingStatus;
  /** Venue as it appears in the CV (target or submitted venue). */
  venue: string;
  venueUrl?: string;
  area: string;
  description?: string;
  pdf?: string;
  image?: string;
  imageAlt?: string;
}

export const ongoing: OngoingProject[] = [
  {
    id: "sos",
    title:
      "“Not Every SOS Means Call the Police”: Survivor Agency and Trauma-Informed Design Mandate",
    authors: [
      "Atika Hossain Ainun*",
      "Md Ishmam Tasin*",
      "Rifah Tasnim Mahin",
      "Lamiya Islam",
      "Jawaril Munshad Abedin",
      "S M Taiabul Haque",
      "Farida Chowdhury",
    ],
    authorNote: "* denotes equal contribution",
    status: "Under review (2nd round)",
    venue: "ACM CHI Conference on Human Factors in Computing Systems (CHI 2027)",
    venueUrl: "https://chi2027.acm.org/",
    area: "Trust, Safety & User Agency",
    pdf: "https://drive.google.com/file/d/1huZeeyIkOGhQ-vVvnBtTlwFIPh6M23zq/view?usp=sharing",
  },
  {
    id: "trustchain",
    title:
      "TrustChain: A Decentralized Protocol for Inclusive Microfinance Using Trust Circles and Social Collateral",
    authors: [
      "Md Ishmam Tasin",
      "Md. Rabib Hossain",
      "Nahin Chowdhury",
      "S.M.Azwad-Ul-Alam",
      "Md Sadek Ferdous",
    ],
    status: "Ongoing work",
    venue: "To be submitted to Advances in Financial Technologies (AFT 2026)",
    venueUrl: "https://aft.ifca.ai/aft26/index.html",
    area: "Decentralized Systems · Financial Inclusion",
    pdf: "https://drive.google.com/file/d/1HDBz3177qPlPlmhnd3xgJymPSpq8vUIZ/view?usp=sharing",
  },
  {
    id: "johnny",
    title: "“Why Johnny Still Doesn't Use Encryption in Bangladesh”: A Usability Perspective",
    authors: [
      "Mashia Hossain Mim",
      "Fahad Bin Mahbub",
      "Md Ishmam Tasin",
      "Md Sadek Ferdous",
      "Md Forhad Rabbi",
      "Farida Chowdhury",
    ],
    status: "Under review",
    venue: "The 21st ACM ASIA Conference on Computer and Communications Security (ACM ASIACCS 2026)",
    venueUrl: "https://asiaccs2026.cse.iitkgp.ac.in/",
    area: "Usable Security · Encryption",
    pdf: "https://drive.google.com/file/d/1A3Ip-BbKK2u3kZn9mBsq-AeCgHSpvzXj/view?usp=sharing",
  },
  {
    id: "exiled-prince",
    title:
      "The Exiled Prince: An Octalysis-Guided Visual Novel Game for Promoting Cybersecurity Awareness among Non-Technical University Students",
    authors: [
      "MD Atiq Mahbub",
      "Mirza Md. Shafi Uddin",
      "Nouruzzaman Niloy",
      "Md Ishmam Tasin",
      "Md. Tawsif Shahriar",
      "Md Sadek Ferdous",
      "Jannatun Noor",
      "Farida Chowdhury",
    ],
    status: "Under review (2nd round)",
    venue: "11th IEEE European Symposium on Security and Privacy (Euro S&P 2026)",
    venueUrl: "https://eurosp2026.ieee-security.org",
    area: "Security Awareness · Gamification",
    pdf: "https://drive.google.com/file/d/1R6-LlavtxynLzE0PumkqY6DQzJtAUDYD/view?usp=sharing",
  },
  {
    id: "rationality",
    title:
      "Designing for Rationality: Behavioral Economics Design Paradigm for Safer E-commerce Browsing",
    authors: [
      "Md. Samsul Arefin",
      "Jannatul Ferdous Nawrin",
      "Irfanul Hoque",
      "Istiak Islam",
      "Mohammad Jawadul Tashick",
      "Md Ishmam Tasin",
      "Md Sadek Ferdous",
      "S M Taiabul Haque",
      "Farida Chowdhury",
    ],
    status: "Under review",
    venue: "ACM Designing Interactive Systems (DIS 2026)",
    venueUrl: "https://dis.acm.org/2026/",
    area: "Trust, Safety & Human Behavior",
    pdf: "https://drive.google.com/file/d/10GdLnqfUC3sh6REzPIWhgU0FEXQyQFAL/view?usp=sharing",
  },
  {
    id: "cybercrime-reporting",
    title:
      "Towards Usable Cybercrime Reporting Systems Through the Usability Principles: A Study in the Context of Bangladesh",
    authors: [
      "Taskia Raushan Ferdousi",
      "Omar Shahariar",
      "Tasfia Shobnom Anika",
      "Md. Ibna Sohayab",
      "Nowshin Nusrat Neha",
      "Md Ishmam Tasin",
      "Jannatun Noor Mukta",
      "Farida Chowdhury",
    ],
    status: "In conference",
    venue: "Conference on Computing and Sustainable Societies (COMPASS 2026)",
    area: "Usable Security · HCI4D",
    pdf: "https://drive.google.com/file/d/1Z9IHlZn-ZeDJHUFBIbA8dPOCI4tcFBjT/view?usp=sharing",
  },
  {
    id: "p2p-trust",
    title:
      "Trust, Recognition, and Agency in Tech-Mediated Peer-to-Peer Communication within the Global South",
    authors: [
      "Md Ishmam Tasin",
      "Mehedi Hassan Alif",
      "Sherajum Mysha",
      "Md. Mehedi Hasan Shishir",
      "Md. Sabbir Ahmed",
      "Farida Chowdhury",
    ],
    status: "To be submitted",
    venue: "ACM CHI Conference on Human Factors in Computing Systems (CHI 2027)",
    venueUrl: "https://chi2027.acm.org/",
    area: "Trust & Agency · Global South",
    // pdf: "TODO — add link when available",
  },
  {
    id: "llm-trust",
    title:
      "Usability, Privacy, and Trust in Large Language Models: Perspectives from Non-Technical Professionals in Academia, Banking, and Healthcare",
    authors: [
      "Md Ashraful Hoque",
      "Ahsanul Fahim Ahmed",
      "Fahim Ahmad",
      "Nuzhat Zahedi Promity",
      "Md Ishmam Tasin",
      "Md. Sabbir Ahmed",
      "Farida Chowdhury",
    ],
    status: "To be submitted",
    venue: "ACM CHI Conference on Human Factors in Computing Systems (CHI 2027)",
    venueUrl: "https://chi2027.acm.org/",
    area: "Usable Privacy · Emerging Technologies",
    // pdf: "TODO — add link when available",
  },
  {
    id: "satire",
    title:
      "“When Satire Becomes Generative”: Understanding Satirical Mediation in the Age of AI in the Global South",
    authors: ["Anonymous"],
    status: "Planned for submission",
    venue: "ACM CHI Conference on Human Factors in Computing Systems (CHI 2027)",
    venueUrl: "https://chi2027.acm.org/",
    area: "Socio-technical Systems · Global South",
    description: "Ongoing work.",
  },
  {
    id: "beyond-the-bait",
    title:
      "“Beyond the Bait”: Gamified Interventions for Phishing and SMiShing Awareness in Bangladesh's Evolving Cyber Ecosystem",
    authors: ["Anonymous"],
    status: "Planned for submission",
    venue: "ACM CHI Conference on Human Factors in Computing Systems (CHI 2027)",
    venueUrl: "https://chi2027.acm.org/",
    area: "Security Awareness · Gamification",
    description: "Ongoing work.",
  },
];
