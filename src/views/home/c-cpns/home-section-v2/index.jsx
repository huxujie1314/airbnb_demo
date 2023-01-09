import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import { SectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  // 从props中获取数据
  const { infoData } = props;
  // 定义自己的数据
  const initialName = Object.keys(infoData.dest_list)[0]; 
  const [name, setName] = useState(initialName);
  const tabNames = infoData.dest_address?.map((item) => item.name);

  // 事件处理函数
  const tabClickHandle = useCallback(function (index, name) {
    setName(name);// 监听变化，设置name
  }, []);

  return (
    <SectionV2Wrapper>
      <SectionHeader
        title={infoData.title}
        subTitle={infoData?.subtitle}
      ></SectionHeader>
      <SectionTabs tabNames={tabNames} tabclick={tabClickHandle}></SectionTabs>
      <SectionRooms
        roomList={infoData?.dest_list?.[name]}
        itemWidth="33.33333%"
      ></SectionRooms>
      <SectionFooter name={name}></SectionFooter>
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
