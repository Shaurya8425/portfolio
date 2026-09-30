"use server";

import { siteConfig } from "../../../config/site";

export type Contribution = { date: string; count: number; level: number };

export async function getGitHubContributions(forceRefresh = false): Promise<Contribution[]> {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${siteConfig.links.githubUsername}?y=last`,
    forceRefresh ? { cache: "no-store" } : { next: { revalidate: 3600 } },
  );

  if (!response.ok) {
    throw new Error(`GitHub contributions request failed: ${response.status}`);
  }

  const data = await response.json();
  return data.contributions;
}
