import { displayMessage } from "../../components/shared/displayMessage.js";
import { getName } from "../../api/helpers/getName.js";
import { API_PROFILE } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

const action = "/profiles";

/**
 * Gets the profile information for the currently authenticated user.
 *
 * @async
 * @function
 * @throws {Error} If there is an issue fetching the profile or the response is not OK.
 * @returns {Promise<Object>} A Promise that resolves with the profile information.
 */

export async function getProfile() {
  const profile = getName();

  const response = await fetchWithToken(`${API_PROFILE}${action}/${profile}?&_listings=true&_bids=true&_active=true&_description=true`);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(displayMessage("#profile-error", response.status, "danger"));
}
