// Define the router function
import { setRegisterFormListener } from "./handlers/register.js";

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

