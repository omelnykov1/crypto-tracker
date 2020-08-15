import * as APIUtil from '../util/table_util';

export const RECEIVE_TABLE = 'RECEIVE_TABLE';
export const UPDATE_TABLE = 'UPDATE_TABLE';
export const RECEIVE_TABLE_ERRORS = 'RECEIVE_TABLE_ERRORS';
export const CLEAR_TABLE_ERRORS = 'CLEAR_TABLE_ERRORS';

const receiveTable = table => ({
    type: RECEIVE_TABLE,
    table
});

const updateTable = table => ({
    type: UPDATE_TABLE,
    table
});

const receiveTableErrors = errors => ({
    type: RECEIVE_TABLE_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_TABLE_ERRORS
});

export const createTable = table => dispatch => {
    debugger
    return APIUtil.createTable(table).then(table => (
        dispatch(receiveTable(table.data))))
}

export const fetchTable = userId => dispatch => {
    return APIUtil.fetchTable(userId).then(table => (
        dispatch(receiveTable(table.data)))),
        (err) => dispatch(receiveTableErrors(err.response.data))
};

export const changeTable = table => dispatch => {
    debugger
    return APIUtil.updateTable(table).then(table => {
        dispatch(updateTable(table.data))})
};

