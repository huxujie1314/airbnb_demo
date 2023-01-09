import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detailInfo: {},
  },
  reducers: {
    changeDetailInfoAction(state, action) {
      state.detailInfo = action.payload;
    },
  },
});

export const { changeDetailInfoAction } = detailSlice.actions;

// 导出reducer
export default detailSlice.reducer;
