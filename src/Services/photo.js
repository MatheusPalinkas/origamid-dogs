import { BASE_URL } from "./BASE_URL";

export const photoPost = (token, formData) => ({
  url: `${BASE_URL}/api/photo`,
  options: {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  },
});
