import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/components/site/head";
import { PageHeader, Section } from "@/components/site/Section";
import { PublicationCard } from "@/components/site/PublicationCard";
import { publications } from "@/content/publications";

export const Route = createFileRoute("/publications")({
  head: () =>
    pageHead({
      title: "Publications",
      description:
        "Peer-reviewed publications by Md Ishmam Tasin in usable security and privacy, HCI, and computing for the Global South (CHIRA, IEEE DAPPS, COMPASS, TrustCom, IEEE Access).",
      path: "/publications",
    }),
  component: PublicationsPage,
});

function PublicationsPage() {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

  return (
    <>
      <PageHeader
        title="Publications"
        lede={
          <>
            Published, accepted, and forthcoming peer-reviewed work, newest first. Status labels follow the venue's
            current decision. For work under review or in preparation, see{" "}
            <Link to="/ongoing" className="link-academic">
              Ongoing Work
            </Link>
            .
          </>
        }
      />
      <div className="container-content">
        <Section id="published" title="Publications" eyebrow="Published · Accepted · To appear">
          <div className="space-y-10">
            {years.map((year) => (
              <div key={year}>
                <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground">{year}</h3>
                <div className="space-y-4">
                  {publications
                    .filter((p) => p.year === year)
                    .map((p) => (
                      <PublicationCard key={p.id} pub={p} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="other" title="Other Research Work" intro={<p>Undergraduate thesis.</p>}>
          <p className="max-w-3xl text-[0.98rem]">
            <a
              href="https://dspace.bracu.ac.bd/xmlui/handle/10361/21985"
              target="_blank"
              rel="noopener noreferrer"
              className="link-academic font-medium"
            >
              Revolutionizing microfinance: a blockchain-driven decentralized finance (DeFi) model for collateral-free loans
            </a>
            <span className="text-muted-foreground"> — B.Sc. thesis, BRAC University, 2023. Advisor: Professor Md Sadek Ferdous.</span>
          </p>
        </Section>
      </div>
    </>
  );
}
