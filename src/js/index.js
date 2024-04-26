// Define the router function
// import { renderAdminButtons } from "./components/listings/renderAdminButtons.js";
import * as handlers from "./handlers/index.js";
import { displayListings } from "./handlers/displayListing.js";
import { searchListingsHandler } from "./handlers/searchListings.js";
import { displayProfileData } from "./components/profile/profilePage.js";
import { hidelinks, hideLogin } from "./api/helpers/hideLink.js";

function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/index.html":
    case "BidHub/":
    case "BidHub/index.html":
      // Handle the root path

      displayListings();
      searchListingsHandler();
      hidelinks();
      hideLogin();

      break;

    case "/auth/profile/":
    case "/auth/profile/index.html":
    case "/BidHub/auth/profile/index.html":
    case "/BidHub/auth/profile/":
      // Handle the profile path
      hideLogin();
      displayProfileData();
      handlers.logOut();

      break;

    case "/auth/login/":
    case "/auth/login/index.html":
      handlers.setLoginFormListener();
      hidelinks();

      break;

    case "/auth/register/":
    case "/auth/register/index.html":
      handlers.setRegisterFormListener();

      break;

    case "/auctions/":
    case "/auctions/index.html":
      handlers.displaySingleListing();
      hidelinks();
      hideLogin();
      break;

    case "/auctions/newListing/":
    case "/auctions/newListing/index.html":
      handlers.createListingFormListener();
  }
}
// Calling the router function
router();
