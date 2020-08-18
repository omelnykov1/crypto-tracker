import { RECEIVE_TICKER, RECEIVE_ALL_TICKERS } from '../actions/crypto_actions';

const cryptosReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger
    switch(action.type) {
        case RECEIVE_ALL_TICKERS:
            return action.tickers;
        case RECEIVE_TICKER:
            return Object.assign({},state, { [action.ticker.id]: action.ticker });
        default:
            return state;
    }
};

export default cryptosReducer;