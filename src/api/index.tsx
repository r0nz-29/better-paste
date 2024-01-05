const BASE = "http://localhost:8080";

export const endpoints = {
  CREATE_PASTE: BASE + "/paste",
  GET_PASTE_BY_ID: (id: string) => BASE + "/paste/" + id,
  UPDATE_PASTE_BY_ID: (id: string) => BASE + "/paste/" + id
}