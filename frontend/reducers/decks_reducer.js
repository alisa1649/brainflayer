import {
    RECEIVE_DECKS,
    RECEIVE_DECK,
    RECEIVE_REMOVE_DECK
} from '../actions/deck_actions';

const decksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_DECKS:
            return action.decks;
        case RECEIVE_DECK:
            return Object.assign({}, state, { [action.deck.id]: action.deck })
        case RECEIVE_REMOVE_DECK:
            const result = Object.assign({}, state)
            delete result[action.deckId]
            return result;
        default:
            return state;
    }
}

export default decksReducer;