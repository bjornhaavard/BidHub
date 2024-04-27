import { updateUserImage } from "../api/auth/updateProfileAvatar.js";

export function updateProfile() {
  const updateForm = document.querySelector("form#updateProfilForm");

  if (updateForm) {
    updateForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const updateForm = e.target;
      const formData = new FormData(updateForm);
      const avatarUrl = formData.get("avatar");
      updateUserImage(avatarUrl).then(() => {
        window.location.pathname = "/auth/profile/index.html";
      });
      console.log(avatarUrl);
    });
  }
}
