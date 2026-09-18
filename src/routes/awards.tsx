import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/head";
import { PageHeader, Section } from "@/components/site/Section";
import { AwardList } from "@/components/site/AwardList";
import { academicDistinctions, competitions } from "@/content/awards";

export const Route = createFileRoute("/awards")({
  head: () =>
    pageHead({
      title: "Awards & Recognition",
      description:
        "Academic distinctions and competition results of Md Ishmam Tasin, including High Distinction at BRAC University and blockchain hackathon placements.",
      path: "/awards",
    }),
  component: AwardsPage,
});

function AwardsPage() {
  return (
    <>
      <PageHeader title="Awards & Recognition" lede="Academic distinctions and competition results." />
      <div className="container-content">
        <Section id="academic" title="Academic Distinctions">
          <AwardList items={academicDistinctions} />
        </Section>
        <Section id="competitions" title="Competitions & Hackathons">
          <AwardList items={competitions} />
        </Section>
      </div>
    </>
  );
}
