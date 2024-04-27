import { displayMessage } from "../components/shared/displayMessage.js";
import { API_PROFILE_IMG } from "../api/constants.js";

export async function updateProfileMedia(name, imageUrl) {
  const url = `${API_PROFILE_IMG.replace("{name}/media", name)}`;
  console.log(url);
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // Add authorization headers if required by your API
      },
      body: JSON.stringify({
        avatar: imageUrl,
      }),
    });
    console.log(response);
    if (!response.ok) {
      throw new Error(`Failed to update profile media: ${await response.text()}`);
    }

    console.log("Profile media updated successfully!");
  } catch (error) {
    console.error("Error updating profile media:", error);
    // Handle errors appropriately (e.g., display error message to user)
  }
}

// ... rest of your profile edit code

// Example usage within the profile edit functionality
const profileName = document.getElementById("profile-name").textContent; // Assuming this holds the user's name
const newImageUrl = document.getElementById("profile-image-url").value; // Assuming this is an input field for the new image URL

updateProfileMedia(profileName, newImageUrl)
  .then(() => {
    // Update UI or display success message (optional)
  })
  .catch((error) => {
    displayMessage("#profile-error", error.message, "danger");
  });
