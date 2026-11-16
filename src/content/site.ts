/**
 * Site-wide profile information and links.
 * Edit this file to update your name, tagline, positions, and contact links.
 * Leave a URL as an empty string ("") to hide that link everywhere.
 */
import React from "react";
import profileAsset from "@/assets/profile.jpg.asset.json";
import cvAsset from "@/assets/cv.pdf.asset.json";

export const profile = {
  name: "Md Ishmam Tasin",
  shortTitle: "Researcher in HCI, Usable Security & Privacy",
  intro: React.createElement(
    React.Fragment,
    null,
    "I am a Computer Science researcher working at the intersection of Human-Computer Interaction, Usable Security & Privacy, and socio-technical systems. Currently, I am a Remote Research Intern at the HIVE Lab, Pennsylvania State University working with ",
    React.createElement(
      "a",
      {
        href: "https://ist.psu.edu/directory/tfs5747",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "link-academic font-medium",
      },
      "Dr. Tanusree Sharma",
    ),
    ", and a Graduate Research Assistant at BRAC University under the supervision of ",
    React.createElement(
      "a",
      {
        href: "https://cse.bracu.ac.bd/faculty_profile/211/dr_farida_chowdhury",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "link-academic font-medium",
      },
      "Dr. Farida Chowdhury",
    ),
    ". My research examines how people understand, interact with, and respond to security- and privacy-sensitive technologies particularly when those technologies are complex, unfamiliar, or emerging, and when they are used in underrepresented contexts such as Bangladesh and the wider Global South.",
  ),
  positions: [
    {
      role: "Research Intern",
      org: "HIVE Lab, Pennsylvania State University",
      url: "https://ist.psu.edu/",
    },
    {
      role: "Graduate Research Assistant",
      org: "Department of Computer Science & Engineering, BRAC University",
      url: "https://cse.sds.bracu.ac.bd/faculty_profile/299/md_ishmam_tasin#Biography",
    },
  ],
  location: "Dhaka, Bangladesh",
  email: "ishmam.tasin@bracu.ac.bd",
  /** Replace by swapping src/assets/profile.jpg.asset.json (or point to any image URL). */
  photo: profileAsset.url,
  photoAlt: "Portrait of Md Ishmam Tasin",
  /** Replace by swapping src/assets/cv.pdf.asset.json with a newer CV. */
  cvUrl: cvAsset.url,
};

export const links = {
  scholar: "https://scholar.google.com/citations?user=Xwrr0W4AAAAJ&hl=en",
  linkedin: "https://linkedin.com/in/ishmam-tasin-530661172",
  github: "",
  website: "https://cse.sds.bracu.ac.bd/faculty_profile/299/md_ishmam_tasin#Biography",
};

export const seo = {
  title: "Md Ishmam Tasin | Computer Science Researcher",
  description:
    "Md Ishmam Tasin is a Computer Science researcher working at the intersection of Human-Computer Interaction, Usable Security & Privacy, and socio-technical systems.",
};

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Research", to: "/research" },
  { label: "Publications", to: "/publications" },
  { label: "Ongoing Work", to: "/ongoing" },
  { label: "Awards & Recognition", to: "/awards" },
  { label: "Academic Service", to: "/service" },
] as const;

/** External nav links (open in a new tab). The CV opens the PDF directly. */
export const navExternal = [{ label: "CV", href: cvAsset.url }] as const;
