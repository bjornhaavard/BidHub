import { defaultAvatarImage } from "../../api/constants.js";
import { renderProfileAdminButtons } from "../listings/renderAdminButtons.js";
import { getName } from "../../api/helpers/getName.js";
import { getProfile } from "../../api/listings/profile.js";
import { displayMessage } from "../shared/displayMessage.js";
import { displaySingleListing } from "../../handlers/displayListingDetail.js";
import { API_PROFILE_LISTINGS } from "../constant.js";
import { shortenDateFormat } from "../../api/helpers/formatDate.js";

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
      const { name, avatar, email, credits, listings } = profileData;

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

      // --- Listings Section ---
      const listingsSection = document.getElementById("listings");
      const listingsContainer = document.createElement("section");

      listingsContainer.id = "profile-listings";
      listingsContainer.classList.add("mt-3"); // Add some margin for better separation

      if (listings && listings.length > 0) {
        const listingsHeader = document.createElement("h3");
        listingsHeader.textContent = "Listings";
        listingsContainer.append(listingsHeader);

        listings.forEach((listing) => {
          const listingElement = document.createElement("div");
          listingElement.classList.add("mb-2");

          // Create card body
          const cardBody = document.createElement("div");
          const hrElement = document.createElement("hr");
          cardBody.append(hrElement);
          cardBody.classList.add("card-body");

          // Create card title
          const cardTitle = document.createElement("h5");
          cardTitle.classList.add("card-title");
          cardTitle.textContent = listing.title;

          // Create "Ends at" badge
          const endsAtBadge = document.createElement("span");
          endsAtBadge.classList.add("badge", "bg-warning", "text-dark");
          const shortenedDate = shortenDateFormat(listing.endsAt);
          endsAtBadge.textContent = `Ends at: ${shortenedDate}`;

          // Create view listing button
          const viewButton = document.createElement("a");
          viewButton.classList.add("btn", "btn-primary", "btn-sm", "mt-2", "btn-outline-light");
          viewButton.textContent = "View Listing";

          // Assuming you have a function to handle listing details access (replace with your logic)
          viewButton.addEventListener("click", () => {
            viewButton.href = `${API_PROFILE_LISTINGS}${listing.id}`;
            displaySingleListing(listing.id); // Replace with your implementation
          });

          // Append elements to card body
          cardBody.append(cardTitle, endsAtBadge);

          // Append card body and view button to listing element
          listingElement.append(cardBody, viewButton);

          listingsSection.append(listingElement);
        });
      } else {
        listingsContainer.innerHTML = "No listings found.";
        listingsContainer.classList.add("badge", "bg-warning", "text-dark", "p-2", "mb-3");
        listingsSection.append(listingsContainer);
      }

      const adminButtons = renderProfileAdminButtons(loggedInUsername);
      if (adminButtons) {
        cardFooter.append(adminButtons);
        return profileData;
      }
    } catch (error) {
      displayMessage("#profile-error", error, "danger");
      return;
    }
  }
}
