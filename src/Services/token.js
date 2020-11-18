import { BASE_URL } from "./BASE_URL";

export const tokenPost = async (BODY) => {
  return fetch(`${BASE_URL}/jwt-auth/v1/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(BODY),
  }).then((res) => res.json());
};
