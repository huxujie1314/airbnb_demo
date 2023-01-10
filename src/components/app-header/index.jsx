import useScrollPosition from "@/hooks/useScrollPosition";
import classNames from "classnames";
import React, { memo, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
import { HeaderWrapper, SearchAreaWrapper } from "./style";

const AppHeader = memo(() => {
  // 定义组件内部的状态
  const [isSearch, setIsSearch] = useState(false);
  // 从redux中获取数据
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed, topAlpha } = headerConfig || {};
  // 监听滚动
  const { scrollY } = useScrollPosition();
  const prevY = useRef(0);
  // 正常滚动情况下，不断记录
  if (!isSearch) {
    prevY.current = scrollY;
  }
  // 搜索框弹出
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) {
    setIsSearch(false);
  }

  // 透明度的逻辑
  const isAlpha = topAlpha && scrollY === 0;
  console.log(isAlpha, "isAlpha");

  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper
        className={classNames({ fixed: isFixed })}
      >
        <div className="content">
          <div className="top">
            <HeaderLeft></HeaderLeft>
            <HeaderCenter
              isSearch={ isAlpha || isSearch}
              searchBarClick={(e) => setIsSearch(true)}
            ></HeaderCenter>
            <HeaderRight></HeaderRight>
          </div>
          <SearchAreaWrapper isSearch={ isAlpha || isSearch}></SearchAreaWrapper>
        </div>
        {/* 灰色的遮盖层只有搜索状态才能显示 */}
        {isSearch && (
          <div className="cover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
