import { connect } from 'react-redux';
import TickerIndex from './ticker_index';
import { fetchTickers, fetchTicker } from '../../actions/crypto_actions';
import { fetchTable, changeTable } from '../../actions/table_actions';

const mSTP = state => ({
    tickers: state.entities.cryptos,
    currentUser: state.session.user,
    table: state.entities.table[Object.keys(state.entities.table)[0]] ? state.entities.table[Object.keys(state.entities.table)[0]] : {},
})

const mDTP = dispatch => ({
    fetchTickers: () => dispatch(fetchTickers()),
    fetchTicker: tickerId => dispatch(fetchTicker(tickerId)),
    fetchTable: userId => dispatch(fetchTable(userId)),
    changeTable: table => dispatch(changeTable(table)),
});

export default connect(mSTP, mDTP)(TickerIndex);