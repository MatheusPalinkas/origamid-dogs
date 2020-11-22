import { BASE_URL } from "./BASE_URL";

export const userGet = (token) => {
  return fetch(`${BASE_URL}/api/user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

export const userPost = (BODY) => ({
  url: `${BASE_URL}/api/user`,
  options: {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(BODY),
  },
});
