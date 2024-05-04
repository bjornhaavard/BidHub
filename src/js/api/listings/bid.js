import { API_CREATE_LISTING } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

const method = "post";

export async function bid(id, amount) {
  const url = `${API_CREATE_LISTING}/${id}/bids`;

  const response = await fetchWithToken(url, {
    method,
    body: JSON.stringify(amount),
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  }

  throw new Error(result.errors[0].message);
}
