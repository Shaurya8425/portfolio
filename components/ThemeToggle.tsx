"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span aria-hidden='true' className='ml-2 inline-block h-9 w-[76px]' />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label='Toggle color theme'
      className='ml-2 rounded-full border border-[var(--line)] px-3 py-2 text-xs font-bold'
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
