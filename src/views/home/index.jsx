import React, { memo } from "react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyObject } from "@/utils";
import HomeLongfor from "./c-cpns/home-longfor";
import HomeSectionV3 from "./c-cpns/home-section-v3";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Home = memo(() => {
  // 从redux中获取数据
  const {
    goodPriceInfo = {},
    highScoreInfo = {},
    disCountInfo = {},
    recommendInfo = {},
    longforInfo = {},
    plusInfo = {},
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      disCountInfo: state.home.disCountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo
    }),
    shallowEqual
  );
  // 发起网络请求，真正请求是在redux中发起。
  // 派发异步事件
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
    dispatch(changeHeaderConfigAction({isFixed: true, topAlpha: true}));
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        {isEmptyObject(disCountInfo) && (
          <HomeSectionV2 infoData={disCountInfo}></HomeSectionV2>
        )}
        {isEmptyObject(recommendInfo) && (
          <HomeSectionV2 infoData={recommendInfo}></HomeSectionV2>
        )}
        {isEmptyObject(longforInfo) && (
          <HomeLongfor infoData={longforInfo}></HomeLongfor>
        )}
        {isEmptyObject(goodPriceInfo) && (
          <HomeSectionV1 infoData={goodPriceInfo || {}}></HomeSectionV1>
        )}
        {isEmptyObject(highScoreInfo) && (
          <HomeSectionV1 infoData={highScoreInfo || {}}></HomeSectionV1>
        )}
        {isEmptyObject(plusInfo) && (
          <HomeSectionV3 infoData={plusInfo}></HomeSectionV3>
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;
