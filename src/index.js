import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "./App";
import "normalize.css";
import "antd/dist/reset.css";
import "@/assets/css/index.less";
import store from "./store";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 严格模式
  <React.StrictMode>
    <Provider store={store}>
      {/* 页面懒加载需要 */}
      <Suspense fallback="loading">
        <ThemeProvider theme={theme}>
          {/* 路由方式，我们采用hashRouter的方式 */}
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </Suspense>
    </Provider>
  </React.StrictMode>
);

// @ => src: @配置成src别名，webpack里面配置
// react脚手架，隐藏了webpack
// 解决一: npm run eject
// 解决二: craco => creta-react-app config
