import { getListings } from "../api/listings/getListings.js";
import { getParamFromQueryString } from "../helpers/getParamFromQueryString.js";
// import { renderAdminButtons } from "../components/posts/renderAdminButtons.js";
import { getPostComments } from "../helpers/makeComments.js";

// import { defaultAvatarImage } from "../api/constants.js";

/**
 * Displays a post on the specified container element.
 *
 * @async
 * @function
 * @param {string} [container="#listing-container"] - The CSS selector for the container element where the post will be displayed.
 * @returns {Promise<void>} - A Promise that resolves once the post is displayed.
 * @throws {Error} - If the post ID is missing, redirects to the feed page.
 */

export async function displayPost(container = "#listing-container") {
  const parentElement = document.querySelector(container);
  const placeHolder = document.querySelector("#spinner");
  const id = getParamFromQueryString("id");

  if (!id) {
    location.href = "/";
  }

  const listing = await getListings(id);

  if (listing) {
    placeHolder.style.display = "none";
  }
  const {
    title,
    body,
    media,
    seller: { avatar, name },
  } = Listing;

  parentElement.classList.add("d-flex", "flex-column", "align-items-center");
  /**
   * Renders admin buttons for the post.
   *
   * @param {HTMLElement} container - The container element to which admin buttons will be appended.
   * @param {string} authorName - The name of the post author.
   * @param {string} postId - The ID of the post.
   */

  //   renderAdminButtons(div, name, id);

  getPostComments();
}
