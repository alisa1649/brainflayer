import {
    RECEIVE_DECKS,
} from '../actions/deck_actions';

const decksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_DECKS:
            return Object.assign({}, state, action.decks);
        default:
            return state;
    }
}

export default decksReducer;