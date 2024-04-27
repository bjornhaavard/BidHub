import * as storage from "../../storage/index.js";

export function getToken() {
  return storage.load("token");
}
