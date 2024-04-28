import * as storage from "../../storage/index.js";

/**
 * Retrieves the name from the user's profile stored in the browser's storage.
 *
 * @function
 * @name getName
 * @returns {string | undefined} The name of the user, or undefined if the profile or name is not available.
 *
 * @example
 * // Get the name from the user's profile
 * const userName = getName();
 * console.log(userName); // Outputs the user's name or undefined
 */

export function getName() {
  /**
   * Represents the user's profile stored in the browser's storage.
   * @type {Object | null}
   */
  const profile = storage.load("profile");
  return profile?.name;
}

export function getProfileCredits() {
  const profileCredits = storage.load("profile");
  return profileCredits?.credits;
}
