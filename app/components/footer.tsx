import Image from "next/image";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 mb-8 w-full text-center font-mono text-sm">
      {/* <ul className="font-sm mt-4 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">rss</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/heytentt"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">x/twitter</p>
          </a>
        </li>
      </ul> */}
      <p>Contact us at hi@tentt.dev</p>
      <p className="mt-4">
        🏕️ © {new Date().getFullYear()} <a href="https://tentt.dev">tentt.dev</a>
      </p>
      {/* <Analytics />
      <SpeedInsights /> */}
    </footer>
  );
}
