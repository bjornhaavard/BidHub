import { createListing } from "../api/listings/create.js";
import { displayMessage } from "../components/shared/displayMessage.js";

export function createListingFormListener() {
  const form = document.querySelector("#createListingForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const listing = Object.fromEntries(formData.entries());

    listing.media = formData.get("media") ? listing.media.split(",").map((item) => item.trim()) : [];
    listing.tags = listing.tags.split(",").map((item) => item.trim());

    try {
      await createListing(listing);
      displayMessage("#message", 'added listing successful. Please go to <a href="../../../">Items</a>', "success");
      form.reset();
    } catch (error) {
      console.error(error);
      displayMessage("#message", error.message, "warning");
    }
  });
}
