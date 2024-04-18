import { getDetails } from "../api/listings/getListings.js";
import { getParamFromQueryString } from "../api/helpers/getParamFromQueryString.js";
// import { renderAdminButtons } from "../components/posts/renderAdminButtons.js";
// import { getPostComments } from "../helpers/makeComments.js";

// import { defaultAvatarImage } from "../api/constants.js";

export async function displaySingleListing(container = "#listing-container") {
  const parentElement = document.querySelector(container);
  const placeHolder = document.querySelector("#spinner");
  const id = getParamFromQueryString("id");

  if (!id) {
    location.href = "/";
  }

  const listing = await getDetails(id);
  console.log(listing);
  if (listing) {
    placeHolder.style.display = "none";
  }
  const {
    title,
    body,
    media,
    seller: { avatar, name },
  } = Listing;
  console.log(listing);
  parentElement.classList.add("d-flex", "flex-column", "align-items-center");

  //   renderAdminButtons(div, name, id);

  //   getPostComments();
}
