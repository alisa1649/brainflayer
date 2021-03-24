import {
    RECEIVE_ACTIVE_DECK,
    RECEIVE_CARD
}
    from '../actions/active_deck_actions';

const ActiveDeckReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ACTIVE_DECK:
            return action.deck;
        case RECEIVE_CARD:
            return Object.assign({}, state, action.card);
        default:
            return state;
    }
}

export default ActiveDeckReducer;


