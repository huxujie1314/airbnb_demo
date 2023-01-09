// 整个项目中共享的东西

import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
        isFixed: false,
        topAlpha: false,
    },
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload;
    },
  },
});

export const { changeHeaderConfigAction } = mainSlice.actions;

export default mainSlice.reducer;
