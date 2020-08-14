import { RECEIVE_TABLE, UPDATE_TABLE } from '../actions/table_actions';

const tableReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger
    switch(action.type) {
        case RECEIVE_TABLE: 
            return Object.assign({}, {[action.table._id]: action.table.data});
        case UPDATE_TABLE: 
            return Object.assign({}, state, {[action.table._id]: action.table });
        default:
            return state;
    }
}

export default tableReducer;