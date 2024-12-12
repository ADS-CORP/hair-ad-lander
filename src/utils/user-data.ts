/**
 * Extracts URL parameters from the current page's URL.
 * @returns An object where keys are parameter names and values are parameter values.
 *          If a parameter has no value, it will not be included in the returned object.
 */
export function getUrlParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const urlParams: Record<string, string> = {};

  for (const [key, value] of params.entries()) {
    if (value !== null && value !== '') {
      urlParams[key] = value;
    }
  }

  return urlParams;
}
