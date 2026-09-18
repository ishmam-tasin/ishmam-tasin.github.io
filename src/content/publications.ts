/**
 * Publications — accepted / published / to appear.
 *
 * Author names are plain strings; the site bolds `Md Ishmam Tasin`
 * automatically (see AuthorList component). Keep the CV's author order.
 *
 * `image`: import an image (e.g. `import fig from "@/assets/pubs/authvr.png"`)
 * and set `image: fig`. When omitted, a neutral placeholder is shown.
 *
 * Links: only keys with a value are rendered. Leave a key out (or "") to hide it.
 */

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

export const publications: Publication[] = [
  {
    id: "self-custody-chira-2026",
    title:
      "Self-Custody in an Unsupported Ecosystem: Usability and Security Challenges Among Novice and Experienced Crypto Wallet Users in Bangladesh",
    authors: [
      "Md Ishmam Tasin",
      "Md Sadek Ferdous",
      "S M Taiabul Haque",
      "Wolfgang Prinz",
      "Farida Chowdhury",
    ],
    year: 2026,
    venue:
      "International Conference on Computer-Human Interaction Research and Applications (CHIRA 2026)",
    venueShort: "CHIRA 2026",
    type: "Conference",
    status: "Accepted",
    area: "Usable Security · Decentralized Systems",
    links: {
      pdf: "https://drive.google.com/file/d/1IqcDaeE5USnfAGuM03NPyfx3tyuI59zw/view?usp=sharing",
    },
    selected: true,
  },
  {
    id: "username-dapps-2026",
    title:
      "Why Can't I Just Use a Username? Understanding Why Users Struggle with Messaging DApps",
    authors: [
      "Tithi Saha*",
      "Md Ishmam Tasin*",
      "Ahad Mahjabin Jannat",
      "Md Masum",
      "Farida Chowdhury",
    ],
    authorNote: "* denotes equal contribution",
    year: 2026,
    venue:
      "The 8th IEEE International Conference on Decentralized Applications and Infrastructures (IEEE DAPPS 2026)",
    venueShort: "IEEE DAPPS 2026",
    type: "Conference",
    status: "Accepted",
    area: "Usable Security · Decentralized Systems",
    links: {
      pdf: "https://drive.google.com/file/d/15LYDiIvEJwSuuTuLrIJoE-o_iX2hM32b/view?usp=sharing",
    },
    selected: true,
  },
  {
    id: "mfs-compass-2026",
    title:
      "From Agent Dependency to Financial Autonomy: Smartphone-Based Inclusive MFS Design for Low-Literate Population",
    authors: [
      "Yousuf Abdullah Harun",
      "Asiful Islam Chowdhury",
      "Nurshida Akter Nilima",
      "Hafsah Bintey Alim",
      "Ashfiqun Ahmed Miftah",
      "Md Ishmam Tasin",
      "S M Taiabul Haque",
      "Farida Chowdhury",
    ],
    year: 2026,
    venue: "ACM SIGCAS/SIGCHI Conference on Computing and Sustainable Societies (COMPASS 2026)",
    venueShort: "COMPASS 2026",
    type: "Conference",
    status: "To appear",
    area: "HCI4D · Inclusive Design",
    links: {
      pdf: "https://drive.google.com/file/d/12pK7hJpLQoC2KFauWlhLl9WdFaiyoyT4/view?usp=sharing",
    },
  },
  {
    id: "authvr-trustcom-2025",
    title:
      "AuthVR: Securing Authentication Against Shoulder Surfing and Keystroke Inference Attacks using Virtual Reality",
    authors: [
      "Md. Yeasin Ali",
      "Touhid Rahaman Udoy",
      "Md Ishmam Tasin",
      "Masum Alam Nahid",
      "Fairuz Rahaman Chowdhury",
      "Farida Chowdhury",
      "Md Sadek Ferdous",
    ],
    year: 2025,
    venue:
      "24th IEEE International Conference on Trust, Security and Privacy in Computing and Communications (TrustCom 2025)",
    venueShort: "IEEE TrustCom 2025",
    type: "Conference",
    status: "Published",
    area: "Usable Security · XR Authentication",
    links: {
      paper:
        "http://computer.org/csdl/proceedings-article/trustcom/2025/653200c087/2dMlk1X5Zle",
      pdf: "https://drive.google.com/file/d/1bg-05030gmat6YQFsWzCSeG1u-xkjO8U/view?usp=sharing",
    },
    selected: true,
  },
  {
    id: "ar-atm-ieee-access",
    title: "A Secure Augmented Reality (AR) Based Authentication Mechanism For ATM",
    authors: [
      "Touhid Islam Udoy",
      "Md Yeasin Ali",
      "Md Ishmam Tasin",
      "Masum Alam Nahid",
      "Fairuz Rahaman Chowdhury",
      "Hossain Shahria",
      "Farida Chowdhury",
      "S M Taiabul Haque",
      "Md Sadek Ferdous",
    ],
    // TODO: confirm publication year (CV lists the venue without a year).
    year: 2025,
    venue: "IEEE Access",
    venueShort: "IEEE Access",
    type: "Journal",
    status: "Published",
    area: "Usable Security · XR Authentication",
    links: {
      paper: "https://ieeexplore.ieee.org/document/11421308",
      pdf: "https://drive.google.com/file/d/1d1n6NqDR4aOruoobTGe3YML7J_830ovM/view?usp=sharing",
    },
  },
  {
    id: "cyber-maze-chira-2025",
    title:
      "Navigating the Cybersecurity Maze: Women's Practices, Awareness and Vulnerabilities in Bangladesh",
    authors: [
      "Maliha Tasnim",
      "Maisha Tasnim",
      "Samsad Laila",
      "Seham Al Haque",
      "Tanzuma Tabassum",
      "Md Ishmam Tasin",
      "S M Taiabul Haque",
      "Farida Chowdhury",
    ],
    year: 2025,
    venue:
      "9th International Conference on Computer-Human Interaction Research and Applications (CHIRA 2025)",
    venueShort: "CHIRA 2025",
    type: "Conference",
    status: "To appear",
    area: "Human-Centered Cybersecurity · Gender",
    links: {
      pdf: "https://drive.google.com/file/d/1DIKXRW198kSYkVKp1fCZ6QKk6eKOzkOZ/view?usp=sharing",
    },
    selected: true,
  },
  {
    id: "birth-declaration-compass-2024",
    title:
      "A Proposed Systematic Framework and Guideline of Birth Declaration in Rural Last-Mile Bangladesh: Aimed at Reducing Child Marriage",
    authors: [
      "Shabab Intishar Rahman",
      "Priom Deb",
      "Md Ishmam Tasin",
      "Md. Sadiqul Islam Sakif",
      "Jannatun Noor",
    ],
    year: 2024,
    venue:
      "Proceedings of the 7th ACM SIGCAS/SIGCHI Conference on Computing and Sustainable Societies (COMPASS 2024)",
    venueShort: "ACM COMPASS 2024",
    type: "Conference",
    status: "Published",
    area: "HCI4D · Socio-technical Systems",
    links: {
      doi: "https://dl.acm.org/doi/abs/10.1145/3674829.3675086",
      pdf: "https://drive.google.com/file/d/10VZ1a0PtUPHIcgGD8-Uxsb0M-xFmzjtd/view?usp=sharing",
    },
  },
];

export const selectedPublications = publications.filter((p) => p.selected);
