import {
    RECEIVE_ACTIVE_DECK
}
    from '../actions/active_deck_actions';

const ActiveDeckReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ACTIVE_DECK:
            return action.deck;
        default:
            return state;
    }
}

export default ActiveDeckReducer; 
