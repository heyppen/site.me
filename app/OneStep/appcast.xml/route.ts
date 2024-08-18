export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { marked } from "marked";
import { BuildGithubAssetDownloadProxyUrl, octokit } from "app/github";

type Release = {
  build_number: string;
  version: string;
  title: string;
  link: string;
  release_at: Date;
  release_notes_md: string;
  download_link: string;
};

export async function GET() {
  const res = await octokit.request(
    "GET /repos/{owner}/{repo}/releases?per_page=10",
    {
      owner: "heytentt",
      repo: "OneStep",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  console.log(res);

  // return Response.json(res);

  if (res.status !== 200) {
    return new Response(`github api error:${res.status}`);
  }

  const releases: Release[] = [];
  for (const r of res.data) {
    
    const asset = findDmgAsset(r);
    const download_link = asset ? BuildGithubAssetDownloadProxyUrl(asset.url) : '';

    releases.push({
      build_number: r.tag_name,
      version: r.name,
      title: r.name,
      link: "https://tentt.dev/OneStep",
      release_at: new Date(Date.parse(r.published_at)),
      release_notes_md: r.body,
      download_link: download_link,
    });
  }

  const xml = formatReleases(releases);
  return new Response(xml, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}

function findDmgAsset(release: any): any {
  if (release && release.assets && release.assets.length > 0) {
    for (const asset of release.assets) {
      if (asset.name.endsWith(".dmg")) {
        return asset;
      }
    }
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
      sparkle:edSignature="EnQymPvgv0MB+XtfFo7TVPTadupiV83ZHYYzHDAS5Ca/fPeDrdomabsndaUxPVxmOtNIetLH5iwRSbPyVKxJBw==" 
      length="4796349"
      type="application/octet-stream"
       />
</item>
  `;
}
