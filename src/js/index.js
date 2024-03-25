// Define the router function

import { API_HOST_URL, API_LISTINGS } from "./api/constants.js";

function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/index.html":
      // Handle the root path
      console.log("Welcome to the homepage");
      break;
    case "/profile/":
    case "/profile/index.html":
      // Handle the profile path
      console.log("This is the profile page");
      break;
    case "/contact":
      // Handle the contact path
      console.log("Contact us at example@example.com");
      break;
  }
}
// Calling the router function
router();

console.log("api url: ", `${API_HOST_URL}/${API_LISTINGS} `);
