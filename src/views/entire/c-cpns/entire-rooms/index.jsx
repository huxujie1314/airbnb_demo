import RoomItem from "@/components/room-item";
import { changeDetailInfoAction } from "@/store/modules/detail";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RoomsWrapper } from "./style";

const EntireRooms = memo((props) => {
  const { roomList, totalPage, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalPage: state.entire.totalPage,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );
  // 事件处理
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const itemClickHandle = useCallback((item) => {
    // 大数据需要共享的话，就存到redux里面
    dispatch(changeDetailInfoAction(item));
    // 跳转到详情
    navigate('/detail');
  },[navigate,dispatch]);

  return (
    <RoomsWrapper>
      {!!roomList.length && <h2 className="title">{totalPage}多处住所</h2>}
      <div className="list">
        {roomList.map((item) => {
          return (
            <RoomItem
              itemData={item}
              key={item._id}
              itemWidth="20%"
              itemClick={itemClickHandle}
            ></RoomItem>
          );
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

EntireRooms.propTypes = {
  infoData: PropTypes.object,
};

export default EntireRooms;
