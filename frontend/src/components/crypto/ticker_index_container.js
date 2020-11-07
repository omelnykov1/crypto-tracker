import { connect } from 'react-redux';
import TickerIndex from './ticker_index';
import { fetchTickers, fetchTicker, fetchTickerData } from '../../actions/crypto_actions';
import { fetchTable, changeTable, createTable } from '../../actions/table_actions';

const mDTP = dispatch => ({
  fetchTickers: () => dispatch(fetchTickers()),
  fetchTicker: tickerId => dispatch(fetchTicker(tickerId)),
  fetchTable: userId => dispatch(fetchTable(userId)),
  changeTable: table => dispatch(changeTable(table)),
  fetchTickerData: tickerId => dispatch(fetchTickerData(tickerId)),
  createTable: table => dispatch(createTable(table)),
});

export default connect(null, mDTP)(TickerIndex);