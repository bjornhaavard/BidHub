const newListingButton = document.querySelector("#new-listing-button");

export function renderAdminButtons(loggedInUsername) {
  if (loggedInUsername) {
    newListingButton.textContent = "New Listing";
    newListingButton.style.display = "inline-block";
  } else {
    newListingButton.style.display = "none";
  }
}
const logOutButton = document.querySelector("#logout-button");

export function renderProfileAdminButtons(loggedInUsername) {
  if (loggedInUsername) {
    logOutButton.style.display = "inline-block";
  } else {
    logOutButton.style.display = "none";
  }
}
