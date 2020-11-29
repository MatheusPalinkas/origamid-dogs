import { BASE_URL } from "./BASE_URL";

export const photoPost = (token, formData) => ({
  url: `${BASE_URL}/api/photo`,
  options: {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  },
});

export const photosGet = ({ page, total, user }) => ({
  url: `${BASE_URL}/api/photo?_page=${page}&_total=${total}&_user=${user}`,
  options: {
    method: "GET",
    cache: "no-store",
  },
});

export const photoGet = (id) => ({
  url: `${BASE_URL}/api/photo/${id}`,
});

export const photoDelete = (id, token) => ({
  url: `${BASE_URL}/api/photo/${id}`,
  options: {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
});
