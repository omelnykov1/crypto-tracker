import { RECEIVE_TICKER_CHART_DATA } from '../actions/crypto_actions';

const chartDataReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TICKER_CHART_DATA:
      return Object.assign({}, state, { data: action.data });
    default:
        return state;
  }
}

export default chartDataReducer;