import * as APIUtil from '../util/deck_api_util';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';

export const receiveDecks = (decks) => ({
    type: RECEIVE_DECKS,
    decks
});

export const getDecks = () => dispatch => (
    APIUtil.fetchDecks().then(decks => {
        return dispatch(receiveDecks(decks))
    })
);
