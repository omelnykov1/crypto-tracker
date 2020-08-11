import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import cryptosReducer from './crypto_reducer';
import cryptoReducer from "./crypto_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    cryptos: cryptoReducer
});

export default entitiesReducer;