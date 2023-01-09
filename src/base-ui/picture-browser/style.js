import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  background-color: #333;

  .top {
    position: relative;
    height: 86px;
    z-index: 2;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }
  .slider {
    flex: 1;
    ${props => props.theme.mixin.flex_center}
    position: relative;

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      /* display: flex;
      justify-content: space-between; */
      ${props => props.theme.mixin.flex_between}

      bottom: 0;
      color: #fff;
      .btn {
        /* display: flex;
        justify-content: center;
        align-items: center; */
        ${props => props.theme.mixin.flex_center_center}
        width: 83px;
        height: 100%;
      }
    }

    .container {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
      /* 动画样式 */
      .pic-enter {
        transform: translateX(${props => props.isNext ? '100%' : '-100%'});
        opacity: 0;
      }
      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }
      .pic-exit {
        opacity: 1;
      }
      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }
  .preview {
    ${props => props.theme.mixin.flex_center}
    height: 100px;
    margin-top: 10px;

    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;
      .desc {
        ${props => props.theme.mixin.flex_between}

        .toggle {
          cursor: pointer;
        }
      }
    }
    .list {
      margin-top: 3px;
      overflow: hidden;
      transition: height 300ms ease;
      height: ${props => props.showList ? '67px': '0'};

      .item {
        margin-right: 15px;
        cursor: pointer;

        img {
          height: 67px;
          opacity: 0.5;
        }

        &.active {
          img {
            opacity: 1;
          }
        }
      }
    }
  }
`;
