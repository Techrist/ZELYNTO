/**
 * Astro hands framework components an `ImageMetadata` object for static asset
 * imports, not a URL string. This normalises either form to a usable `src`.
 */
export function assetUrl(imported: string | { src: string }): string {
  return typeof imported === "string" ? imported : imported.src;
}
