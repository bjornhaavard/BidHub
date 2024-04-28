export function hidelinks() {
  const profileLink = document.getElementById("profile-link");
  const token = localStorage.getItem("token");

  if (!token) {
    profileLink.style.display = "none";
  }
}

export function hideLogin() {
  const loginLink = document.getElementById("login-link");
  const token = localStorage.getItem("token");
  if (token) {
    loginLink.style.display = "none";
  }
}

export function hideLogout() {
  const logoutLink = document.getElementById("logout-link");
  const token = localStorage.getItem("token");
  if (!token) {
    logoutLink.style.display = "none";
  }
}
