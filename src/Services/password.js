import { BASE_URL } from "./BASE_URL";

export const passwordLostPost = (BODY) => ({
  url: `${BASE_URL}/api/password/lost`,
  options: {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(BODY),
  },
});

export const passwordResetPost = (BODY) => ({
  url: `${BASE_URL}/api/password/reset`,
  options: {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(BODY),
  },
});
