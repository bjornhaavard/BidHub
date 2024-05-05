import { getDetails } from "../api/listings/getListings.js";
import { getParamFromQueryString } from "../api/helpers/getParamFromQueryString.js";
import { formatCountdown, getTimeRemaining } from "../api/helpers/timeRemain.js";
import { displayMessage } from "../components/shared/displayMessage.js";
import { bid } from "../api/listings/bid.js";
import { getToken } from "../api/helpers/getToken.js";
import { defaultAvatarImage } from "../api/constants.js";
import { getProfileCredits } from "../api/helpers/getName.js";
import { errorImage, defaultImage } from "../components/images/index.js";

export async function displaySingleListing(container = "#listing-container") {
  const parentElement = document.querySelector(container);
  const placeHolder = document.querySelector("#spinner");
  const id = getParamFromQueryString("id");

  const token = getToken();

  if (!id) {
    location.href = "/";
  }

  const listing = await getDetails(id);

  if (listing) {
    placeHolder.style.display = "none";
  }
  const {
    title,
    description,
    media,
    endsAt,
    bids,
    seller: { avatar, name },
  } = listing;

  const row = document.createElement("div");
  row.classList.add("container", "mt-5");
  parentElement.append(row);

  const innerRow = document.createElement("div");
  innerRow.classList.add("row");
  row.append(innerRow);

  // Image Section (Left)
  const imageCol = document.createElement("div");
  imageCol.classList.add("col-md-5", "card-body", "p-3", "my-2", "mx-2");
  innerRow.append(imageCol);

  const imageRow = document.createElement("div");
  imageRow.classList.add("row");
  imageCol.append(imageRow);

  media.slice(0, 3).forEach((imageUrl) => {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("col-md-6", "mb-3");
    imageRow.append(imageDiv);

    const img = document.createElement("img");
    img.classList.add("img-fluid", "rounded");

    if (imageUrl === null) {
      img.src = defaultImage;
    }
    img.src = imageUrl;

    // If theres is an error in the image url handle this here;

    img.onerror = function () {
      this.src = errorImage;
    };

    imageDiv.append(img);
  });

  // Content Section (Left)
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("col-md-8", "mt-3"); // Adjust margin as needed
  imageCol.append(contentDiv);

  const heading = document.createElement("h2");
  heading.textContent = title;
  contentDiv.append(heading);

  const descriptionPara = document.createElement("p");
  descriptionPara.textContent = description;
  contentDiv.append(descriptionPara);

  // Auction Details (Right)
  const detailsCol = document.createElement("div");
  detailsCol.classList.add("col-md-4", "card-body", "p-3", "my-2", "mx-2");
  innerRow.append(detailsCol);

  const detailsHeading = document.createElement("h3");
  detailsHeading.textContent = "Auction Details";
  detailsCol.append(detailsHeading);

  const hr = document.createElement("hr");
  detailsCol.append(hr);

  const endsAtPara = document.createElement("p");
  endsAtPara.textContent = "Time remain: ";
  const countdownSpan = document.createElement("span");
  countdownSpan.classList.add("countdown");
  countdownSpan.dataset.endat = endsAt; // Set data attribute
  endsAtPara.append(countdownSpan);
  detailsCol.append(endsAtPara);

  // Update countdown
  const timeRemaining = getTimeRemaining(endsAt);
  countdownSpan.textContent = formatCountdown(timeRemaining);
  const updateCountdown = setInterval(() => {
    const newTimeRemaining = getTimeRemaining(endsAt);
    countdownSpan.textContent = formatCountdown(newTimeRemaining);

    // Handle ending the countdown (replace with your logic)
    if (newTimeRemaining.days === 0 && newTimeRemaining.hours === 0 && newTimeRemaining.minutes === 0 && newTimeRemaining.seconds === 0) {
      clearInterval(updateCountdown);
      // Display message or perform actions when auction ends
      displayMessage("#message", "Auction has ended", "info");
    }
  }, 1000); // Update every second

  const sellerDiv = document.createElement("div");
  sellerDiv.classList.add("seller", "d-flex");
  detailsCol.append(sellerDiv);

  const hr2 = document.createElement("hr");
  detailsCol.append(hr2);

  const sellerImg = document.createElement("img");
  sellerImg.classList.add("rounded-circle", "my-2");
  sellerImg.src = avatar || defaultAvatarImage;
  sellerImg.alt = "Seller Avatar";
  sellerImg.width = 50;
  sellerImg.height = 50;
  sellerDiv.append(sellerImg);

  const sellerPara = document.createElement("p");
  sellerPara.classList.add("align-self-center", "mx-3");
  sellerPara.textContent = `Seller: ${name}`;
  sellerDiv.append(sellerPara);
  // const highestBid =
  if (bids) {
    let highestBidAmount = 0;
    let highestBidderName = "";

    // Find the highest bid using forEach and destructuring
    bids.forEach((bid) => {
      const { amount, bidderName } = bid; // Destructure directly within forEach

      if (amount > highestBidAmount) {
        highestBidAmount = amount;
        highestBidderName = bidderName;
      }
    });

    // Update bidsPara and bidderPara outside the loop to display the final highest bid
    const bidsPara = document.createElement("p");
    bidsPara.textContent = `Highest Bid: ${highestBidAmount} $`;
    detailsCol.append(bidsPara);

    const bidderPara = document.createElement("p");
    bidderPara.textContent = `Bidder: ${highestBidderName}`;
    detailsCol.append(bidderPara);

    const bidmessageDiv = document.createElement("div");
    bidmessageDiv.id = "message";
    sellerDiv.append(bidmessageDiv);

    // Create the bidding input
    const bidAmountInput = document.createElement("input");
    bidAmountInput.setAttribute("type", "number");
    bidAmountInput.setAttribute("min", `${highestBidAmount + 1}`);
    bidAmountInput.setAttribute("name", "amount");
    bidAmountInput.setAttribute("placeholder", "Enter your bid amount");
    bidAmountInput.classList.add("form-control");

    // Create the submit button
    const submitButton = document.createElement("button");
    submitButton.classList.add("btn", "btn-primary", "btn-outline-light", "my-2");
    submitButton.textContent = "Place Bid";

    // Handle button click (replace with your logic)
    submitButton.addEventListener("click", async () => {
      const bidAmount = bidAmountInput.value;

      // Validate bid amount (optional)
      if (isNaN(bidAmount) || bidAmount <= 0) {
        // alert("Please enter a valid bid amount.");
        return;
      }

      // Simulate bid submission (replace with your actual logic)

      try {
        await bid(id, { amount: Number(bidAmount) });
        displayMessage("#message", `You have made a bid of ${bidAmount} $`, "success");
        // Simulate a short delay to display the success message
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds

        // Redirect to the same page to refresh data (optional)
        window.location.reload(); // Or redirect to a specific page
      } catch (error) {
        displayMessage("#message", error.message, "danger");

        if (!token) {
          displayMessage("#message", "Please log in to place a bid", "danger");
        }
      }
      //   displayMessage("#message", error.message, "danger");

      // clear the input after submission
      bidAmountInput.value = "";
    });

    // Add the input and button to the container
    detailsCol.append(bidAmountInput, submitButton);
  } else {
    // Handle the case where there are no bids
    const noBidsPara = document.createElement("p");
    noBidsPara.textContent = "No bids yet.";
    detailsCol.append(noBidsPara);
  }
  const hr3 = document.createElement("hr");
  detailsCol.append(hr3);

  const outerContainer = document.createElement("div");
  outerContainer.classList.add("container", "col-md-12"); // Adjust class name
  parentElement.append(outerContainer);

  const bidsContainer = document.createElement("div");
  bidsContainer.classList.add("card-body", "p-3", "mb-5"); // Add a class for styling
  outerContainer.append(bidsContainer);

  const bidsHeading = document.createElement("h3");
  bidsHeading.classList.add("text-center", "mb-3"); // Add a class for styling
  bidsHeading.textContent = "Previous Bids:";
  bidsContainer.append(bidsHeading);

  const hr4 = document.createElement("hr");
  bidsContainer.append(hr4);

  if (token) {
    bids.forEach((bid) => {
      // Access bid details (amount, bidderName) from each object

      const { amount, bidderName, created } = bid;

      const dateObject = new Date(created);
      const formattedDate = dateObject.toLocaleString("no-NO");

      // Create a bid element

      const bidElement = document.createElement("p");
      bidElement.textContent = `Bid: ${amount} $ by ${bidderName}, created: ${formattedDate}`;

      // Add the bid element to the bids container

      bidsContainer.append(bidElement);
    });
    if (token) {
      const profileCredits = getProfileCredits();
      const navbar = document.getElementById("profile-credits");
      const showCredits = document.createElement("div");
      showCredits.classList.add("card-text", "navbar-dark", "justify-self-end");
      showCredits.textContent = `Credits: ${profileCredits}`;
      navbar.append(showCredits);
    }
  }
  //   container.append(allBids);
}
