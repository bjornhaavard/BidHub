import { createListing } from "../api/listings/create.js";

import { displayMessage } from "../components/shared/displayMessage.js";

export function createListingFormListener() {
  const form = document.querySelector("#createListing");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const listing = Object.fromEntries(formData.entries());

    listing.tags = listing.tags.split(",").map((item) => item.trim());

    // console.log(post);

    try {
      await createListing(listing);
      displayMessage("#message", 'Post successful. Please go to <a href="/feed/">Feed</a>', "success");
      form.reset();
    } catch (error) {
      console.error(error);
      displayMessage("#message", error.message, "warning");
    }
  });
}
