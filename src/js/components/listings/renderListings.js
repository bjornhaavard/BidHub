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

    const divContainer = document.createElement("div");
    divContainer.classList.add("col", "col-md-6", "col-lg-4");
    listingContainer.append(divContainer);

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
    divSeller.style.textDecoration = "underline";
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
    link.href = `/auctions/index.html?id=${id}`;
    link.classList.add("btn", "btn-primary", "btn-outline-light");
    link.textContent = "View";

    divCardBody.append(link);
  });
}
