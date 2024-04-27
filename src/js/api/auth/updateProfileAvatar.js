import { displayMessage } from "../../components/shared/displayMessage.js";
import * as storage from "../../storage/index.js";
import { API_PROFILE_IMG } from "../constants.js";

export async function updateUserImage(avatar) {
  try {
    const profile = JSON.parse(storage.load("profile"));
    console.log(profile);
    const response = await fetch(`${API_PROFILE_IMG}${profile.name}/media`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storage.load("token")}`,
      },
      body: JSON.stringify({ avatar: avatar }),
    });
    console.log(response);
    if (response.ok) {
      profile.avatar = avatar;
      storage.save("profile", JSON.stringify(profile));
      return await response.json();
    }
  } catch (error) {
    console.log(error);
    displayMessage("#profile-error", error, "danger");
  }
}
