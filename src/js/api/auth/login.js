import { API_BASE, API_HOST_URL } from "../constants.js";

const action = "/auction/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = API_HOST_URL + API_BASE + action;

  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  }

  throw new Error(result.errors[0].message);
}
