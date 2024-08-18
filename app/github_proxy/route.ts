export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { NextRequest } from "next/server";
import { octokit } from "app/github";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const asset_url = params.get("asset_url");
  if (!asset_url) {
    return new Response("asset_url is required");
  }

  const res = await octokit.request(asset_url, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
      Accept: "application/octet-stream",
    },
  });
//   console.log(res);
//   console.log(typeof res.data);

  const headers = new Headers();
  Object.keys(res.headers).forEach(function (key) {
    headers.set(key, String(res.headers[key]));
  });

  return new Response(res.data, { headers: headers });
}
