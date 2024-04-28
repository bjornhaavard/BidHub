import { defaultAvatarImage } from "../../api/constants.js";
import { renderProfileAdminButtons } from "../listings/renderAdminButtons.js";
import { getName } from "../../api/helpers/getName.js";
import { getProfile } from "../../api/listings/profile.js";

import { displayMessage } from "../shared/displayMessage.js";

export async function displayProfileData(profileData) {
  const fetchedProfile = await getProfile();
  const loggedInUsername = getName(fetchedProfile);
  const cardFooter = document.querySelector("#profile-footer");

  if (loggedInUsername) {
    const placeHolder = document.querySelector("#profile-spinner");
    try {
      profileData = fetchedProfile;
      if (profileData && placeHolder) {
        placeHolder.style.display = "none";
      }
      const { name, avatar, email, credits } = profileData;
      console.log(profileData);
      const profileImage = document.getElementById("profile-img");

      profileImage.src = avatar || defaultAvatarImage;

      // Display the user's name
      const nameElement = document.getElementById("profile-name");
      nameElement.textContent = `Name: ${name}`;

      // Display the user's email
      const emailElement = document.getElementById("profile-email");
      emailElement.textContent = `Email: ${email}`;

      // Display the user's credits
      const creditsElement = document.getElementById("profile-credits");
      creditsElement.textContent = `Credits: ${credits}`;

      //   uploadProfilePicture();

      const adminButtons = renderProfileAdminButtons(loggedInUsername);
      if (adminButtons) {
        cardFooter.append(adminButtons);
        return profileData;
      }
    } catch (error) {
      console.log(error);
      displayMessage("#profile-error", error, "danger");
      return;
    }
  }
}
