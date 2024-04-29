/**
 * Retrieves the value of a parameter from the query string of the current URL.
 *
 * @function
 * @param {string} paramName - The name of the parameter to extract from the query string.
 * @returns {string | undefined} The value of the specified parameter from the query string,
 * or undefined if the parameter is not present in the query string.
 */

export function getParamFromQueryString(paramName) {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const paramValue = urlSearchParams.get(paramName);

  if (paramValue === null) {
    return undefined;
  }

  return paramValue;
}
