import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();
  useEffect(() => {
    const selectItemEl = contentRef.current?.children[selectIndex];
    const itemLeft = selectItemEl?.offsetLeft;
    const itemWidth = selectItemEl?.clientWidth;
    const contentWidth = contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollWidth;

    // 获取滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;
    // 特殊情况的处理
    if (distance < 0) {
      distance = 0; // 左边
    }
    const totalDistance = contentScroll - contentWidth;
    if (distance > totalDistance) {
      distance = totalDistance;
    }
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);
  return (
    <IndicatorWrapper>
      {
        <div className="i-content" ref={contentRef}>
          {/* 插槽 */}
          {props.children}
        </div>
      }
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
