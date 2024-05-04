import { searchListings } from "../api/listings/search.js";
import { renderListings } from "../components/listings/renderListings.js";
import { displayMessage } from "../components/shared/displayMessage.js";

export async function searchListingsHandler() {
  const searchInput = document.querySelector("#searchInput");
  const searchButton = document.querySelector("#searchButton");

  searchButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const searchQuery = searchInput.value.trim();

    if (searchQuery === "") {
      return;
    }

    try {
      const listings = await searchListings(searchQuery);

      renderListings(listings, "#listings-container");

      displayMessage("#filter-message", `Showing  ${listings.length} listings from search:  <span style="font-style: italic; text-decoration: underline;">${searchInput.value}</span>`, "success");
    } catch (error) {
      displayMessage("#listings-container", `Something went wrong: ${error}`, "danger");
    }
  });
}
