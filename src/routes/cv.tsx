import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { pageHead } from "@/components/site/head";
import { profile } from "@/content/site";

/** Old /cv links: send visitors straight to the CV PDF. */
export const Route = createFileRoute("/cv")({
  head: () =>
    pageHead({
      title: "Curriculum Vitae",
      description: "Curriculum vitae of Md Ishmam Tasin (PDF).",
      path: "/cv",
    }),
  component: CvRedirect,
});

function CvRedirect() {
  useEffect(() => {
    window.location.replace(profile.cvUrl);
  }, []);

  return (
    <div className="container-content py-16 text-muted-foreground">
      Opening the CV…{" "}
      <a href={profile.cvUrl} className="link-academic">
        Click here if it doesn't open.
      </a>
    </div>
  );
}
