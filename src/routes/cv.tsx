import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink, Maximize, Minimize } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  const viewerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  // Open the PDF fitted to the viewer width so the text is readable straight away.
  const viewerUrl = `${profile.cvUrl}#view=FitH`;

  useEffect(() => {
    const onChange = () => setIsFullscreen(document.fullscreenElement === viewerRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleFullscreen = () => {
    const el = viewerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else if (el.requestFullscreen) {
      el.requestFullscreen().catch(() => window.open(profile.cvUrl, "_blank", "noopener"));
    } else {
      // e.g. iPhone Safari: no element fullscreen, so use a new tab instead.
      window.open(profile.cvUrl, "_blank", "noopener");
    }
  };

  return (
    <>
      <PageHeader
        title="Curriculum Vitae"
        lede="The CV is the comprehensive record; this website is the research narrative."
      />
      <div className="mx-auto w-full max-w-384 px-2 py-6 sm:px-4 md:py-8">
        <div className="mb-3 flex flex-wrap items-center justify-end gap-2">
          <button type="button" onClick={toggleFullscreen} className="btn-outline">
            {isFullscreen ? (
              <Minimize className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Maximize className="h-4 w-4" aria-hidden="true" />
            )}
            {isFullscreen ? "Exit full screen" : "Full screen"}
          </button>
          <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <ExternalLink className="h-4 w-4" aria-hidden="true" /> Open in new tab
          </a>
          <a href={profile.cvUrl} download className="btn-solid">
            <Download className="h-4 w-4" aria-hidden="true" /> Download PDF
          </a>
        </div>

        <div
          ref={viewerRef}
          className={
            isFullscreen
              ? "flex h-screen w-screen flex-col bg-background"
              : "flex h-[calc(100vh-7rem)] min-h-150 flex-col overflow-hidden rounded-md border shadow-sm"
          }
        >
          {isFullscreen && (
            <div className="flex justify-end border-b bg-background p-2">
              <button type="button" onClick={toggleFullscreen} className="btn-outline">
                <Minimize className="h-4 w-4" aria-hidden="true" /> Exit full screen
              </button>
            </div>
          )}
          <object
            data={viewerUrl}
            type="application/pdf"
            className="w-full flex-1"
            aria-label="CV PDF"
          >
            <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center text-muted-foreground">
              <p>Your browser cannot show the PDF here.</p>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" /> Open the CV
              </a>
            </div>
          </object>
        </div>
      </div>
    </>
  );
}
