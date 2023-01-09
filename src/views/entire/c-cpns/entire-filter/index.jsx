import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntireFilter = memo(() => {
  // 定义内部状态
  const [selectItems, setSelectItems] = useState([]);

  function itemClickHandle(item) {
    // 点击选中，再点击就取消选择
    const newItems = [...selectItems];
    if (newItems.includes(item)) {
      const itemIndex = newItems.findIndex(ele=>ele === item);
      newItems.splice(itemIndex,1);
    } else {
      newItems.push(item);
    }

    setSelectItems(newItems);
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              key={item}
              onClick={(e) => itemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;
