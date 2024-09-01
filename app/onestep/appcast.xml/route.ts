export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { marked } from "marked";
import { GetReleases, Release } from "../onestep";

export async function GET() {
  try {
    const releases = await GetReleases();
    const xml = formatReleases(releases);
    return new Response(xml, {
      headers: {
        "Content-Type": "text/xml",
      },
    });
  } catch (error) {
    return new Response(error);
  }
}

function formatReleases(releases: Release[]): string {
  let items = "";
  for (const r of releases) {
    items += "\n" + formatRelease(r);
  }

  return `
<rss
  xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle" 
	xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0">
	<channel>
		<title>OneStep Releases</title>
		<link>https://tentt.dev/OneStep/appcast.xml</link>
		<language>en</language>
    ${items}
	</channel>
</rss>
  `;
}

function formatRelease(r: Release): string {
  let releaseNotesHtml = "";
  if (r.release_notes_md) {
    releaseNotesHtml = marked.parse(r.release_notes_md, { async: false });
  }

  return `
<item>
    <title>${r.title}</title>
    <link>${r.link}</link>
    <sparkle:version>${r.build_number}</sparkle:version>
    <sparkle:shortVersionString>${r.version}</sparkle:shortVersionString>
    <pubDate>${r.release_at.toUTCString()}</pubDate>
    <description><![CDATA[
        ${releaseNotesHtml}
    ]]>
    </description>
    <enclosure 
      url="${r.download_link}"
      ${r.signature}
      type="application/octet-stream"
       />
</item>
  `;
}
