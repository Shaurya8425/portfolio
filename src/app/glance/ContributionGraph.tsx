"use client";
import { useEffect, useMemo, useState } from "react";
import { ContributionGraphSkeleton } from "../../../components/skeleton/ContributionGraphSkeleton";
import type { Contribution } from "../actions/getGitHubContributions";

const colors = ["bg-black/5 dark:bg-white/10", "bg-[#d5f6aa]", "bg-[#a9e96f]", "bg-[#65c936]", "bg-[#2c8c2a]"];
const futureColor = "border border-[var(--line)] bg-transparent";
const monthColors = [
  "color-mix(in srgb, #47751b 22%, var(--foreground))",
  "color-mix(in srgb, #47751b 28%, var(--foreground))",
  "color-mix(in srgb, #47751b 34%, var(--foreground))",
  "color-mix(in srgb, #47751b 40%, var(--foreground))",
  "color-mix(in srgb, #47751b 46%, var(--foreground))",
  "color-mix(in srgb, #47751b 52%, var(--foreground))",
  "color-mix(in srgb, #47751b 58%, var(--foreground))",
  "color-mix(in srgb, #47751b 64%, var(--foreground))",
  "color-mix(in srgb, #47751b 70%, var(--foreground))",
  "color-mix(in srgb, #47751b 76%, var(--foreground))",
  "color-mix(in srgb, #47751b 82%, var(--foreground))",
  "color-mix(in srgb, #47751b 88%, var(--foreground))",
];
let cachedContributions: Contribution[] | null = null;

function getYearProgress() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const end = new Date(now.getFullYear() + 1, 0, 1);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const totalDays = Math.round((end.getTime() - start.getTime()) / 86400000);
  const daysPassed = Math.round((today.getTime() - start.getTime()) / 86400000) + 1;
  return { daysPassed, daysLeft: totalDays - daysPassed };
}

export default function ContributionGraph({ initialContributions }: { initialContributions: Contribution[] }) {
  const [contributions, setContributions] = useState<Contribution[] | null>(() => cachedContributions ?? initialContributions);
  const [error, setError] = useState(false);
  useEffect(() => {
    cachedContributions = initialContributions;
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (navigation?.type !== "reload") return;
    fetch("/api/github/contributions?fresh=1", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("Contribution request failed");
        return response.json();
      })
      .then((data) => {
        cachedContributions = data.contributions;
        setContributions(data.contributions);
      })
      .catch((requestError) => {
        console.error("Unable to refresh GitHub contributions.", requestError);
      });
  }, [initialContributions]);
  const { daysPassed, daysLeft } = getYearProgress();
  const columns = useMemo(() => {
    if (!contributions) return [];
    const byDate = new Map(contributions.map((day) => [day.date, day]));
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 1);
    start.setDate(start.getDate() - start.getDay());
    const end = new Date(today.getFullYear(), 11, 31);
    end.setDate(end.getDate() + (6 - end.getDay()));
    const days: Contribution[] = [];
    for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
      const dateString = date.toISOString().slice(0, 10);
      days.push(byDate.get(dateString) || { date: dateString, count: 0, level: 0 });
    }
    const result: Contribution[][] = [];
    for (let index = 0; index < days.length; index += 7) result.push(days.slice(index, index + 7));
    return result;
  }, [contributions]);
  const monthLabels = useMemo(() => columns.map((column) => {
    const year = new Date().getFullYear().toString();
    const firstOfMonth = column.find((day) => day.date.startsWith(`${year}-`) && day.date.endsWith("-01"));
    return firstOfMonth ? {
      label: new Date(`${firstOfMonth.date}T00:00:00`).toLocaleString("en", { month: "short" }),
      month: Number(firstOfMonth.date.slice(5, 7)),
    } : null;
  }), [columns]);
  const gridStyle = { gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` };
  const currentYear = new Date().getFullYear();
  return <section className='surface mb-8 p-6 sm:p-8'><div className='mb-6 flex items-end justify-between'><div><p className='eyebrow mb-2'>Open source pulse</p><h2 className='text-2xl font-black'>A year in commits.</h2></div>{contributions && <div className='text-right text-sm text-[var(--muted)]'><p>{contributions.reduce((sum, day) => sum + day.count, 0)} contributions</p><p>{daysPassed} days passed · {daysLeft} days left</p></div>}</div>{error ? <p className='rounded-lg bg-red-500/10 p-4 text-sm text-red-700 dark:text-red-300'>GitHub contributions are temporarily unavailable. Try again shortly.</p> : !contributions ? <ContributionGraphSkeleton /> : <div className='overflow-x-auto pb-2'><div className='min-w-[720px]'><div className='mb-2 grid gap-1 text-[10px]' style={gridStyle}>{monthLabels.map((month, index) => <span key={index} style={month ? { color: monthColors[month.month - 1] } : undefined}>{month?.label}</span>)}</div><div className='grid gap-1' style={gridStyle}>{columns.map((column, columnIndex) => <div className='flex flex-col gap-1' key={columnIndex}>{Array.from({ length: 7 }).map((_, rowIndex) => { const day = column[rowIndex]; const isCurrentYear = day && Number(day.date.slice(0, 4)) === currentYear; const month = isCurrentYear ? Number(day.date.slice(5, 7)) : 0; const future = isCurrentYear && new Date(`${day.date}T00:00:00`) > new Date(); return <span key={rowIndex} title={isCurrentYear ? `${day.count} contributions on ${day.date}` : undefined} style={isCurrentYear ? { borderColor: monthColors[month - 1] } : undefined} className={`aspect-square w-full rounded-[3px] ${!isCurrentYear ? "invisible" : future ? "border bg-transparent" : `${colors[day.level]} border`}`} />; })}</div>)}</div></div></div>}<div className='mt-4 flex items-center justify-end gap-2 text-xs text-[var(--muted)]'><span>Less</span>{colors.map((color) => <span key={color} className={`h-3 w-3 rounded-[3px] ${color}`} />)}<span>Future</span><span className={`h-3 w-3 rounded-[3px] ${futureColor}`} /><span>More</span></div></section>;
}
