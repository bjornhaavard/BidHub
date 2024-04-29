import * as storage from "../../storage/index.js";
import { API_PROFILE_IMG } from "../constants.js";

export async function updateUserImage(avatar) {
  const profile = storage.load("profile");

  if (!profile) {
    throw new Error("Profile not found");
  }

  const response = await fetch(`${API_PROFILE_IMG}${profile.name}/media`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${storage.load("token")}`,
    },
    body: JSON.stringify({ avatar: avatar }),
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  }

  throw new Error(result.errors[0].message);
}
