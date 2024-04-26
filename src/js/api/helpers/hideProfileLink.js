export function hidelinks() {
  const profileLink = document.getElementById("profile-link");
  const token = localStorage.getItem("token");
  if (!token) {
    profileLink.style.display = "none";
  }
}
