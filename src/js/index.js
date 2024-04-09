// Define the router function
// import { getListings } from "./api/listings/getListings.js";
import { setRegisterFormListener } from "./handlers/register.js";
import { setLoginFormListener } from "./handlers/login.js";
import { displayListings } from "./handlers/displayListing.js";

function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/index.html":
      // Handle the root path

      displayListings();

      break;

    case "/profile/":
    case "/profile/index.html":
      // Handle the profile path
      console.log("This is the profile page");
      break;

    case "/auth/login/":
    case "/auth/login/index.html":
      setLoginFormListener();
      console.log("This is the login page");
      break;

    case "/auth/register/":
    case "/auth/register/index.html":
      setRegisterFormListener();
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
