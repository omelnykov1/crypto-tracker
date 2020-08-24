import { RECEIVE_TICKER, RECEIVE_ALL_TICKERS, RECEIVE_TICKER_CHART_DATA } from '../actions/crypto_actions';

const cryptosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_TICKERS:
            return action.tickers;
        case RECEIVE_TICKER:
            return Object.assign({}, state, { [action.ticker.id]: action.ticker });
        case RECEIVE_TICKER_CHART_DATA:
            return Object.assign({},state, {data: action.data})
        default:
            return state;
    }
};

export default cryptosReducer;