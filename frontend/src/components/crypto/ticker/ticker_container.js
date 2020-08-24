import { connect } from "react-redux";
import { fetchTicker, fetchTickerData } from '../../../actions/crypto_actions';
import Ticker from './ticker';

const mSTP = (state, ownProps) => ({
    ticker: state.entities.cryptos[ownProps.match.params.tickerId],
    currentUser: state.session.user,
    data: state.entities.cryptos.data
});

const mDTP = dispatch => ({
    fetchTicker: tickerId => dispatch(fetchTicker(tickerId)),
    fetchTickerData: tickerId => dispatch(fetchTickerData(tickerId)),
});

export default connect(mSTP,mDTP)(Ticker);