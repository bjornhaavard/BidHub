import { API_BASE, API_HOST_URL } from "../constants.js";

const action = "/auction/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = API_HOST_URL + API_BASE + action;

  const data = {};

  const body = JSON.stringify(profile);
  const response = await fetch(registerURL, {
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
