import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/head";
import { PageHeader, Section } from "@/components/site/Section";
import { ResearchCard } from "@/components/site/ResearchCard";
import { ExperienceList } from "@/components/site/ExperienceList";
import { OngoingCard } from "@/components/site/OngoingCard";
import { underReview } from "@/content/ongoing";
import {
  researchContexts,
  researchOverview,
  researchProjects,
  researchQuestions,
  researchThemes,
} from "@/content/research";
import { researchExperience, teaching } from "@/content/experience";

export const Route = createFileRoute("/research")({
  head: () =>
    pageHead({
      title: "Research",
      description:
        "Research overview, themes, selected projects, and experience of Md Ishmam Tasin — human-centred security and privacy, HCI, and the Global South.",
      path: "/research",
    }),
  component: ResearchPage,
});

function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Research"
        lede="Research overview, themes, selected projects, experience, and teaching."
      />
      <div className="container-content">
        <Section id="overview" title="Research Overview">
          <div className="max-w-3xl space-y-4 leading-relaxed">
            {researchOverview.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="themes" title="Research Themes">
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {researchThemes.map((t) => (
              <li key={t.title} className="border-l-2 border-accent/40 pl-4">
                <h3 className="font-sans text-base font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
              </li>
            ))}
          </ul>
          <h3 className="mt-10 font-sans text-base font-semibold">Current research directions</h3>
          <ol className="mt-3 divide-y">
            {researchQuestions.map((q) => (
              <li key={q.n} className="grid gap-1 py-4 md:grid-cols-[3rem_1fr]">
                <span className="font-serif text-sm text-accent">{q.n}</span>
                <div>
                  <p className="font-medium">{q.question}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{q.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="contexts"
          title="Research Contexts"
          intro={
            <p>
              I investigate these questions across a range of technological and social contexts,
              including:
            </p>
          }
        >
          <ul className="flex flex-wrap gap-2">
            {researchContexts.map((c) => (
              <li key={c} className="tag text-sm">
                {c}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="selected" title="Selected Research">
          <div className="space-y-4">
            {researchProjects.map((p) => (
              <ResearchCard key={p.id} project={p} detailed />
            ))}
          </div>
        </Section>

        {underReview.length > 0 && (
          <Section
            id="under-review"
            title="Under Review"
            moreTo="/ongoing"
            moreLabel="All ongoing work"
          >
            <div className="space-y-4">
              {underReview.map((o) => (
                <OngoingCard key={o.id} item={o} />
              ))}
            </div>
          </Section>
        )}

        <Section id="experience" title="Research Experience">
          <ExperienceList items={researchExperience} />
        </Section>

        <Section id="teaching" title="Teaching & Mentoring">
          <ul className="max-w-3xl list-disc space-y-2 pl-5 text-[0.98rem]">
            {teaching.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Section>
      </div>
    </>
  );
}
