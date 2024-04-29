/**
 * Updates the user's profile information.
 *
 * This function handles form submission for updating the user's profile. It retrieves
 * the submitted data, attempts to update the profile image using the `updateUserImage`
 * function, and redirects the user to the profile page on success.
 *
 * @throws {Error}  - Re-throws any errors encountered during profile image update.
 */

import { updateUserImage } from "../api/auth/updateProfileAvatar.js";

export function updateProfile() {
  const updateForm = document.querySelector("form#updateProfileForm");

  if (updateForm) {
    updateForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const updateForm = e.target;
      const formData = new FormData(updateForm);
      const avatarUrl = formData.get("avatar");

      try {
        await updateUserImage(avatarUrl);
      } catch (error) {
        console.log(error);
      }

      window.location.pathname = "/BidHub/auth/profile/";
    });
  }
}
