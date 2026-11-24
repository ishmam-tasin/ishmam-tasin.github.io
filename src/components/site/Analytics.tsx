/**
 * Visitor analytics (GoatCounter) — counts page views, countries and referrers,
 * plus one "org: …" event per visit naming the visitor's network (e.g. a university).
 *
 * The site code lives in `content/data/analytics.json` and is set from the admin
 * panel's Visitors page. Empty code = analytics off. Never counts on localhost or
 * in a browser where the admin turned on "Don't count my visits" (localStorage skipgc).
 */
import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import config from "@/content/data/analytics.json";

interface GoatCounterVars {
  path?: string;
  title?: string;
  referrer?: string;
  event?: boolean;
}
declare global {
  interface Window {
    goatcounter?: { count?: (vars?: GoatCounterVars) => void; no_onload?: boolean };
  }
}

const code = String(config.goatcounter || "")
  .trim()
  .toLowerCase();
const ORG_SESSION_KEY = "gc-org-sent";

function isDisabled(): boolean {
  if (!code || typeof window === "undefined") return true;
  if (/^(localhost|127\.|0\.0\.0\.0|\[::1\])/.test(window.location.hostname)) return true;
  try {
    return window.localStorage.getItem("skipgc") === "t";
  } catch {
    return false;
  }
}

let loader: Promise<void> | null = null;
function loadGoatCounter(): Promise<void> {
  if (loader) return loader;
  loader = new Promise((resolve, reject) => {
    window.goatcounter = { ...window.goatcounter, no_onload: true };
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://gc.zgo.at/count.js";
    s.dataset["goatcounter"] = `https://${code}.goatcounter.com/count`;
    s.dataset["goatcounterSettings"] = JSON.stringify({ no_onload: true });
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("GoatCounter blocked or unavailable"));
    document.head.appendChild(s);
  });
  return loader;
}

function count(vars: GoatCounterVars) {
  loadGoatCounter()
    .then(() => window.goatcounter?.count?.(vars))
    .catch(() => {});
}

interface OrgInfo {
  org: string;
  country: string;
  place: string;
  host: string;
}

async function lookupOrg(): Promise<OrgInfo | null> {
  // ipinfo.io first (larger free quota), ipwho.is as a fallback.
  try {
    const r = await fetch("https://ipinfo.io/json");
    if (r.ok) {
      const j = (await r.json()) as Record<string, string | undefined>;
      const org = String(j["org"] || "").replace(/^AS\d+\s+/, "");
      if (org) {
        return {
          org,
          country: j["country"] || "",
          place: [j["city"], j["region"]].filter(Boolean).join(", "),
          host: j["hostname"] || "",
        };
      }
    }
  } catch {
    /* try the fallback */
  }
  try {
    const r = await fetch("https://ipwho.is/");
    if (r.ok) {
      const j = (await r.json()) as {
        success?: boolean;
        country_code?: string;
        city?: string;
        region?: string;
        connection?: { org?: string; isp?: string; domain?: string };
      };
      const org = j.connection?.org || j.connection?.isp || "";
      if (j.success !== false && org) {
        return {
          org,
          country: j.country_code || "",
          place: [j.city, j.region].filter(Boolean).join(", "),
          host: j.connection?.domain || "",
        };
      }
    }
  } catch {
    /* give up quietly */
  }
  return null;
}

async function sendOrgOncePerVisit() {
  try {
    if (window.sessionStorage.getItem(ORG_SESSION_KEY)) return;
    window.sessionStorage.setItem(ORG_SESSION_KEY, "1");
  } catch {
    /* no sessionStorage: still send, at most once per page load */
  }
  const info = await lookupOrg();
  if (!info) return;
  const path = `org: ${info.org}${info.country ? ` · ${info.country}` : ""}`.slice(0, 500);
  const title = [info.place, info.country, info.host].filter(Boolean).join(" · ");
  count({ path, title: title || info.org, event: true });
}

export function Analytics() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const prev = useRef<string | null>(null);
  useEffect(() => {
    if (isDisabled()) return;
    // First page: the real referrer (Google, LinkedIn…). Later in-site navigation: the previous page.
    const referrer = prev.current ? window.location.origin + prev.current : document.referrer;
    prev.current = pathname;
    // Title updates after navigation, so read it a moment later.
    const t = window.setTimeout(
      () => count({ path: pathname, title: document.title, referrer }),
      300,
    );
    return () => window.clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    if (isDisabled()) return;
    void sendOrgOncePerVisit();
  }, []);

  return null;
}
