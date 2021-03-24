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
            const existingCards = state.deck.cards;
            const newCards = [...existingCards, action.card];
            const newDeck = Object.assign({}, state.deck, { cards: newCards });
            const oldActiveDeck = state;
            const newActiveDeck = Object.assign({}, oldActiveDeck, { deck: newDeck })
            return newActiveDeck;
        default:
            return state;
    }
}

export default ActiveDeckReducer;


