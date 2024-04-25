import { getDetails } from "../api/listings/getListings.js";
import { getParamFromQueryString } from "../api/helpers/getParamFromQueryString.js";
import { formatCountdown, getTimeRemaining } from "../api/helpers/timeRemain.js";
import { displayMessage } from "../components/shared/displayMessage.js";
// import { renderAdminButtons } from "../components/posts/renderAdminButtons.js";

export async function displaySingleListing(container = "#listing-container") {
  const parentElement = document.querySelector(container);
  const placeHolder = document.querySelector("#spinner");
  const id = getParamFromQueryString("id");

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
  console.log(listing);

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

  media.slice(0, 3).forEach((imageUrl, index) => {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("col-md-6", "mb-3");
    imageRow.append(imageDiv);

    const img = document.createElement("img");
    img.classList.add("img-fluid", "rounded");
    img.src = imageUrl;
    img.alt = `Image ${index + 1}`; // Set alt text for each image
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
  sellerImg.src = avatar;
  sellerImg.alt = "Seller Avatar";
  sellerImg.width = 50;
  sellerImg.height = 50;
  sellerDiv.append(sellerImg);

  const sellerPara = document.createElement("p");
  sellerPara.classList.add("align-self-center", "mx-3");
  sellerPara.textContent = `Seller: ${name}`;
  sellerDiv.append(sellerPara);

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
  } else {
    // Handle the case where there are no bids
    const noBidsPara = document.createElement("p");
    noBidsPara.textContent = "No bids yet.";
    detailsCol.append(noBidsPara);
  }

  // Create the bidding input
  const bidAmountInput = document.createElement("input");
  bidAmountInput.setAttribute("type", "number");
  bidAmountInput.setAttribute("name", "amount");
  bidAmountInput.setAttribute("placeholder", "Enter your bid amount");
  bidAmountInput.classList.add("form-control");

  // Create the submit button
  const submitButton = document.createElement("button");
  submitButton.classList.add("btn", "btn-primary", "btn-outline-light", "my-2");
  submitButton.textContent = "Place Bid";

  // Handle button click (replace with your logic)
  submitButton.addEventListener("click", () => {
    const bidAmount = bidAmountInput.value;

    // Validate bid amount (optional)
    if (isNaN(bidAmount) || bidAmount <= 0) {
      alert("Please enter a valid bid amount.");
      return;
    }

    // Simulate bid submission (replace with your actual logic)
    alert(`You submitted a bid of ${bidAmount}`);

    // You may want to clear the input after submission (optional)
    bidAmountInput.value = "";
  });

  // Add the input and button to the container
  detailsCol.append(bidAmountInput, submitButton);

  //   renderAdminButtons(div, name, id);

  //   getPostComments();
}
