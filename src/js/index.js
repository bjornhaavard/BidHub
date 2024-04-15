// Define the router function
import * as handlers from "./handlers/index.js";
import { displayListings } from "./handlers/displayListing.js";
import { displayProfileData } from "./components/profile/profilePage.js";

function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/index.html":
    case "BidHub/":
    case "BidHub/index.html":
      // Handle the root path
      displayProfileData();
      displayListings();

      break;

    case "/auth/profile/":
    case "/auth/profile/index.html":
    case "/BidHub/auth/profile/index.html":
    case "/BidHub/auth/profile/":
      // Handle the profile path
      displayProfileData();
      handlers.logOut();

      break;

    case "/auth/login/":
    case "/auth/login/index.html":
      handlers.setLoginFormListener();
      console.log("This is the login page");
      break;

    case "/auth/register/":
    case "/auth/register/index.html":
      handlers.setRegisterFormListener();
      console.log("This is the register page");
      break;

    case "/contact":
      // Handle the contact path
      console.log("Contact us at example@example.com");
      break;
  }
}
// Calling the router function
router();
