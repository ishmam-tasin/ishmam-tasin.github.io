import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/head";
import { PageHeader, Section } from "@/components/site/Section";
import { communityService, peerReviewing } from "@/content/experience";

export const Route = createFileRoute("/service")({
  head: () =>
    pageHead({
      title: "Academic Service",
      description: "Peer reviewing (ACM CHI, ACM COMPASS, IEEE BCCA) and research-community service of Md Ishmam Tasin.",
      path: "/service",
    }),
  component: ServicePage,
});

function ServicePage() {
  return (
    <>
      <PageHeader title="Academic Service" lede="Peer reviewing and research-community roles." />
      <div className="container-content">
        <Section id="reviewing" title="Peer Reviewing">
          <ul className="divide-y">
            {peerReviewing.map((r) => (
              <li key={r.venue} className="grid gap-1 py-4 md:grid-cols-[11rem_1fr] md:gap-6">
                <h3 className="font-sans text-base font-semibold">
                  {r.href ? (
                    <a href={r.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                      {r.venue}
                    </a>
                  ) : (
                    r.venue
                  )}
                </h3>
                <p className="text-[0.98rem] text-muted-foreground">{r.detail}</p>
              </li>
            ))}
          </ul>
        </Section>
        <Section id="community" title="Academic & Research Community">
          <ul className="divide-y">
            {communityService.map((c) => (
              <li key={c.role} className="py-4 text-[0.98rem]">
                <span className="font-semibold">{c.role}</span>
                <span className="text-muted-foreground">, </span>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="link-academic">
                  {c.org}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </>
  );
}
