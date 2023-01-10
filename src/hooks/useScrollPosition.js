import { useEffect, useState } from "react";
import { throttle } from "underscore";
export default function useScrollPosition() {
  // 状态来记录位置
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  // 监听window的滚动
  useEffect(() => {
    const scrollHandle = throttle(function(){
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    },100);
    window.addEventListener("scroll", scrollHandle);
    return () => {
      // 解除
      window.removeEventListener("scroll", scrollHandle);
    };
  }, []);
  // 返回
  return { scrollX, scrollY };
}
