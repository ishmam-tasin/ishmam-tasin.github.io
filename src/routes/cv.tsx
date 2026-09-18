import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { pageHead } from "@/components/site/head";
import { PageHeader } from "@/components/site/Section";
import { profile } from "@/content/site";

export const Route = createFileRoute("/cv")({
  head: () =>
    pageHead({
      title: "Curriculum Vitae",
      description: "Download or view the curriculum vitae of Md Ishmam Tasin (PDF).",
      path: "/cv",
    }),
  component: CvPage,
});

function CvPage() {
  return (
    <>
      <PageHeader
        title="Curriculum Vitae"
        lede={
          <span className="flex flex-wrap items-center gap-3">
            <span>The CV is the comprehensive record; this website is the research narrative.</span>
            <a href={profile.cvUrl} download className="btn-solid">
              <Download className="h-4 w-4" aria-hidden="true" /> Download PDF
            </a>
          </span>
        }
      />
      <div className="container-content py-10">
        <object data={profile.cvUrl} type="application/pdf" className="h-[80vh] w-full rounded-md border" aria-label="CV PDF">
          <p className="p-6 text-muted-foreground">
            Your browser cannot display the PDF inline.{" "}
            <a href={profile.cvUrl} className="link-academic">
              Open the CV
            </a>
            .
          </p>
        </object>
      </div>
    </>
  );
}
