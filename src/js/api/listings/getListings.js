import { API_HOST_URL, API_LISTINGS } from "../constants.js";

export async function getListings() {
  const response = await fetch(`${API_HOST_URL}${API_LISTINGS}`);
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
