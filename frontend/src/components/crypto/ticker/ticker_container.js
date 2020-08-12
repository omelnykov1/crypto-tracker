import { connect } from "react-redux";
import { fetchTicker } from '../../../actions/crypto_actions';
import Ticker from './ticker';

const mSTP = (state, ownProps) => {
    debugger
    return {
    ticker: state.entities.cryptos[ownProps.match.params.tickerId],
}};

const mDTP = dispatch => ({
    fetchTicker: tickerId => dispatch(fetchTicker(tickerId)),
});

export default connect(mSTP,mDTP)(Ticker);