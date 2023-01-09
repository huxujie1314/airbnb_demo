import { fetchRoomListAction } from '@/store/modules/entire/createActions';
import { changeHeaderConfigAction } from '@/store/modules/main';
import React, { memo,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import EntireFilter from './c-cpns/entire-filter';
import EntirePagination from './c-cpns/entire-pagination';
import EntireRooms from './c-cpns/entire-rooms';
import { EntireWrapper } from './style';

const Entire = memo(() => {
  // 发送网络请求，获取数据，并且保存当前的页面等等

  // 发起网络请求，真正请求是在redux中发起。
  // 派发异步事件
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomListAction());
    dispatch(changeHeaderConfigAction({isFixed: true}));
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      <EntireRooms></EntireRooms>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  )
})

export default Entire;