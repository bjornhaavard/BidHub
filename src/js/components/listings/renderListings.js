// import { getTimeRemaining, formatCountdown } from "../../api/helpers/timeRemain.js";
import { parseDate } from "../../api/helpers/parse.js";

export function renderListings(listings, parent) {
  const container = document.querySelector(parent);
  container.innerHTML = "";

  listings.map(function (listing) {
    const listingContainer = document.querySelector("#listings-container");
    const {
      id,
      title,
      endsAt,
      media,
      seller: { name },
    } = listing;
    console.log(listing);

    const divContainer = document.createElement("div");
    divContainer.classList.add("col", "col-md-6", "col-lg-4");
    listingContainer.append(divContainer);

    // const countdownElement = document.createElement("span");
    // countdownElement.classList.add("countdown");

    // const endTime = listing.endsAt;
    // const timeRemaining = getTimeRemaining(endTime);
    // countdownElement.textContent = formatCountdown(timeRemaining);

    // // Update the countdown every second
    // const intervalId = setInterval(() => {
    //   const newTimeRemaining = getTimeRemaining(endTime);
    //   countdownElement.textContent = formatCountdown(newTimeRemaining);

    //   // Clear interval if listing has ended
    //   if (newTimeRemaining.days === 0 && newTimeRemaining.hours === 0 && newTimeRemaining.minutes === 0 && newTimeRemaining.seconds === 0) {
    //     clearInterval(intervalId);
    //   }
    // }, 1000);

    // Add the countdown element to the listing container

    const divCard = document.createElement("div", "col-lg-4");
    divCard.classList.add("card");
    divContainer.append(divCard);
    // divContainer.append(countdownElement);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("card-img-container");
    divCard.append(imgContainer);

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = media;
    divCard.append(img);

    const divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body", "card-bg");
    divCard.append(divCardBody);

    const divSeller = document.createElement("p");
    divSeller.classList.add("card-text");
    divSeller.textContent = `${name}`;
    divCardBody.append(divSeller);

    const heading = document.createElement("h5");
    heading.classList.add("card-title");
    heading.textContent = title;

    divCardBody.append(heading);

    const ends = document.createElement("p");
    ends.classList.add("countdown");
    ends.textContent = `Ends: ${parseDate(endsAt)}`;
    divCardBody.append(ends);

    const link = document.createElement("a");
    link.href = `/details.html?id=${id}`;
    link.classList.add("btn", "btn-primary", "btn-outline-light");
    link.textContent = "View";

    divCardBody.append(link);
  });
}
