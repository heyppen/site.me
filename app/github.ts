import { Octokit } from "@octokit/core";
import { SiteBaseUrl } from "./global";

export const octokit = new Octokit({
  auth: process.env.OneStepGithubToken,
});

export function BuildGithubAssetDownloadProxyUrl(url: string): string {
  return SiteBaseUrl + '/github_proxy?asset_url=' + encodeURIComponent(url);
}