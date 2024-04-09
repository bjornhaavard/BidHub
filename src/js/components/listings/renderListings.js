export function renderListings(listings, parent) {
  const container = document.querySelector(parent);
  container.innerHTML = "";

  listings.map(function (listing) {
    const listingContainer = document.querySelector("#listings-container");
    const {
      id,
      title,
      media,
      author: { avatar, name },
    } = listing;

    const divContainer = document.createElement("div");
    divContainer.classList.add("col");

    listingContainer.append(divContainer);

    const divCard = document.createElement("div");
    divCard.classList.add("card");

    divContainer.append(divCard);

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = media;

    divCard.append(img);

    const divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");

    divCard.append(divCardBody);

    const heading = document.createElement("h5");
    heading.classList.add("card-title");
    heading.textContent = title;
  });
}
