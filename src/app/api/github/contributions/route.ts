import { NextResponse } from "next/server";
import { getGitHubContributions } from "../../../actions/getGitHubContributions";

export async function GET(request: Request) {
  try {
    const forceRefresh = new URL(request.url).searchParams.get("fresh") === "1";
    return NextResponse.json({ contributions: await getGitHubContributions(forceRefresh) });
  } catch {
    return NextResponse.json({ message: "Unable to load GitHub contributions." }, { status: 502 });
  }
}
