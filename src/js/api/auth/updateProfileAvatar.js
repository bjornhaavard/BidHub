import { displayMessage } from "../../components/shared/displayMessage.js";
import * as storage from "../../storage/index.js";
import { API_PROFILE_IMG } from "../constants.js";

export async function updateUserImage(avatar) {
  try {
    const userProfile = JSON.parse(storage.load("userProfile"));
    const response = await fetch(`${API_PROFILE_IMG}${userProfile.name}/media`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storage.load("token")}`,
      },
      body: JSON.stringify({ avatar: avatar }),
    });
    if (response.ok) {
      userProfile.avatar = avatar;
      storage.save("userProfile", JSON.stringify(userProfile));
      return await response.json();
    }
  } catch (error) {
    displayMessage("#profile-error", error, "danger");
  }
}
