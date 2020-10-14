import { RECEIVE_TICKER_NEWS } from "../actions/crypto_actions";

const tickerNewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TICKER_NEWS:
      return Object.assign({}, state, { data: action.data });
    default:
      return state;
  }
};

export default tickerNewsReducer;
