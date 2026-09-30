import { NextResponse } from "next/server";
import { getGitHubStats } from "../../../actions/getGitHubStats";

export async function GET(request: Request) {
  const forceRefresh = new URL(request.url).searchParams.get("fresh") === "1";
  return NextResponse.json(await getGitHubStats(forceRefresh));
}
