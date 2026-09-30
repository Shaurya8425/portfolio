"use client";
import { useEffect, useMemo, useState } from "react";
import { ContributionGraphSkeleton } from "../../../components/skeleton/ContributionGraphSkeleton";

type Contribution = { date: string; count: number; level: number };
const colors = ["bg-black/5 dark:bg-white/10", "bg-[#d5f6aa]", "bg-[#a9e96f]", "bg-[#65c936]", "bg-[#2c8c2a]"];

export default function ContributionGraph() {
  const [contributions, setContributions] = useState<Contribution[] | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => { fetch("/api/github/contributions").then((response) => { if (!response.ok) throw new Error("Contribution request failed"); return response.json(); }).then((data) => setContributions(data.contributions)).catch(() => setError(true)); }, []);
  const columns = useMemo(() => { if (!contributions) return []; const days = contributions.slice(-371); const result: Contribution[][] = []; for (let index = 0; index < days.length; index += 7) result.push(days.slice(index, index + 7)); return result; }, [contributions]);
  return <section className='surface mb-8 p-6 sm:p-8'><div className='mb-6 flex items-end justify-between'><div><p className='eyebrow mb-2'>Open source pulse</p><h2 className='text-2xl font-black'>A year in commits.</h2></div>{contributions && <span className='text-sm text-[var(--muted)]'>{contributions.reduce((sum, day) => sum + day.count, 0)} contributions</span>}</div>{error ? <p className='rounded-lg bg-red-500/10 p-4 text-sm text-red-700 dark:text-red-300'>GitHub contributions are temporarily unavailable. Try again shortly.</p> : !contributions ? <ContributionGraphSkeleton /> : <div className='overflow-x-auto pb-2'><div className='flex min-w-[720px] gap-1'>{columns.map((column, columnIndex) => <div className='flex flex-col gap-1' key={columnIndex}>{Array.from({ length: 7 }).map((_, rowIndex) => { const day = column[rowIndex]; return <span key={rowIndex} title={day ? `${day.count} contributions on ${day.date}` : undefined} className={`h-3 w-3 rounded-[3px] sm:h-3.5 sm:w-3.5 ${day ? colors[day.level] : colors[0]}`} />; })}</div>)}</div></div>}<div className='mt-4 flex items-center justify-end gap-2 text-xs text-[var(--muted)]'><span>Less</span>{colors.map((color) => <span key={color} className={`h-3 w-3 rounded-[3px] ${color}`} />)}<span>More</span></div></section>;
}
