import { API_CREATE_LISTING } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

const method = "post";

export async function createListing(listData) {
  const createListingURL = API_CREATE_LISTING;

  const response = await fetchWithToken(createListingURL, {
    method,
    body: JSON.stringify(listData),
  });
  console.log(response);
  const result = await response.json();

  if (response.ok) {
    return result;
  }

  throw new Error(result.errors[0].message);
}
createListing();
