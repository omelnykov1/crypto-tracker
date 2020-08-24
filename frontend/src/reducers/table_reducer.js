import { RECEIVE_TABLE, UPDATE_TABLE, DELETE_TABLE } from '../actions/table_actions';

const tableReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TABLE:
            const table = Object.values(action.table).length ? Object.assign({}, { [action.table._id]: action.table }) : {};
            return table;
        case UPDATE_TABLE: 
            return Object.assign({}, state, {[action.table._id]: action.table });
        case DELETE_TABLE:
            let newState = Object.assign({}, state);
            delete newState[action.tableId]
            return newState;
        default:
            return state;
    }
}

export default tableReducer;