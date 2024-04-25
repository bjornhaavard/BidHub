export function renderAdminButtons(loggedInUsername) {
  const newListingButton = document.querySelector("#new-listing-button");

  if (loggedInUsername) {
    newListingButton.textContent = "New Listing";
    newListingButton.style.display = "inline-block";
  } else {
    newListingButton.style.display = "none";
  }
}
