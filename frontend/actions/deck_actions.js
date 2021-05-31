import * as APIUtil from '../util/deck_api_util';
import {getActiveDeck, receiveActiveDeck} from './active_deck_actions';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const RECEIVE_DECK = 'RECEIVE_DECK';
export const RECEIVE_REMOVE_DECK = 'RECEIVE_REMOVE_DECK';
export const RECEIVE_EDITED_DECK = 'RECEIVE_EDITED_DECK';

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

export const receiveEditedDeck = (deck) => ({
    type: RECEIVE_EDITED_DECK,
    deck: deck
});

export const searchDecks = (search_term) => dispatch => (
    APIUtil.searchDecks(search_term).then(decks => {
        return dispatch(receiveDecks(decks))
    })
);

export const getDecks = () => dispatch => (
    APIUtil.fetchDecks().then(decks => {
        return dispatch(receiveDecks(decks))
    })
);

export const createDeck = deck => dispatch => (
    APIUtil.createDeck(deck).then(deck => {
        dispatch(getActiveDeck(deck.deck.id));
        return dispatch(receiveDeck(deck.deck))
    })
);
export const deleteDeck = (deckId) => dispatch => (
    APIUtil.removeDeck(deckId).then(deck => {
        const result = dispatch(receiveRemoveDeck(deck.id))
        dispatch(getDecks())
        return result;
    })
);
export const editDeck = (deck) => dispatch => (
    APIUtil.editDeck(deck).then(deck => {
        dispatch(receiveActiveDeck(deck))
        return dispatch(receiveEditedDeck(deck.deck))
    })
);
