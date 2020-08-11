import { connect } from "react-redux";
import { fetchTicker } from '../../../actions/crypto_actions';
import Ticker from './ticker';

const mSTP = (state, owmProps) => ({
    ticker: state.entities.cryptos[owmProps.match.params.tickerId],
});

const mDTP = dispatch => ({
    fetchTicker: tickerId => dispatch(fetchTicker(tickerId)),
});

export default connect(mSTP,mDTP)(Ticker);