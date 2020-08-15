import { connect } from 'react-redux';
import { fetchTable, changeTable, clearErrors, createTable } from '../../actions/table_actions';
import { fetchTickers } from '../../actions/crypto_actions';
import Table from './table';

const mSTP = state => {
    debugger
    const newTable = {
        tickers: [],
        user: state.session.user.id
    };
    return {
        currentUser: state.session.user,
        table: Object.values(state.entities.table) ? Object.values(state.entities.table) : newTable,
        tickers: state.entities.cryptos,
}}

const mDTP = dispatch => ({
    fetchTable: userId => dispatch(fetchTable(userId)),
    createTable: table => dispatch(createTable(table)),
    changeTable: table => dispatch(changeTable(table)),
    fetchTickers: () => dispatch(fetchTickers()),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP,mDTP)(Table);