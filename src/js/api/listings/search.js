import { displayMessage } from "../../components/shared/displayMessage.js";
import { API_BASE, API_HOST_URL, API_LISTINGS } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

export async function searchListings(tag) {
  const response = await fetchWithToken(`${API_HOST_URL}${API_BASE}${API_LISTINGS}/?_tag=${tag}&_active=true&_author=true`);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(displayMessage("error", "#posts-container", response.statusText));
}

// export function searchListings(listings, searchTerm) {
//   // 1. Lowercase for case-insensitive search
//   const normalizedSearchTerm = searchTerm.toLowerCase();

//   // 2. Filter listings based on search term
//   const filteredListings = listings.filter((listing) => {
//     const normalizedTitle = listing.title.toLowerCase();
//     const normalizedDescription = listing.description.toLowerCase();

//     // 3. Search in multiple fields (adjust as needed)
//     return (
//       normalizedTitle.includes(normalizedSearchTerm) || normalizedDescription.includes(normalizedSearchTerm) // Search within tags array
//     );
//   });

//   return filteredListings;
// }
