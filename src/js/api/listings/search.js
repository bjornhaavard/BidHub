import { API_BASE, API_HOST_URL, API_LISTINGS } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

export async function searchListings(tag) {
  const response = await fetchWithToken(`${API_HOST_URL}${API_BASE}${API_LISTINGS}/?_seller=true&_tag=${tag}&_active=true`);

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Failed to search by tag");
}
