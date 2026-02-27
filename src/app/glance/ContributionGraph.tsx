"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { siteConfig } from "../../../config/site";

const GitHubGraphs = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // GitHub Light Theme Only
  const lightTheme = {
    light: [
      "#ebedf0", // background
      "#9be9a8", // level 1
      "#40c463", // level 2
      "#30a14e", // level 3
      "#216e39", // level 4
    ],
  };

  useEffect(() => {
    setMounted(true);

    const handleResize = () =>setIsMobile(window.innerWidth<768); handleResize();

    window.addEventListener("resize",handleResize);
    return ()=>window.removeEventListener("resize",handleResize)
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className='w-full flex justify-center'>
        <GitHubCalendar
          username={siteConfig.links.githubUsername}
          errorMessage='Could not fetch GitHub stats'
          theme={lightTheme}
          colorScheme='light'
          showWeekdayLabels={true}
          blockSize={isMobile ? 12 : 14}
          blockMargin={isMobile ? 4 : 6}
          fontSize={isMobile ? 14 : 16}
        />
      </div>
    </>
  );
};

export default GitHubGraphs;
