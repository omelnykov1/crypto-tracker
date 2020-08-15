import { connect } from 'react-redux';
import { fetchTable, changeTable, clearErrors, createTable, deleteTable, fetchTableTickers } from '../../actions/table_actions';
import { fetchTickers } from '../../actions/crypto_actions';
import Table from './table';


const mSTP = (state, ownProps) => {
    debugger
    const newTable = {
        tickers: [],
        user: state.session.user.id
    };
    return {
        currentUser: state.session.user,
        table: state.entities.table[Object.keys(state.entities.table)[0]] ? state.entities.table[Object.keys(state.entities.table)[0]] : {},
        tickers: state.entities.cryptos,
}}

const mDTP = dispatch => ({
    fetchTable: userId => dispatch(fetchTable(userId)),
    createTable: table => dispatch(createTable(table)),
    changeTable: table => dispatch(changeTable(table)),
    fetchTickers: () => dispatch(fetchTickers()),
    clearErrors: () => dispatch(clearErrors()),
    deleteTable: tableId => dispatch(deleteTable(tableId)),
    fetchTableTickers: tickers => dispatch(fetchTableTickers(tickers)),
});

export default connect(mSTP,mDTP)(Table);