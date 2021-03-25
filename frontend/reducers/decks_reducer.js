import {
    RECEIVE_DECKS,
    RECEIVE_DECK,
} from '../actions/deck_actions';

const decksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_DECKS:
            return Object.assign({}, state, action.decks);
        case RECEIVE_DECK:
            return Object.assign({}, state, { [action.deck.id]: action.deck })
        default:
            return state;
    }
}

export default decksReducer;