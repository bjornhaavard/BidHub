import * as storage from "../storage/index.js";

export function logOut() {
  const logoutButton = document.querySelector("#logout-button");
  logoutButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const shouldLogout = confirm("Are you sure you want to logout?");
    if (shouldLogout) {
      storage.remove("token");
      storage.remove("profile");
      window.location.href = "/BidHub/";
    }
  });
}

export function navLogOut() {
  const logoutNavButton = document.querySelector("#logout-link");
  logoutNavButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const shouldLogout = confirm("Are you sure you want to logout?");
    if (shouldLogout) {
      storage.remove("token");
      storage.remove("profile");
      window.location.href = "../../../BidHub/";
    }
  });
}
