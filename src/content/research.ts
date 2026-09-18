/**
 * Research narrative: overview, themes, questions, contexts and selected projects.
 */

export const researchOverview = [
  "My research sits at the intersection of Human-Computer Interaction and Usable Security & Privacy. I study how people understand, trust, and interact with security- and privacy-sensitive technologies, and how the design of those systems shapes the decisions people make around them.",
  "Much of this work focuses on technologies that are complex, unfamiliar, or still emerging—self-custodial crypto wallets, decentralized applications, XR-based authentication, encryption tools, and, more recently, age-verification and large language model interfaces—studied through qualitative and quantitative user studies. A recurring concern is who these technologies are designed for: a substantial part of my work is situated in Bangladesh and the wider Global South, with attention to low-literate users, women, marginalized communities, and people with accessibility needs.",
];

export const researchThemes = [
  {
    title: "Usable Security & Privacy",
    text: "How security and privacy mechanisms are understood, misunderstood, and used in practice.",
  },
  {
    title: "Human-Computer Interaction",
    text: "Empirical, user-centred study and design of interactive systems.",
  },
  {
    title: "HCI4D / ICTD and the Global South",
    text: "Technology use under the social, economic, and infrastructural conditions of Bangladesh and similar contexts.",
  },
  {
    title: "Trust, Safety & Human Behavior",
    text: "How perceived risk, trust, and agency shape behaviour around security-sensitive systems.",
  },
  {
    title: "Socio-technical Systems",
    text: "Technology adoption and its entanglement with institutions, norms, and communities.",
  },
];

export const researchQuestions = [
  {
    n: "01",
    title: "Understanding security & privacy",
    question:
      "How do people understand, interpret, and respond to security and privacy mechanisms when interacting with complex or unfamiliar technologies?",
    note: "Studied with crypto-wallet users, messaging DApp users, and non-expert users of encryption tools.",
  },
  {
    n: "02",
    title: "Trust, safety & user agency",
    question:
      "How do system design, trust, perceived risk, and user agency shape people's decisions and behaviours around security-sensitive technologies?",
    note: "Including survivor-centred emergency tooling, cybercrime reporting, and safer e-commerce browsing.",
  },
  {
    n: "03",
    title: "Usable security for emerging technologies",
    question:
      "How can security and privacy mechanisms be designed so that non-expert users can understand and appropriately use them?",
    note: "Contexts include decentralized systems, authentication, immersive XR technologies, and—as an emerging interest—AI and LLM interfaces.",
  },
  {
    n: "04",
    title: "HCI4D and the Global South",
    question:
      "How do social, cultural, economic, and technological contexts shape people's interaction with security, privacy, and digital systems in the Global South?",
    note: "Grounded primarily in fieldwork and user studies in Bangladesh.",
  },
  {
    n: "05",
    title: "Inclusive & human-centred technology",
    question:
      "How can interactive systems better account for the needs of populations that are often underserved or overlooked in technology design?",
    note: "Low-literate users, women, marginalized and rural communities, people with accessibility needs, and non-technical users.",
  },
];

export const researchContexts = [
  "Decentralized systems and blockchain",
  "Crypto wallets and self-custody",
  "Authentication",
  "AR/VR and immersive technologies",
  "Digital financial services",
  "Cybersecurity",
  "Privacy-sensitive technologies",
  "Emerging technologies",
  "Technology use in the Global South",
];

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

export const researchProjects: ResearchProject[] = [
  {
    id: "self-custody",
    title: "Self-custody and crypto-wallet usability in an unsupported ecosystem",
    area: "Usable Security · Decentralized Systems · Bangladesh",
    description:
      "Examines the usability and security challenges that novice and experienced crypto-wallet users face in Bangladesh, where self-custodial tools are used without formal institutional or regulatory support, and what this reveals about the assumptions built into wallet design.",
    role: "Lead author.",
    methodology: "Qualitative and quantitative user studies (interviews, surveys).",
    outcome: "Accepted at CHIRA 2026.",
    outcomeStatus: "Accepted",
    href: "/publications",
    selected: true,
  },
  {
    id: "xr-authentication",
    title: "XR-based authentication against shoulder surfing and keystroke inference",
    area: "Usable Security · Immersive Technologies",
    description:
      "Design and evaluation of virtual- and augmented-reality authentication mechanisms (AuthVR; an AR-based ATM authentication scheme) that aim to resist observation attacks while remaining usable for ordinary users.",
    role: "Co-author; contributed to system development and evaluation.",
    methodology: "Formal analysis and a user study (n = 30).",
    outcome: "Published at IEEE TrustCom 2025 and in IEEE Access.",
    outcomeStatus: "Published",
    href: "/publications",
    selected: true,
  },
  {
    id: "messaging-dapps",
    title: "Why users struggle with decentralized messaging applications",
    area: "Usable Security · Decentralized Systems",
    description:
      "Investigates the friction non-expert users encounter with messaging DApps—identity, addressing, and key handling—and why familiar mental models from centralized platforms break down.",
    role: "Co-first author (equal contribution).",
    outcome: "Accepted at IEEE DAPPS 2026.",
    outcomeStatus: "Accepted",
    href: "/publications",
    selected: true,
  },
  {
    id: "women-cybersecurity",
    title: "Women's cybersecurity practices, awareness, and vulnerabilities in Bangladesh",
    area: "Human-Centered Cybersecurity · Gender · HCI4D",
    description:
      "Studies how women in Bangladesh navigate online safety—their everyday practices, awareness, and the vulnerabilities they encounter—to inform more context-sensitive security support.",
    role: "Co-author.",
    outcome: "To appear at CHIRA 2025.",
    outcomeStatus: "To appear",
    href: "/publications",
    selected: true,
  },
  {
    id: "inclusive-mfs",
    title: "Inclusive mobile financial services for low-literate users",
    area: "HCI4D · Digital Financial Services",
    description:
      "Explores how smartphone-based mobile financial services can be designed so that low-literate users can move from dependence on agents toward independent, autonomous use.",
    role: "Co-author.",
    outcome: "To appear at COMPASS 2026.",
    outcomeStatus: "To appear",
    href: "/publications",
  },
  {
    id: "age-verification",
    title: "Non-expert behaviour and attitudes toward age-verification technologies",
    area: "Usable Privacy · Emerging Technologies",
    description:
      "Ongoing work at the HIVE Lab, Penn State, examining how non-expert users behave toward and reason about different age-verification methods, and how this shapes their perception of privacy and security.",
    role: "Leading the study as Research Intern.",
    outcome: "Ongoing (HIVE Lab, Pennsylvania State University).",
    outcomeStatus: "Ongoing",
    href: "/ongoing",
  },
];

export const selectedProjects = researchProjects.filter((p) => p.selected);
