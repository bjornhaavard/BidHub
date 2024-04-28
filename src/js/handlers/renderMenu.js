// import { getToken } from "../api/helpers/getToken.js";
// import { getProfileCredits } from "../api/helpers/getName.js";
// import { displayProfileData } from "../components/profile/profilePage.js";

// export async function renderUserCredits(listingElement) {
//   const token = getToken();
//   if (token) {
//     const profileCredits = await getProfileCredits();

//     console.log(listingElement);
//     const creditsElement = document.createElement("div");
//     creditsElement.classList.add("listing-credit-info"); // Adjust class name
//     creditsElement.textContent = `Credits Required: ${listingElement.credits}, Available Credits: ${profileCredits}`;
//     listingElement.appendChild(creditsElement);
//   }
//   const profile = displayProfileData(profile);
//   console.log(profile);
// }

//   const token = getToken();

//   if (token) {
//     const profileCredits = await getProfileCredits();
//     const navbar = document.getElementById("profile-credits");
//     const showCredits = document.createElement("div");
//     showCredits.classList.add("card-text", "navbar-dark", "justify-self-end");
//     showCredits.textContent = `Credits: ${profileCredits}`;
//     navbar.append(showCredits);
//     console.log(profileCredits);
//   }
