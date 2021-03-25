import * as APIUtil from '../util/deck_api_util';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const RECEIVE_DECK = 'RECEIVE_DECK';
export const RECEIVE_REMOVE_DECK = 'RECEIVE_REMOVE_DECK';

export const receiveDecks = (decks) => ({
    type: RECEIVE_DECKS,
    decks
});

export const receiveDeck = (deck) => ({
    type: RECEIVE_DECK,
    deck: deck
});

export const receiveRemoveDeck = (deckId) => ({
    type: RECEIVE_REMOVE_DECK,
    deckId
});

export const getDecks = () => dispatch => (
    APIUtil.fetchDecks().then(decks => {
        return dispatch(receiveDecks(decks))
    })
);

export const getDeck = (deckId) => dispatch => (
    APIUtil.fetchDeck(deckId).then(deck => {
        return dispatch(receiveDeck(deck))
    })
);

export const createDeck = deck => dispatch => (
    APIUtil.createDeck(deck).then(deck => (
        dispatch(receiveDeck(deck.deck))
    ))
);
export const deleteDeck = (deckId) => dispatch => (
    APIUtil.removeDeck(deckId).then(deck => {
        return dispatch(receiveRemoveDeck(deck.id))
    })
);
