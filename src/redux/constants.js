import axios from "axios";

export const statusFilters = Object.freeze({
  all: "all",
  active: "active",
  selected: "selected",
})

export const statusTheme = Object.freeze({ 
  light: "light",
  dark: "dark", 
})

export const $instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});