import { renderListings } from "../components/listings/renderListings.js";
import { displayMessage } from "../components/shared/displayMessage.js";
import { getListings } from "../api/listings/getListings.js";
import { renderAdminButtons } from "../components/listings/renderAdminButtons.js";

export async function displayListings() {
  try {
    const placeholder = document.querySelector("#spinner");

    if (renderListings) {
      placeholder.style.display = "none";
    }
    const listings = await getListings();
    renderAdminButtons();
    renderListings(listings, "#listings-container");
  } catch (error) {
    console.log(error);
    displayMessage("#error-message", error, "danger");
  }
}
