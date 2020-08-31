import { connect } from "react-redux";
import { fetchTicker, fetchTickerData} from '../../../actions/crypto_actions';
import { fetchTable, changeTable, createTable } from '../../../actions/table_actions';
import Ticker from './ticker';

const mSTP = (state, ownProps) => ({
    ticker: state.entities.cryptos[ownProps.match.params.tickerId],
    currentUser: state.session.user,
    data: state.entities.chartData.data,
    table: state.entities.table[Object.keys(state.entities.table)[0]] ? state.entities.table[Object.keys(state.entities.table)[0]] : {},
});

const mDTP = dispatch => ({
    fetchTicker: tickerId => dispatch(fetchTicker(tickerId)),
    fetchTickerData: tickerId => dispatch(fetchTickerData(tickerId)),
    changeTable: table => dispatch(changeTable(table)),
    createTable: table => dispatch(createTable(table)),
    fetchTable: userId => dispatch(fetchTable(userId)),
});

export default connect(mSTP,mDTP)(Ticker);