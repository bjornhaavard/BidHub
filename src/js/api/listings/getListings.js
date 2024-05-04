import { API_HOST_URL, API_BASE, API_LISTINGS } from "../constants.js";
import { displayMessage } from "../../components/shared/displayMessage.js";
import { fetchWithToken } from "../fetchWithToken.js";

export async function getListings() {
  const response = await fetch(`${API_HOST_URL}${API_BASE}${API_LISTINGS}?&_seller=true&_bids=true&_active=true&sort=created&sortOrder=desc`);
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

export async function getDetails(id) {
  if (!id) {
    throw new Error(displayMessage("#listing-container", "Get requires a listingID", "danger"));
  }

  const getSingleListingUrl = `${API_HOST_URL}${API_BASE}${API_LISTINGS}/${id}?&_seller=true&_bids=true&_active=true`;

  const response = await fetchWithToken(getSingleListingUrl);

  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
}
