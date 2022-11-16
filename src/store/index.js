import Disposition from "./reducer/Disposition";
import LoginState from "./reducer/Login";

import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

// 用于支持异步action
import thunk from "redux-thunk";

// 汇总reducer
const allReducer = combineReducers({ Disposition, LoginState });

export default createStore(allReducer, applyMiddleware(thunk));
