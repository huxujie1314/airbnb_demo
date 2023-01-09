import PropTypes from "prop-types";
import React, { memo } from "react";
import { HeaderWrapper } from "./style";

const SectionHeader = memo((props) => {
  const { title, subTitle } = props;
  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      {subTitle && <div className="sub-title">{subTitle}</div>}
    </HeaderWrapper>
  );
});

SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default SectionHeader;
