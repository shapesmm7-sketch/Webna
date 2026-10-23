/**
 * WebNa Safety & Privacy Utilities
 * Handles link sanitation, fingerprint masking signals, and cookie policy.
 */

const TRACKING_PARAM_PREFIXES = [
  "utm_",
  "fbclid",
  "gclid",
  "gclsrc",
  "dclid",
  "msclkid",
  "mc_eid",
  "zanpid",
  "igshid",
  "_hsenc",
  "_hsmi",
  "yclid",
  "_openstat",
  "wickedid",
  "twclid",
  "ttclid",
  "si",
  "ref_src",
  "fbadid",
];

/**
 * Sanitizes URLs by stripping intrusive ad tracking query params
 */
export function stripTrackingParams(rawUrl: string): string {
  if (!rawUrl) return "";
  try {
    const url = new URL(rawUrl);
    const toDelete: string[] = [];
    url.searchParams.forEach((_, key) => {
      const lower = key.toLowerCase();
      if (
        TRACKING_PARAM_PREFIXES.some(
          (prefix) => lower === prefix || lower.startsWith(prefix),
        )
      ) {
        toDelete.push(key);
      }
    });

    if (toDelete.length > 0) {
      toDelete.forEach((k) => url.searchParams.delete(k));
      return url.toString();
    }
    return rawUrl;
  } catch {
    return rawUrl;
  }
}

export type CookiePolicyMode = "allow" | "block-3rd" | "block-all";

export function getCookiePolicy(): CookiePolicyMode {
  if (typeof window === "undefined") return "block-3rd";
  const stored = localStorage.getItem("webna-cookie-mode");
  if (stored === "allow" || stored === "block-3rd" || stored === "block-all") {
    return stored;
  }
  return "block-3rd";
}

export function isCleanLinksEnabled(): boolean {
  if (typeof window === "undefined") return true;
  return localStorage.getItem("webna-clean-links") !== "false";
}

export function isFingerprintProtectionEnabled(): boolean {
  if (typeof window === "undefined") return true;
  return localStorage.getItem("webna-fingerprint-prot") !== "false";
}

export function isStrictDownloadsEnabled(): boolean {
  if (typeof window === "undefined") return true;
  return localStorage.getItem("webna-strict-downloads") !== "false";
}

export function isMixedContentBlocked(): boolean {
  if (typeof window === "undefined") return true;
  return localStorage.getItem("webna-block-mixed-content") !== "false";
}
