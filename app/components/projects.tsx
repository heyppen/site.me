import Link from "next/link";

export function Projects() {
  return (
    <div>
      <Link className="flex flex-col space-y-1 mb-4" href={`/wheremouse`}>
        <div className="w-full flex flex-row items-baseline md:flex-row space-x-0 md:space-x-2">
          {/* <p className="text-neutral-600 dark:text-neutral-400 w-[80px] tabular-nums">
            {"2024-07"}
          </p> */}
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            {"WhereMouse"}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 tracking-tight text-sm ml-4">
            {"macOS app"}
          </p>
        </div>
      </Link>
      <Link className="flex flex-col space-y-1 mb-4" href={`https://www.syncx-app.com`} target="_blank">
        <div className="w-full flex flex-row items-baseline md:flex-row space-x-0 md:space-x-2">
          {/* <p className="text-neutral-600 dark:text-neutral-400 w-[80px] tabular-nums">
            {"2024-06"}
          </p> */}
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            {"SyncX"}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 tracking-tight text-sm ml-4">
            {"Electron app"}
          </p>
        </div>
      </Link>
    </div>
  );
}
