import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommend,
  getHomeLongforData,
  getHomePlusData,
} from "@/services";

// export const fetchHomeDataAction = createAsyncThunk('fetchdata',async ()=>{
// const res = await getHomeGoodPriceData();
// return res;
// })
export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
    getHomeDiscountData().then((res) => {
      dispatch(changeDisCountInfoAction(res));
    });
    getHomeHotRecommend().then((res)=>{
      dispatch(changeRecommendInfoAction(res));
    });
    getHomeLongforData().then((res)=>{
      dispatch(changeLongforInfoAction(res));
    });
    getHomePlusData().then((res)=>{
      dispatch(changePlusInfoAction(res));
    })
  }
);
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {}, // 高性价比房源
    highScoreInfo: {}, // 高评价房源
    disCountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDisCountInfoAction(state, { payload }) {
      state.disCountInfo = payload;
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload;
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    }
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDisCountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions;

// 导出homeSlice里面的reducer
export default homeSlice.reducer;
