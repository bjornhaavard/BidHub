import { sortListings } from "../api/listings/sortListings.js";
import { renderListings } from "../components/listings/renderListings.js";

/**
 * Handles the sorting of posts based on user interaction with sort links.
 * Retrieves the sorting parameters from the clicked link, makes an API call to
 * sort the posts, and then renders the sorted posts in the specified container.
 *
 * @async
 * @function
 * @name sortListingsHandler
 *
 * @example
 * // Attach the sortPostsHandler function to handle sorting of posts
 * sortPostsHandler();
 */

export async function sortListingsHandler() {
  const sortLinks = document.querySelectorAll("#sortDropdown li a");

  sortLinks.forEach((link) => {
    /**
     * Represents the event triggered when a sort link is clicked.
     * @typedef {Event} SortLinkClickEvent
     */

    link.addEventListener("click", async (event) => {
      event.preventDefault();
      /**
       * The sorting parameter obtained from the clicked sort link.
       * @type {string}
       */
      const sortParam = event.target.dataset.sort;
      const sortOrderParam = event.target.dataset.sortOrder;

      const listings = await sortListings(sortParam, sortOrderParam);

      renderListings(listings, "#listings-container");
    });
  });
}
