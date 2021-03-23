import * as APIUtil from '../util/deck_api_util';

export const RECEIVE_ACTIVE_DECK = 'RECEIVE_ACTIVE_DECK';



export const receiveActiveDeck = (deck) => ({
    type: RECEIVE_ACTIVE_DECK,
    deck
});


export const getActiveDeck = (deckId) => dispatch => {
    return APIUtil.fetchDeck(deckId).then(deck => {
        return dispatch(receiveActiveDeck(deck))
    })
};