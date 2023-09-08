import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 0,
  sort: {
    sortRender: "popularity",
    sortBy: "rating",
    index: 0,
  }
};

const filteredSlice = createSlice({
  name: "filtered",
  initialState,
  reducers: {
    ChangeCategory (state, action) {
      state.category = action.payload
    },
    ChangeSort (state, action) {
      state.sort = action.payload
      console.log(action.payload);
    }
  },
});

export const {ChangeCategory, ChangeSort} = filteredSlice.actions
export default filteredSlice.reducer