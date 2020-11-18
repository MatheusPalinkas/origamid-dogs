import { BASE_URL } from "./BASE_URL";

export const userGet = (token) => {
  return fetch(`${BASE_URL}/api/user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
