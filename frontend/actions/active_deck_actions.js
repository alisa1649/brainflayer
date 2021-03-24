import * as APIUtil from '../util/deck_api_util';

export const RECEIVE_ACTIVE_DECK = 'RECEIVE_ACTIVE_DECK';
export const RECEIVE_CARD = 'RECEIVE_CARD';

export const receiveActiveDeck = (deck) => ({
    type: RECEIVE_ACTIVE_DECK,
    deck
});

export const receiveCard = (card) => ({
    type: RECEIVE_CARD,
    card
});


export const getActiveDeck = (deckId) => dispatch => {
    return APIUtil.fetchDeck(deckId).then(deck => {
        return dispatch(receiveActiveDeck(deck))
    })
};

export const createCard = (deckId, card) => dispatch => (
    APIUtil.createCard(deckId, card).then(card => {
        return dispatch(receiveCard(card))
    })
);