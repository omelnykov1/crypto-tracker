import { RECEIVE_TABLE, UPDATE_TABLE } from '../actions/table_actions';

const tableReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger
    switch(action.type) {
        case RECEIVE_TABLE:
            const table = action.table.length ? Object.assign({}, { [action.table[0]._id]: action.table[0] }) : {};
            return table;
        case UPDATE_TABLE: 
            return Object.assign({}, state, {[action.table._id]: action.table });
        default:
            return state;
    }
}

export default tableReducer;