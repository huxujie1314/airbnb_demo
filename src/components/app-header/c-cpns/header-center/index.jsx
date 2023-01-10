import React, { memo, useState } from "react";
import { CenterWrapper } from "./style";
import { CSSTransition } from "react-transition-group";
import IconSearchBar from "@/assets/svg/icon-search-bar";
import SearchTabs from "./c-cpns/search-tabs";
import SearchTitles from "@/assets/data/search_titles.json";
import SearchSections from "./c-cpns/search-sections";

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props;
  const [tabIndex, setTabIndex] = useState(0);
  const titles = SearchTitles.map((item) => item.title);

  const searchBarClickHandle = () => {
    if (searchBarClick) {
      searchBarClick();
    }
  };
  return (
    <CenterWrapper>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex}></SearchTabs>
          <div className="infos">
            <SearchSections
              searchInfos={SearchTitles[tabIndex]?.searchInfos}
            ></SearchSections>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        {/* unmountOnExit 动画结束的时候把组件卸载掉 */}
        <div className="search-bar" onClick={searchBarClickHandle}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar></IconSearchBar>
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

export default HeaderCenter;
