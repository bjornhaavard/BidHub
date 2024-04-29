import { login } from "../api/auth/login.js";
import { displayMessage } from "../components/shared/displayMessage.js";
import * as storage from "../storage/index.js";

/**
 * Sets up a form listener for the login form to handle form submission.
 * Upon submission, it attempts to log in using the provided credentials,
 * saves the access token and user profile to the local storage on success,
 * and redirects to the profile page. Displays an error message on failure.
 *
 * @function
 * @memberof module:authentication
 * @throws {Error} If login fails, an error message is displayed.
 * @returns {void}
 */
export function setLoginFormListener() {
  /**
   * Event handler for the login form submission.
   *
   * @param {Event} event - The form submission event.
   * @returns {Promise<void>}
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    const loggedOut = localStorage.getItem("loggedOut");

    if (loggedOut) {
      displayMessage("#logout-message", "You are logged out", "success");

      // Clear the logged-out flag now that it has been displayed
      localStorage.removeItem("loggedOut");
    }

    try {
      // Attempt to log in with the provided credentials
      const result = await login(profile);

      // Destructure the result to get accessToken and userProfile
      const { accessToken, ...userProfile } = result;

      // Save the access token and user profile to local storage
      storage.save("token", accessToken);
      storage.save("profile", userProfile);

      // Redirect to the profile page
      location.href = "/BidHub/auth/profile/" || "/auth/profile/";
    } catch (error) {
      // Display an error message if login fails
      displayMessage("#message", error.message, "danger");
    }
  };

  // Get the login form element
  const form = document.querySelector("#loginForm");

  // Attach the form submission event listener
  form.addEventListener("submit", handleSubmit);
}
