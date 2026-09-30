import { NextResponse } from "next/server";
import { siteConfig } from "../../../../../config/site";

export async function GET() {
  const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${siteConfig.links.githubUsername}?y=last`, { next: { revalidate: 3600 } });
  if (!response.ok) return NextResponse.json({ message: "Unable to load GitHub contributions." }, { status: response.status });
  return NextResponse.json(await response.json());
}
