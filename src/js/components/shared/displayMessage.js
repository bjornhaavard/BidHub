/**
 * Displays a message in a specified parent container with a given alert type.
 *
 * @param {string} parent - The CSS selector of the parent container where the message will be displayed.
 * @param {string} message - The message to be displayed within the alert container.
 * @param {string} alertType - The type of alert (e.g., "success", "warning", "danger") to style the message.
 *
 * @example
 * // Display a success message in a container with the ID "messageContainer"
 * displayMessage("#messageContainer", "Operation successful!", "success");
 *
 * @example
 * // Display an error message in a container with the class "error-container"
 * displayMessage(".error-container", "Error occurred!", "danger");
 */

export function displayMessage(parent, message, alertType) {
  const container = document.querySelector(parent);

  if (container) {
    container.innerHTML = `<div class="alert alert-${alertType} text-center mt-3">${message}</div>`;
  }
}
