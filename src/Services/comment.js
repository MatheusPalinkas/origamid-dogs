import { BASE_URL } from "./BASE_URL";

export const commentPost = (id, body, token) => ({
  url: `${BASE_URL}/api/comment/${id}`,
  options: {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  },
});
