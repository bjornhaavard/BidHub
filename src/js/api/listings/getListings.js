import { API_HOST_URL, API_BASE, API_LISTINGS } from "../constants.js";

export async function getListings() {
  const response = await fetch(`${API_HOST_URL}${API_BASE}${API_LISTINGS}?&_seller=true&_bids=true&_active=true&sort=created&sortOrder=desc`);
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
