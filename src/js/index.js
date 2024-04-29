// Define the router function
// import { renderAdminButtons } from "./components/listings/renderAdminButtons.js";
import * as handlers from "./handlers/index.js";
import { displayListings } from "./handlers/displayListing.js";
import { searchListingsHandler } from "./handlers/searchListings.js";
import { displayProfileData } from "./components/profile/profilePage.js";
import { hidelinks, hideLogin, hideLogout } from "../src/js/api/helpers/hideLink.js";
import { updateProfile } from "./handlers/updateProfileImage.js";
import { sortListingsHandler } from "./handlers/sortListings.js";
import { navLogOut } from "./handlers/logOut.js";
// import { renderUserCredits } from "./handlers/renderMenu.js";

function router() {
  const path = window.location.pathname;
  console.log(path);
  switch (path) {
    case "/":
    case "/index.html":
    case "/BidHub/":
    case "/BidHub/index.html":
      // Handle the root path

      displayListings();
      searchListingsHandler();
      hidelinks();
      hideLogin();
      sortListingsHandler();
      navLogOut();
      hideLogout();
      // renderUserCredits();

      break;

    case "/auth/profile/":
    case "/auth/profile/index.html":
    case "/BidHub/auth/profile/index.html":
    case "/BidHub/auth/profile/":
      // Handle the profile path
      hideLogin();
      displayProfileData();
      updateProfile();
      handlers.logOut();

      break;
    case "/auth/profile/updateProfileImage/":
    case "/auth/profile/updateProfileImage/index.html":
    case "/BidHub/auth/profile/updateProfileImage/":
    case "/BidHub/auth/profile/updateProfileImage/index.html":
      updateProfile();

      break;

    case "/auth/login/":
    case "/auth/login/index.html":
    case "/BidHub/auth/login/index.html":
    case "/BidHub/auth/login/":
      handlers.setLoginFormListener();
      hidelinks();

      break;

    case "/auth/register/":
    case "/BidHub/auth/register/":
    case "/auth/register/index.html":
    case "/BidHub/auth/register/index.html":
      handlers.setRegisterFormListener();

      break;

    case "/auctions/":
    case "/BidHub/auctions/":
    case "/auctions/index.html":
    case "/BidHub/auctions/index.html":
      handlers.displaySingleListing();
      hidelinks();
      hideLogin();
      hideLogout();
      navLogOut();
      break;

    case "/BidHub/auctions/newListing/":
    case "/auctions/newListing/":
    case "/BidHub/auctions/newListing/index.html":
    case "/auctions/newListing/index.html":
      handlers.createListingFormListener();
  }
}
// Calling the router function
router();
