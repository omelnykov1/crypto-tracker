import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import cryptoReducer from "./crypto_reducer";
import tableReducer from './table_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    cryptos: cryptoReducer,
    table: tableReducer,
});

export default entitiesReducer;