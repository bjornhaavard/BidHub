import { getName } from "../../helpers/storage.js";

export function renderAdminButtons(parent, name) {
  const loggedInUsername = getName();

  if (loggedInUsername !== name) {
    return;
  }
}

renderAdminButtons();
