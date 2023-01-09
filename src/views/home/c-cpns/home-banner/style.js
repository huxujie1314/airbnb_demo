import styled from "styled-components";
import coverImg from "@/assets/img/cover_01.jpeg";
// webpack引入图片

export const BannerWrapper = styled.div`
  height: 529px;
  /* background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover;   */
  background: url(${coverImg}) center/cover;  
`;
