/*
    1. Icon
    2. OneStep
    3. Hero section: hero sentence, gif
    4. Download button
    5. Features
    6. FAQ
*/

import Link from "next/link";

export default function Page() {
  return (
    <div className="py-16">
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-16 ">
        <div className="md:mt-0 flex flex-col gap-8 md:gap-16 min-w-fit">
          <div className="flex items-center gap-4">
            <div>
              <img src="OneStep.png" className="w-[72px]" />
            </div>
            <h1 className="font-bold text-[36px]">OneStep</h1>
          </div>
          <div>
            <p className="font-bold text-[32px] whitespace-pre-wrap">
              {`Operate your mac \neasily and quickly`}
            </p>
            <p className="mt-4 text-zinc-500">
              with <span className="text-blue-500 tracking-wide">hot edge</span>{" "}
              and{" "}
              <span className="text-green-500 tracking-wide">
                a bunch of crafted bentos
              </span>
            </p>
          </div>

          <div className="flex items-baseline gap-2">
            <Link href="/onestep/latest">
              <button className="w-fit px-8 py-3 bg-blue-600 text-xl rounded-full hover:bg-blue-700 tracking-wide cursor-pointer">
                Download
              </button>
            </Link>
            <p className="p-2 text-sm text-gray-500 shadow">macOS 14+</p>
          </div>
        </div>

        <div className="relative">
          <img src="/OneStep-mockup2.png" className="w-full max-w-3xl" />
        </div>
      </div>

      <div className="flex flex-col"></div>
    </div>
  );
}
