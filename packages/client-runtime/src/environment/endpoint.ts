export * from "@t3tools/shared/advertisedEndpoint";

export const environmentEndpointUrl = (httpBaseUrl: string, pathname: string): string => {
  const url = new URL(httpBaseUrl);
  // Join onto the base path (sub-path behind a reverse proxy) instead of replacing it.
  url.pathname = url.pathname.replace(/\/$/, "") + pathname;
  url.search = "";
  url.hash = "";
  return url.toString();
};
