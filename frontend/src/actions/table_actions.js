import * as APIUtil from '../util/table_util';

export const RECEIVE_TABLE = 'RECEIVE_TABLE';
export const UPDATE_TABLE = 'UPDATE_TABLE';
export const DELETE_TABLE = 'DELETE_TABLE';
export const CLEAR_TABLE_ERRORS = 'CLEAR_TABLE_ERRORS';
export const RECEIVE_TABLE_TICKERS = 'RECEIVE_TABLE_TICKERS';


const receiveTable = table => ({
    type: RECEIVE_TABLE,
    table
});

// const receiveTableTickers = table => ({
//     type: RECEIVE_TABLE_TICKERS,
//     table
// });

const updateTable = table => ({
    type: UPDATE_TABLE,
    table
});

const destroyTable = tableId => ({
    type: DELETE_TABLE,
    tableId
});

export const clearErrors = () => ({
    type: CLEAR_TABLE_ERRORS
});

export const createTable = table => dispatch => {
    return APIUtil.createTable(table).then(table => dispatch(receiveTable(table.data)));
};

// export const fetchTableTickers = tickers => dispatch => {
//     return APIUtil.fetchTableTickers(tickers).then(table => {
//         debugger
//         dispatch(receiveTableTickers(table.data))
//     })
// }

export const fetchTable = userId => dispatch => {
    return APIUtil.fetchTable(userId).then(table => {
        debugger
        dispatch(receiveTable(table.data))})
};

export const changeTable = table => dispatch => {
    debugger
    return APIUtil.updateTable(table).then(table => dispatch(updateTable(table.data)))
};

export const deleteTable = tableId => dispatch => {
    return APIUtil.deleteTable(tableId).then(() => dispatch(destroyTable(tableId)))
};

