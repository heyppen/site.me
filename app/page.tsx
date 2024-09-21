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
const ibm = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });
const ibm_700 = IBM_Plex_Mono({ weight: "700", subsets: ["latin"] });

const LIGHT_SIZE = 180;

export default function Page() {
  return (
    <main
      className={cx("mt-4 flex-col items-center content-center", ibm.className)}
    >
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

      <div className="w-full flex flex-col gap-4 md:gap-8 md:px-8">
        <H1 text="Apps" id="apps" />
        <App
          image="/OneStep.png"
          title="OneStep"
          tags={["macOS native"]}
          desc="Operate your mac easily and quickly, with hot edge and a bunch of crafted bentos"
          link="/onestep"
          link_class="relative left-[-100px] md:left-[-300px]"
          preview_image="/OneStep-mockup.png"
          preview_image_class="md:min-w-[1000px]"
          bg_class="bg-gradient-to-br from-blue-600 to-blue-800"
        />

        <App
          image="/ScreenRadar.png"
          title="ScreenRadar"
          tags={["macOS native", "App Store"]}
          desc="OCR, Annotate, Copy, Search your mac Screen"
          link="/screenradar"
          link_class="relative left-[-100px] md:left-[-100px]"
          preview_image="/ScreenRadar-mockup.png"
          preview_image_class="max-h-[700px]"
          bg_class="bg-gradient-to-br from-green-600 to-green-900"
        />

        <App
          image="/SyncX.png"
          title="SyncX"
          tags={["Electron", "macOS", "Windows"]}
          desc="Twitter/X sync tool"
          link="https://www.syncx-app.com"
          link_target="_blank"
          preview_image="/SyncX-mockup.png"
          preview_class="p-2 md:p-0"
          bg_class="bg-gradient-to-b from-zinc-800 to-zinc-900"
        />

        <App
          image="/WhereMouse.png"
          title="WhereMouse"
          tags={["macOS native"]}
          desc="Ctrl+Ctrl to reveal your mouse position"
          link="/wheremouse"
          preview_image="/wheremouse-mockup.png"
          preview_class="p-4 md:p-3"
          bg_class="bg-gradient-to-b from-red-800 to-red-700"
        />
      </div>

      {/* <H1 text="Links" id="links" />
      <div className="mt-4 w-full flex flex-col gap-8 md:px-36">

      </div> */}
      {/* </section> */}
      {/* <Footer /> */}
    </main>
  );
}

function App({
  image,
  title,
  tags,
  desc,
  link,
  link_target,
  link_class,
  preview_image,
  preview_class,
  preview_image_class,
  bg_class,
}: {
  image: string;
  title: string;
  tags: string[];
  desc: string;
  link: string;
  link_target?: string;
  link_class?: string;
  preview_image?: string;
  preview_class?: string;
  preview_image_class?: string;
  bg_class?: string;
}) {
  return (
    <div
      className={cx(
        "flex flex-col items-start font-mono text-white rounded-[24px] md:rounded-[28px] shadow-2xl p-2 md:p-6 overflow-clip",
        bg_class ?? "bg-zinc-900"
      )}
    >
      <div className="p-2">
        <div className="flex">
          <Link href={link} target={link_target ? link_target : ""}>
            <img src={image} className="h-24 min-w-24" />
          </Link>

          <div className="p-4 flex flex-col justify-between">
            <Link href={link} target={link_target ? link_target : ""}>
              <h2 className="font-medium tracking-wide text-[24px]">{title}</h2>
            </Link>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
        </div>
        <div className="px-3 pt-2">
          <p className="text-sm">{desc}</p>
        </div>
      </div>
      {preview_image && (
        <div className={cx(preview_class, "relative")}>
          <Link
            href={link}
            target={link_target ? link_target : ""}
            className={link_class}
          >
            <img src={preview_image} className={preview_image_class} />
          </Link>
        </div>
      )}
    </div>
  );
}

function H1({ text, id }: { text: string; id: string }) {
  return (
    <div className="mt-4 md:mt-8 w-full text-left">
      <h1
        className={cx(
          "text-[32px] font-extrabold text-red-600",
          ibm_700.className
        )}
        id={id}
      >
        {text}
      </h1>
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="border border-zinc-400 rounded-md w-fit px-1 text-xs">
      {text}
    </span>
  );
}
