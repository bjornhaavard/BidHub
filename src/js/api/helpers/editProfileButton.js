const editProfileButton = document.getElementById("edit-profile-btn");
const profilePictureInput = document.getElementById("profile-picture-input");
const profileImage = document.getElementById("profile-img");

editProfileButton.addEventListener("click", () => {
  profilePictureInput.click();
  const profilePictureInput = document.createElement("input");
  profilePictureInput.setAttribute("type", "file");
});

profilePictureInput.addEventListener("change", async (event) => {
  const selectedFile = event.target.files[0];

  // Validate file type and size (optional)

  const response = await uploadProfilePicture(selectedFile); // Replace with your upload function

  if (response.ok) {
    const newProfilePictureUrl = response.data.imageUrl; // Replace with your response structure
    profileImage.src = newProfilePictureUrl;
  } else {
    console.error("Error uploading profile picture:", response.statusText);
    // Handle upload errors (e.g., display error message)
  }
});

export async function uploadProfilePicture(imageFile) {
  // Implement your logic to send the image file to the server using an API call
  // Replace with your actual API endpoint and request details
  const formData = new FormData();
  formData.append("profilePicture", imageFile);
  const response = await fetch("/api/users/me/profile-picture", {
    method: "POST",
    body: formData,
  });
  return response;
}
