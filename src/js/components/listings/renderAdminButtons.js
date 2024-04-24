import { getName } from "../../api/helpers/getName.js";

export function renderAdminButtons(name) {
  const loggedInUsername = getName();

  if (loggedInUsername !== name) {
    const newListingButton = document.querySelector("#new-listing-button");
    newListingButton.textContent = "Login to list";
    newListingButton.setAttribute = ("disabled", true);
    return;
  }
}
