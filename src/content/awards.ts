/** Awards & recognition, grouped by category. */
export interface Award {
  title: string;
  year: string;
  org?: string;
  description?: string;
  href?: string;
}

export const academicDistinctions: Award[] = [
  {
    title: "Graduated with High Distinction",
    year: "2023",
    org: "BRAC University",
    description:
      "Awarded for academic excellence achieved over the duration of the entire undergraduate career.",
  },
  {
    title: "Dean's Recognition List",
    year: "2019–2023",
    org: "BRAC University",
    description: "Honourable mention for excellent performance across six undergraduate semesters.",
  },
  {
    title: "Merit Scholarship (Undergraduate)",
    year: "2019",
    org: "BRAC University",
    description: "Awarded each semester to undergraduate students demonstrating outstanding academic performance.",
  },
  {
    title: "National Merit Scholarship, Higher Secondary Certificate (HSC)",
    year: "2017",
    org: "Government of Bangladesh",
    description: "Merit-based scholarship for exceptional performance in the HSC examinations.",
  },
  {
    title: "Golden A+ in SSC and HSC",
    year: "2015, 2017",
    description: "Highest grade (A+) in every subject in both public examinations.",
  },
];

export const competitions: Award[] = [
  {
    title: "Runner Up — Affine Blockchain Hackathon",
    year: "2022",
    description: "Hosted by BdOSN and Affine in partnership with Wind and Anchorblock.",
    href: "https://www.linkedin.com/posts/fahimmaziz_affineblockchain-hackathon-in-dhaka-bangladesh-activity-6990275325557358592-b8-s?_l=en_US",
  },
  {
    title: "Champion — DataBird LaunchPad",
    year: "2021",
    description:
      "Organised with the ICT Division, LICT Bangladesh, Durbar, BASIS, and The Daily Star.",
    href: "https://www.thedailystar.net/tech-startup/news/databird-launchpad-2021-winners-announced-kori-and-remotely-crowned-champions-2192956",
  },
  {
    title: "Finalist — Bangladesh Blockchain Olympiad (BCOLBD)",
    year: "2021",
    description:
      "University students and recent graduates submitted blockchain solutions to real-world problems; held 25–27 February 2021.",
  },
];
