import Link from "next/link";

export default function Page() {
  return (
    <div className="py-16">
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-16 ">
        <div className="md:mt-0 flex flex-col gap-8 md:gap-16">
          <div className="flex items-center gap-4">
            <div>
              <img src="ScreenRadar.png" className="w-[72px]" />
            </div>
            <h1 className="font-bold text-[36px]">ScreenRadar</h1>
          </div>
          <div>
            <p className="font-bold text-[32px] whitespace-pre-wrap">
              {`OCR, Annotate, Copy, Search \nyour mac Screen`}
            </p>
            {/* <p className="mt-4 text-zinc-500">
                with <span className="text-blue-500 tracking-wide">hot edge</span>{" "}
                and{" "}
                <span className="text-green-500 tracking-wide">
                  a bunch of crafted bentos
                </span>
              </p> */}
          </div>

          <div className="flex items-baseline gap-2">
            <Link href="https://apps.apple.com/us/app/screenradar/id6683308728">
              <button className="w-fit px-8 py-3 bg-blue-600 text-xl rounded-full hover:bg-blue-700 tracking-wide cursor-pointer">
                Download
              </button>
            </Link>
            <p className="p-2 text-sm text-gray-500 shadow">macOS 14+</p>
          </div>
        </div>

        <img src="/ScreenRadar-mockup.png" className="w-full md:max-w-2xl mt-8 md:mt-0" />
      </div>

      <div className="mt-8 mx-2">
        <h2 className="text-2xl" id="privacy">Privacy</h2>
        <p>
          ScreenRadar needs access to your mac screen recording so it can capture the screen and run OCR algorithm over the screenshot via apple Vision library, then you can copy/search the OCRed texts.
          The screenshot and recognized data are all stored in local (in fact in memory).
          ScreenRadar does not collect any information or share any data with anyone. It also works well without network.
        </p>

        <h2 className="mt-4 text-2xl" id="support">Support</h2>
        <p>Any feedback or support, please contact hi@tentt.dev</p>
      </div>
    </div>
  );
}
