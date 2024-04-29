import { API_CREATE_LISTING } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

export async function sortListings(sortParam, sortOrderParam) {
  const response = await fetchWithToken(`${API_CREATE_LISTING}?sort=${sortParam}&sortOrder=${sortOrderParam}&_active=true&_seller=true&_bids=true`);
  const listings = response.json();

  if (response.ok) {
    return listings;
  }

  throw new Error(response.statusText);
}
