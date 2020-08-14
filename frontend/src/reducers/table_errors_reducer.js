import { RECEIVE_TABLE_ERRORS, CLEAR_TABLE_ERRORS } from '../actions/table_actions';

const tableErrorsReducer = (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_TABLE_ERRORS:
            return action.errors;
        case CLEAR_TABLE_ERRORS:
            return [];
        default:
            return state;
    }
}

export default tableErrorsReducer;