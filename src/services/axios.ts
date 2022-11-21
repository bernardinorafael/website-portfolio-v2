import axios from "axios"

export const app = axios.create({
  baseURL: "https://api.github.com/users/bernardinorafael",
})
