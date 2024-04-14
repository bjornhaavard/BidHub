// Define the router function

import { setRegisterFormListener } from "./handlers/register.js";
import { displayListings } from "./handlers/displayListing.js";
import { setLoginFormListener } from "./handlers/login.js";

function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/index.html":
      // Handle the root path
      displayListings();

      break;

    case "../profile/":
    case "../profile/index.html":
      // Handle the profile path

      break;

    case "../auth/login/":
    case "../auth/login/index.html":
      setLoginFormListener();

      break;

    case "./auth/register/":
    case "./auth/register/index.html":
      setRegisterFormListener();

      break;

    case "./contact":
      // Handle the contact path
      console.log("Contact us at example@example.com");
      break;
  }
}
// Calling the router function
router();
