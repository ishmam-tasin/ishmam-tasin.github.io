import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Mail } from "lucide-react";
import { pageHead } from "@/components/site/head";
import { Section } from "@/components/site/Section";
import { PublicationCard } from "@/components/site/PublicationCard";
import { ResearchCard } from "@/components/site/ResearchCard";
import { Timeline } from "@/components/site/Timeline";
import { ExperienceList } from "@/components/site/ExperienceList";
import { links, profile } from "@/content/site";
import { researchQuestions, researchThemes, selectedProjects } from "@/content/research";
import { selectedPublications } from "@/content/publications";
import { news } from "@/content/news";
import { researchExperience } from "@/content/experience";

export const Route = createFileRoute("/")({
  head: () => pageHead({ path: "/" }),
  component: Index,
});

function Index() {
  const academicLinks = [
    links.scholar && { label: "Google Scholar", href: links.scholar },
    links.linkedin && { label: "LinkedIn", href: links.linkedin },
    links.github && { label: "GitHub", href: links.github },
    links.website && { label: "BRAC University profile", href: links.website },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <div className="container-content">
      {/* Introduction */}
      <section className="fade-in-up grid gap-8 py-12 md:grid-cols-[260px_1fr] md:gap-12 md:py-20" aria-labelledby="intro-title">
        <div>
          <img
            src={profile.photo}
            alt={profile.photoAlt}
            width={520}
            height={520}
            className="aspect-square w-full max-w-[260px] rounded-md border object-cover"
          />
        </div>
        <div>
          <h1 id="intro-title" className="text-4xl md:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">{profile.intro}</p>

          <ul className="mt-6 space-y-1 text-[0.98rem]">
            {profile.positions.map((p) => (
              <li key={p.role}>
                <span className="font-semibold">{p.role}</span>
                <span className="text-muted-foreground">, </span>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="link-academic">
                  {p.org}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            <a href={profile.cvUrl} download className="btn-solid">
              <Download className="h-4 w-4" aria-hidden="true" /> Download CV
            </a>
            <a href={`mailto:${profile.email}`} className="btn-outline">
              <Mail className="h-4 w-4" aria-hidden="true" /> Email
            </a>
            {academicLinks.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="btn-outline">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <Section
        id="research"
        title="Research"
        moreTo="/research"
        moreLabel="Research overview"
        intro={
          <p>
            My work is organised around a single overarching interest—human-centred security, privacy, trust,
            and technology interaction—approached through several interconnected themes.
          </p>
        }
      >
        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-5">
          {researchThemes.map((t) => (
            <li key={t.title} className="border-l-2 border-accent/40 pl-4">
              <h3 className="font-sans text-base font-semibold">{t.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Questions */}
      <Section id="questions" title="Questions I Explore">
        <ol className="grid gap-6 md:grid-cols-2">
          {researchQuestions.map((q) => (
            <li key={q.n} className="card-quiet p-5">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-sm text-accent">{q.n}</span>
                <h3 className="font-sans text-base font-semibold">{q.title}</h3>
              </div>
              <p className="mt-2 leading-relaxed">{q.question}</p>
              <p className="mt-2 text-sm text-muted-foreground">{q.note}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Selected research */}
      <Section id="projects" title="Selected Research" moreTo="/research" moreLabel="All research">
        <div className="grid gap-5 md:grid-cols-2">
          {selectedProjects.map((p) => (
            <ResearchCard key={p.id} project={p} />
          ))}
        </div>
      </Section>

      {/* Selected publications */}
      <Section id="publications" title="Selected Publications" moreTo="/publications" moreLabel="View all publications">
        <div className="space-y-4">
          {selectedPublications.map((p) => (
            <PublicationCard key={p.id} pub={p} />
          ))}
        </div>
      </Section>

      {/* Updates */}
      <Section id="updates" title="Updates">
        <Timeline items={news.slice(0, 7)} />
      </Section>

      {/* Experience */}
      <Section id="experience" title="Research Experience" moreTo="/research" moreLabel="Full experience">
        <ExperienceList items={researchExperience} compact />
        <p className="mt-4 text-sm text-muted-foreground">
          See also <Link to="/service" className="link-academic">academic service</Link> and{" "}
          <Link to="/awards" className="link-academic">awards &amp; recognition</Link>.
        </p>
      </Section>
    </div>
  );
}
