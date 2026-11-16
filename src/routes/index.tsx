import { createFileRoute, Link, type LinkProps } from "@tanstack/react-router";
import { Download, Mail, Check, Copy } from "lucide-react";
import { useState } from "react";
import { pageHead } from "@/components/site/head";
import { Section } from "@/components/site/Section";
import { PublicationCard } from "@/components/site/PublicationCard";
import { ExperienceList } from "@/components/site/ExperienceList";
import { RichText } from "@/components/site/RichText";
import { links, profile } from "@/content/site";
import { researchQuestions, researchThemes, collaborations } from "@/content/research";
import { selectedPublications } from "@/content/publications";
import { news } from "@/content/news";
import { researchExperience } from "@/content/experience";

export const Route = createFileRoute("/")({
  head: () => pageHead({ path: "/" }),
  component: Index,
});

function Index() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const academicLinks = [
    links.scholar && { label: "Google Scholar", href: links.scholar },
    links.linkedin && { label: "LinkedIn", href: links.linkedin },
    links.github && { label: "GitHub", href: links.github },
    links.website && { label: "BRAC University profile", href: links.website },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <div className="container-content">
      {/* Introduction */}
      <section
        className="fade-in-up grid gap-8 py-12 md:grid-cols-[260px_1fr] md:gap-12 md:py-20"
        aria-labelledby="intro-title"
      >
        <div className="flex flex-col gap-5">
          <img
            src={profile.photo}
            alt={profile.photoAlt}
            width={520}
            height={520}
            className="aspect-square w-full max-w-65 rounded-md border object-cover object-top"
          />
          <div className="flex flex-col gap-3 max-w-65">
            <div className="inline-flex items-center justify-between gap-2 border border-border bg-card px-3 py-2 rounded text-[0.85rem] font-medium w-full shadow-sm">
              <div className="flex items-center gap-2 overflow-hidden text-muted-foreground">
                <Mail className="shrink-0 size-4" />
                <span className="truncate text-foreground">{profile.email}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="shrink-0 p-1.5 hover:bg-muted rounded-md transition-colors text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                title="Copy email address"
              >
                {copied ? (
                  <Check className="size-3.5 text-accent" />
                ) : (
                  <Copy className="size-3.5" />
                )}
              </button>
            </div>
            {academicLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border bg-card px-3 py-2.5 rounded text-sm font-medium hover:border-accent hover:text-accent transition-colors w-full shadow-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded text-sm font-medium hover:opacity-90 transition-opacity w-full shadow-sm mt-1"
            >
              <Download className="size-4" aria-hidden="true" /> Download CV
            </a>
          </div>
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
            My work is organised around a single overarching interest in human-centred security,
            privacy, trust, and technology interaction approached through several interconnected
            themes.
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

      {/* Research Collaborations */}
      <Section id="collaborations" title="Research Collaborations">
        <div className="grid gap-6 md:grid-cols-3">
          {collaborations.map((c) => (
            <div
              key={c.org}
              className="border border-border p-6 rounded-xl bg-card shadow-sm hover:-translate-y-px transition-transform"
            >
              <h3 className="font-serif font-semibold text-lg">{c.org}</h3>
              <p className="text-[0.95rem] text-muted-foreground mt-3 leading-relaxed">
                <RichText text={c.description} />
              </p>
            </div>
          ))}
        </div>
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

      {/* Selected publications */}
      <Section
        id="publications"
        title="Selected Publications"
        moreTo="/publications"
        moreLabel="View all publications"
      >
        <div className="space-y-4">
          {selectedPublications.map((p) => (
            <PublicationCard key={p.id} pub={p} />
          ))}
        </div>
      </Section>

      {/* Recent News */}
      <Section id="news" title="Recent News">
        <div className="bg-[#F6F5F1] dark:bg-muted/30 border border-[#e8e6df] dark:border-border rounded-xl p-5 md:p-8 shadow-sm max-w-4xl">
          <ul className="space-y-4 max-h-70 overflow-y-auto pr-4 custom-scrollbar text-[1rem]">
            {news.map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-foreground shrink-0 mt-0.5 text-lg">•</span>
                <p>
                  <strong className="text-[#b77b44] dark:text-[#d49b6a] font-medium">
                    [{item.date}]
                  </strong>{" "}
                  {item.text}
                  {item.to && (
                    <Link
                      to={item.to as NonNullable<LinkProps["to"]>}
                      className="link-academic text-sm whitespace-nowrap ml-1"
                    >
                      Read more
                    </Link>
                  )}
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-academic text-sm whitespace-nowrap ml-1"
                    >
                      Link
                    </a>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Experience */}
      <Section
        id="experience"
        title="Research Experience"
        moreTo="/research"
        moreLabel="Full experience"
      >
        <ExperienceList items={researchExperience} compact />
        <p className="mt-4 text-sm text-muted-foreground">
          See also{" "}
          <Link to="/service" className="link-academic">
            academic service
          </Link>{" "}
          and{" "}
          <Link to="/awards" className="link-academic">
            awards &amp; recognition
          </Link>
          .
        </p>
      </Section>
    </div>
  );
}
