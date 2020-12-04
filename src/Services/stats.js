import { BASE_URL } from "./BASE_URL";

export const statsGet = (token) => ({
  url: `${BASE_URL}/api/stats`,
  options: {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
  }}
);
