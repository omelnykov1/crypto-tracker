import { connect } from 'react-redux';
import { fetchTable, changeTable, clearErrors, createTable, deleteTable } from '../../actions/table_actions';
import { fetchTickers, fetchTableTicker } from '../../actions/crypto_actions';
import Table from './table';


const mSTP = state => ({
    currentUser: state.session.user,
    table: state.entities.table[Object.keys(state.entities.table)[0]] ? state.entities.table[Object.keys(state.entities.table)[0]] : {},
    tickers: state.entities.cryptos,
})

const mDTP = dispatch => ({
    fetchTable: userId => dispatch(fetchTable(userId)),
    changeTable: table => dispatch(changeTable(table)),
    clearErrors: () => dispatch(clearErrors()),
    deleteTable: tableId => dispatch(deleteTable(tableId)),
    fetchTableTicker: tickerId => dispatch(fetchTableTicker(tickerId))
});

export default connect(mSTP,mDTP)(Table);