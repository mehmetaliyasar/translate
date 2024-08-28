import axios from "axios";

export const api = axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "cb956e4f50msh538e2e33fddf4e2p13255ejsnd720c852d2ab",
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
  },
});
