import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import cryptoReducer from "./crypto_reducer";
import tableReducer from './table_reducer';
import chartDataReducer from './chart_data_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    cryptos: cryptoReducer,
    table: tableReducer,
    chartData: chartDataReducer,
});

export default entitiesReducer;