import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import tableErrorsReducer from "./table_errors_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  table: tableErrorsReducer
});
