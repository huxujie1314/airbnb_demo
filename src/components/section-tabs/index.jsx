import ScrollView from "@/base-ui/scroll-view";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";

const SectionTabs = memo((props) => {
  const { tabNames = [], tabclick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  function itemClickHandle(item, index) {
    setCurrentIndex(index);
    tabclick(index, item);
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              className={classNames("item", { active: index === currentIndex })}
              onClick={(e) => itemClickHandle(item, index)}
              key={item}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
};

export default SectionTabs;
