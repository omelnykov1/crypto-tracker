import { connect } from 'react-redux';
import TickerIndex from './ticker_index';
import { fetchTickers, fetchTicker } from '../../actions/crypto_actions';

const mSTP = state => {
    debugger
   return {
    tickers: Object.values(state.entities.cryptos),
}}

const mDTP = dispatch => ({
    fetchTickers: () => dispatch(fetchTickers()),
    fetchTicker: tickerId => dispatch(fetchTicker(tickerId)),
});

export default connect(mSTP, mDTP)(TickerIndex);