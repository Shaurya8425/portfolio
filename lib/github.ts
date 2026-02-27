// app/api/github/contributions/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  const query = `
    query {
      user(login: "YOUR_USERNAME") {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 3600 },
  });

  const json = await response.json();
  return NextResponse.json(json.data);
}
