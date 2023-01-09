import React, { memo } from "react";

import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import IconAvatar from "@/assets/svg/icon_avatar";
import { useState, useEffect } from "react";

const HeaderRight = memo(() => {
  /**定义组件内部的状态 */
  const [showPanel, setShowPanel] = useState(false);
  // 副作用代码
  useEffect(()=>{
    function windowHandleClick() {
      setShowPanel(false);
    }
    window.addEventListener('click',windowHandleClick,true);
    return ()=>{
      // return一个回调函数，取消监听
      window.removeEventListener('click',windowHandleClick);
    }
  },[]) // 依赖空数组，只执行一次

  // 事件处理函数
  function profileClickHandle() {
    setShowPanel(!showPanel);
  }
  return (
    <RightWrapper>
      <div className="btns">
        {/* button有很多自带的样式 */}
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal></IconGlobal>
        </span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <IconMenu></IconMenu>
        <IconAvatar></IconAvatar>
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
