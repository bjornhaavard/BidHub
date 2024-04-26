export function renderAdminButtons(loggedInUsername) {
  const newListingButton = document.querySelector("#new-listing-button");
  const loginButton = document.querySelector("#login-button");

  if (loggedInUsername) {
    newListingButton.textContent = "New Listing";
    newListingButton.style.display = "inline-block";
    loginButton.style.display = "none";
  } else {
    newListingButton.style.display = "none";
    loginButton.style.display = "inline-block";
  }
}
