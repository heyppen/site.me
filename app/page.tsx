import { Inter, Caveat, IBM_Plex_Mono } from "next/font/google";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";

import { BlogPosts } from "app/components/posts";
import { Projects } from "./components/projects";
import { cx } from "./ui";
import { LightSvg } from "./components/icons";
import { SiteBaseUrl } from "./global";
import Link from "next/link";

const caveat = Caveat({ subsets: ["latin"], weight: "700" });
const ibm = IBM_Plex_Mono({weight: "400", subsets: ['latin']});

const LIGHT_SIZE = 180;

export default function Page() {
  return (
    <main className={cx("mt-4 flex-col md:w-3xl items-center content-center", ibm.className)}>
      {/* <section className="w-full mt-4 flex-col items-center"> */}
      {/* Header */}
      <div className="flex justify-center">
        <Link href={SiteBaseUrl}>
          <div className="relative">
            <LightSvg
              className="absolute top-[-50px] left-[-40px]"
              height={LIGHT_SIZE}
              width={LIGHT_SIZE}
            />
            <img src="/logo.png" alt="icon" className="h-[96px]" />
            <h1 className={cx("text-[32px] text-zinc-200", caveat.className)}>
              tentt.dev
            </h1>
          </div>
        </Link>
      </div>

      <H1 text="Apps" id="apps" />
      <div className="mt-4 w-full flex flex-col gap-8 md:px-36">
        <div className="flex font-mono">
          <img src="/OneStep.png" className="h-24 min-w-24" />
          <div className="p-2 flex flex-col justify-between">
            <h2 className="font-medium tracking-wide text-lg">OneStep</h2>
            <p className="text-sm">Operate your mac in one step</p>
            <div className="flex gap-2">
              <Tag text="macOS" />
              <Tag text="Developing" />
            </div>
          </div>
        </div>

        <div className="flex font-mono">
          <Link href={"https://www.syncx-app.com"} target="_blank">
            <img src="/SyncX.png" className="h-24 min-w-24" />
          </Link>
          <div className="p-2 flex flex-col justify-between">
            <h2 className="font-medium tracking-wide text-lg">SyncX</h2>
            <p className="text-sm">Twitter/X sync tool</p>
            <div className="flex gap-2">
              <Tag text="Electron" />
              <Tag text="macOS" />
              <Tag text="Windows" />
            </div>
          </div>
        </div>

        <div className="flex font-mono">
          <Link href={"/wheremouse"}>
            <img src="/WhereMouse.png" className="h-24 min-w-24" />
          </Link>
          <div className="p-2 flex flex-col justify-between">
            <h2 className="font-medium tracking-wide text-lg">WhereMouse</h2>
            <p className="text-sm">Ctrl+Ctrl to reveal your mouse position</p>
            <div>
              <Tag text="macOS" />
            </div>
          </div>
        </div>
      </div>

      {/* <H1 text="Links" id="links" />
      <div className="mt-4 w-full flex flex-col gap-8 md:px-36">

      </div> */}
      {/* </section> */}
      {/* <Footer /> */}
    </main>
  );
}

function H1({ text, id }: { text: string; id: string }) {
  return (
    <div className="mt-8 md:mt-16 w-full text-center">
      <h1 className={cx("text-[28px] font-bold", caveat.className)} id={id}>
        {text}
      </h1>
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="border border-zinc-600 rounded-md w-fit px-1 text-xs">
      {text}
    </span>
  );
}
