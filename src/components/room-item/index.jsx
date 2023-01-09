import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { ItemWrapper } from "./style";

import Rating from "@mui/material/Rating";
import { Carousel } from "antd";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%",itemClick } = props;
  const [selectIndex, setSelectIndex] = useState(0);
  const swiperRef = useRef();
  // 事件处理逻辑
  const handleClick = (e,isRight = true) => {
    isRight ? swiperRef.current.next() : swiperRef.current.prev();

    // 最新的索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex + 1;
    // 判断越界
    const length = itemData.picture_urls?.length;
    if (newIndex < 0) {
      newIndex = length - 1;
    }
    if (newIndex > length - 1) {
      newIndex = 0;
    }
    setSelectIndex(newIndex);
    e.stopPropagation();
  };
  const  itemClickHandle = ()=>{
    if(itemClick) itemClick(itemData);
  }
  // 子元素赋值
  const pictureElement = (
    <div className="cover">
      <img alt="" src={itemData.picture_url}/>
    </div>
  )

  const sliderElement = (
    <div className="swiper">
          <div className="control">
            <div className="btn left" onClick={(e) => handleClick(e,false)}>
              <IconArrowLeft width="30" height="30"></IconArrowLeft>
            </div>
            <div className="btn right" onClick={(e) => handleClick(e,true)}>
              <IconArrowRight width="30" height="30"></IconArrowRight>
            </div>
          </div>
          <div className="indicator">
            <Indicator selectIndex={selectIndex}>
              {itemData?.picture_urls?.map((item, index) => {
                return (
                  <div className="dot-item" key={index}>
                    <span
                      className={classNames("dot", {
                        active: selectIndex === index,
                      })}
                    ></span>
                  </div>
                );
              })}
            </Indicator>
          </div>
          <Carousel dots={false} ref={swiperRef}>
            {itemData?.picture_urls?.map((item) => {
              return (
                <div className="cover" key={item}>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </Carousel>
        </div>
  )
  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39676a"}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        { itemData.picture_urls ? sliderElement : pictureElement}
        <div className="desc">{itemData.verify_info.messages.join(".")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}/晚</div>
        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 4.5}
            precision={0.5}
            readOnly
            name="read-only"
            sx={{ fontSize: "12px", color: "#00848A" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info?.content && (
            <span className="extra">.{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
