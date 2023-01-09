import { getEntireRoomList } from "@/services";
import * as actionTypes from "./constants";

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
});

export const changeTotalPageAction = (totalPage) => ({
  type: actionTypes.CHANGE_TOTAL_PAGE,
  totalPage,
});

export const changeIsLoadingAction = (isLoading)=>({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

export const fetchRoomListAction = (page = 0) => {
  // 新的函数
  return async (dispatch, getState) => {
    // 0. 修改页码
    dispatch(changeCurrentPageAction(page));
    // 1. 根据页码获取最新的数据
    dispatch(changeIsLoadingAction(true));
    const res = await getEntireRoomList(page * 20);
    dispatch(changeIsLoadingAction(false));
    // 2. 保存到reduxde的store中
    const roomList = res.list;
    const totalPage = res.totalCount;

    dispatch(changeRoomListAction(roomList));
    dispatch(changeTotalPageAction(totalPage));
  };
};
