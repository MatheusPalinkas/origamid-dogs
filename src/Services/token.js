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

export const tokenPostValidate = async (token) => {
  return fetch(`${BASE_URL}/jwt-auth/v1/token/validate`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
