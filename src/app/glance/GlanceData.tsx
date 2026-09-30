"use client";

import { useEffect, useState } from "react";
import ContributionGraph from "./ContributionGraph";
import StatsGrid from "./StatsGrid";
import type { Contribution } from "../actions/getGitHubContributions";

type GithubStats = {
  followers?: number;
  following?: number;
  public_repos?: number;
  location?: string;
};

let cachedStats: GithubStats | null = null;
let cachedContributions: Contribution[] | null = null;

export default function GlanceData() {
  const [stats, setStats] = useState<GithubStats | null>(cachedStats);
  const [contributions, setContributions] = useState<Contribution[] | null>(cachedContributions);

  useEffect(() => {
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const fresh = navigation?.type === "reload" ? "?fresh=1" : "";

    Promise.all([
      fetch(`/api/github/stats${fresh}`, { cache: "no-store" }).then((response) => {
        if (!response.ok) throw new Error("GitHub stats request failed");
        return response.json() as Promise<GithubStats>;
      }),
      fetch(`/api/github/contributions${fresh}`, { cache: "no-store" }).then((response) => {
        if (!response.ok) throw new Error("Contribution request failed");
        return response.json() as Promise<{ contributions: Contribution[] }>;
      }),
    ])
      .then(([nextStats, nextContributions]) => {
        cachedStats = nextStats;
        cachedContributions = nextContributions.contributions;
        setStats(nextStats);
        setContributions(nextContributions.contributions);
      })
      .catch((error) => {
        console.error("Unable to load Glance data.", error);
      });
  }, []);

  return (
    <>
      <ContributionGraph initialContributions={contributions} />
      <StatsGrid initialStats={stats} />
    </>
  );
}
