import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import App from "../App";

// 自定义标题
// const pageTitle = import.meta.env.VITE_DEFAULT_TITLE;
// const DomTitle = ({ item }) => {
//   document.title = item.title || pageTitle;
//   return <item.component />;
// };

const BaseRouter = () => (
  <Router>
    <Routes>
      {/* 登录 */}
      <Route path="/" element={<App />}></Route>
    </Routes>
  </Router>
);

export default BaseRouter;
