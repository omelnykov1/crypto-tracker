import * as APIUtil from "../util/crypto_util";

export const RECEIVE_TICKER = 'RECEIVE_TICKER';
export const RECEIVE_ALL_TICKERS = "RECEIVE_ALL_TICKERS";
export const RECEIVE_TICKER_CHART_DATA = "RECEIVE_TICKER_CHART_DATA";

export const receiveAllTickers = tickers => ({
    type: RECEIVE_ALL_TICKERS,
    tickers
});

export const receiveTicker = ticker => ({
    type: RECEIVE_TICKER,
    ticker
});

export const receiveTickerChartData = (data) => ({
    type: RECEIVE_TICKER_CHART_DATA,
    data
});

export const fetchTicker = tickerId => dispatch => (
    APIUtil.fetchTicker(tickerId).then(ticker => (
        dispatch(receiveTicker(ticker.data)))),
    err => (console.log(err))
);

export const fetchTableTicker = tickerId => dispatch => {
    return APIUtil.fetchTableTicker(tickerId).then(ticker => {
        return ticker.data
    })
}

export const fetchTickers = () => (dispatch) =>
         APIUtil.fetchTickers().then((tickers) => dispatch(receiveAllTickers(tickers.data))
);

export const fetchTickerData = tickerId => dispatch => (
    APIUtil.fetchTickerChartData(tickerId).then(data => dispatch(receiveTickerChartData(data.data)))
);
