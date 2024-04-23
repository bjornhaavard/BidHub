import { getName } from "../../api/helpers/getName.js";

export function renderAdminButtons(parent, name) {
  const loggedInUsername = getName();

  if (loggedInUsername !== name) {
    return;
  }
  const newListingButton = document.querySelector("#new-listing-button");
  newListingButton.style.display = "block";
  console.log(newListingButton);
}

renderAdminButtons();
