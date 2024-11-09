import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filters.name;

export const { setFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
