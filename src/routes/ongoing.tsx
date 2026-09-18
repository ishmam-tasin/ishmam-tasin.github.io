import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/head";
import { PageHeader, Section } from "@/components/site/Section";
import { OngoingCard } from "@/components/site/OngoingCard";
import { ongoing } from "@/content/ongoing";

export const Route = createFileRoute("/ongoing")({
  head: () =>
    pageHead({
      title: "Ongoing Work",
      description:
        "Works in progress and papers under review by Md Ishmam Tasin — survivor agency, encryption usability, cybersecurity awareness, trust in LLMs, and inclusive microfinance.",
      path: "/ongoing",
    }),
  component: OngoingPage,
});

function OngoingPage() {
  const underReview = ongoing.filter((o) => o.status.startsWith("Under review") || o.status === "In conference");
  const inPreparation = ongoing.filter((o) => !underReview.includes(o));

  return (
    <>
      <PageHeader
        title="Ongoing Work"
        lede="Manuscripts currently under review and projects in preparation. Status reflects the current stage of each project and is updated as decisions arrive."
      />
      <div className="container-content">
        <Section id="under-review" title="Under Review">
          <div className="space-y-4">
            {underReview.map((o) => (
              <OngoingCard key={o.id} item={o} />
            ))}
          </div>
        </Section>
        <Section id="in-preparation" title="In Preparation">
          <div className="space-y-4">
            {inPreparation.map((o) => (
              <OngoingCard key={o.id} item={o} />
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
