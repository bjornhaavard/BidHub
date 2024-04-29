import { getName } from "../../api/helpers/getName.js";
import { getToken } from "../../api/helpers/getToken.js";
import { parseDate } from "../../api/helpers/parse.js";
// import { displayProfileData } from "../profile/profilePage.js";
import { renderAdminButtons } from "./renderAdminButtons.js";
import { getProfileCredits } from "../../api/helpers/getName.js";

export function renderListings(listings) {
  const loggedInUsername = getName();

  const listingContainer = document.querySelector("#listings-container");
  listingContainer.innerHTML = "";

  listings.map(function (listing) {
    const {
      id,
      title,
      endsAt,
      media,
      bids: { length },
      seller: { name },
    } = listing;

    // console.log(listing);
    const divContainer = document.createElement("div");
    divContainer.classList.add("col", "col-md-6", "col-lg-4");
    listingContainer.append(divContainer);

    const divCard = document.createElement("div", "col-lg-4");
    divCard.classList.add("card");
    divContainer.append(divCard);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("card-img-container");
    divCard.append(imgContainer);

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = media;
    divCard.append(img);

    const divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body", "card-bg");
    divCard.append(divCardBody);

    const divSeller = document.createElement("p");
    divSeller.classList.add("card-text");
    divSeller.textContent = `${name}`;
    divSeller.style.textDecoration = "underline";
    divCardBody.append(divSeller);

    const heading = document.createElement("h5");
    heading.classList.add("card-title");
    heading.textContent = title;

    divCardBody.append(heading);

    const ends = document.createElement("p");
    ends.classList.add("countdown");
    ends.textContent = `Ends: ${parseDate(endsAt)}`;
    divCardBody.append(ends);

    const bid = document.createElement("p");
    bid.classList.add("card-text");
    bid.textContent = `${length} bids`;
    divCardBody.append(bid);

    const link = document.createElement("a");
    link.href = `/auctions/index.html?id=${id}`;
    link.classList.add("btn", "btn-primary", "btn-outline-light");
    link.textContent = "View";

    divCardBody.append(link);

    const adminButtons = renderAdminButtons(loggedInUsername);
    if (adminButtons) {
      divCardBody.append(adminButtons);
    }
  });

  const token = getToken();

  if (token) {
    const profileCredits = getProfileCredits();
    const navbar = document.getElementById("profile-credits");
    const showCredits = document.createElement("div");
    showCredits.classList.add("card-text", "navbar-dark", "justify-self-end");
    showCredits.textContent = `Credits: ${profileCredits}`;
    navbar.append(showCredits);
    console.log(profileCredits);
  }
}
