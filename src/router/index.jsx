import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AuthRoute } from "./AuthRoute";
import routers from "./router.js";

import App from "../App.jsx";
import Login from "../pages/Login/index";
import Error from "../pages/Error/Error";
import Article from "../pages/Article/Article";

// 自定义标题
const pageTitle = import.meta.env.VITE_DEFAULT_TITLE;
const DomTitle = ({ item }) => {
  document.title = item.title || pageTitle;
  return <item.component />;
};

const BaseRouter = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          // 鉴权，判断是否有token
          // <AuthRoute>
          <App />
          //  </AuthRoute>
        }
      >
        {/* 公共路由 */}
        {routers.map((item, index) => {
          return (
            <Route
              key={`routers${index}`}
              exact
              path={item.path}
              element={<DomTitle item={item} />}
            />
          );
        })}
        <Route exact path="/article/:id" element={<Article />} />
      </Route>
      {/* 登录 */}
      <Route exact path="/Login" element={<Login />} />
      {/* 错误页面 */}
      <Route path="/*" element={<Error />}></Route>
    </Routes>
  </Router>
);

export default BaseRouter;
