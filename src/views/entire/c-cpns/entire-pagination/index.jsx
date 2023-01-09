// import PropTypes from 'prop-types'
import React, { memo } from "react";
import { PaginationWrapper } from "./style";
import Pagination from "@mui/material/Pagination";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire/createActions";

const EntirePagination = memo((props) => {
  // 从redux中获取数据
  const { totalPage, currentPage, roomList } = useSelector((state) => ({
    totalPage: state.entire.totalPage,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList,
  }),shallowEqual);
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;
  const page = Math.ceil(totalPage / 20); 

  // 事件处理
  const dispatch = useDispatch();
  function pageChangeHandle(event, value){
    // 换页的时候回到顶部
    window.scrollTo(0,0);
    console.log(value)
    // 获取数据
    dispatch(fetchRoomListAction(value - 1));
  }
  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={page} onChange={pageChangeHandle}/>
          <div className="desc">
            第 {startCount} - {endCount} 个房源,共超过 {totalPage} 个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

EntirePagination.propTypes = {};

export default EntirePagination;
