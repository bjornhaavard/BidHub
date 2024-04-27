import { updateUserImage } from "../api/auth/updateProfileAvatar.js";

export function updateProfile() {
  const updateForm = document.querySelector("form#updateProfileForm");
  console.log(updateForm);
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

      //   window.location.pathname = "/auth/profile/index.html";
    });
  }
}
