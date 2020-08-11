import * as APIUtil from "../util/crypto_util";

export const RECEIVE_TICKER = 'RECEIVE_TICKER';
export const RECEIVE_ALL_TICKERS = "RECEIVE_ALL_TICKERS";

export const receiveAllTickers = tickers => ({
    type: RECEIVE_ALL_TICKERS,
    tickers
})

export const receiveTicker = ticker => ({
    type: RECEIVE_TICKER,
    ticker
});

export const fetchTicker = tickerId => dispatch => (
    APIUtil.fetchTicker(tickerId).then(ticker => dispatch(receiveTicker(ticker))),
    err => (console.log(err))
);

export const fetchTickers = () => (dispatch) =>
         APIUtil.fetchTickers().then((tickers) => {
             debugger
             dispatch(receiveAllTickers(tickers.data.slice(750, 760)))
         }
);
