export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { NextRequest, NextResponse } from "next/server";
import { GetReleases } from "../onestep";

export async function GET() {
  try {
    const releases = await GetReleases();
    if (releases && releases.length > 0) {
      return NextResponse.redirect(releases[0].download_link);
    }
  } catch (error) {
    return new Response(error);
  }
}
