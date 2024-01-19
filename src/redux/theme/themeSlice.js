import { createSlice } from "@reduxjs/toolkit";
import { statusTheme } from "../constants";

const themeInitialState = {
  status: statusTheme.light,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: themeInitialState,
  reducers: {
    setStatusTheme(state, action) {
      state.status = action.payload;
    },
  },
});

// Экспортируем генераторы экшенов и редюсер
export const { setStatusTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;