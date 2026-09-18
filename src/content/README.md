# Editing the website content

All factual content lives in this folder; the visual components never contain names, titles, or dates.

| File | What it controls |
| --- | --- |
| `site.ts` | Name, intro paragraph, positions, email, photo, CV file, external links, navigation. Set a link to `""` to hide it. |
| `publications.ts` | Published / accepted / to-appear papers. `selected: true` shows a paper on the homepage. |
| `ongoing.ts` | Work under review and in preparation. Keep `status` exactly as in your CV. |
| `research.ts` | Overview paragraphs, themes, research questions, contexts, and selected projects. |
| `news.ts` | Updates timeline (newest first). Add a new object at the top. |
| `awards.ts` | Academic distinctions and competitions. |
| `experience.ts` | Research experience, teaching, peer reviewing, education. |

## Replacing images

- **Profile photo / CV**: replace `src/assets/profile.jpg.asset.json` and `src/assets/cv.pdf.asset.json`
  (or set `photo` / `cvUrl` in `site.ts` to any URL).
- **Paper or project image**: put the file in `src/assets/`, then in the data file:

  ```ts
  import authvrFig from "@/assets/authvr.png";
  // ...
  image: authvrFig, imageAlt: "System overview of AuthVR",
  ```

  Any item without `image` shows the neutral placeholder (`src/assets/placeholder-paper.jpg`).

Author lists are plain strings; the name in `site.ts` (`profile.name`) is bolded automatically.
