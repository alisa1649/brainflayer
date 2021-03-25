export const fetchDecks = () => (
    $.ajax({
        method: 'GET',
        url: '/api/decks'
    })
);

export const fetchDeck = (deckId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/decks/${deckId}`
    })
};

export const createCard = (deckId, card) => {
    return $.ajax({
        method: 'POST',
        url: `/api/decks/${deckId}/cards`,
        data: { card }
    })
};

export const createDeck = deck => {
    return $.ajax({
        method: 'POST',
        url: 'api/decks',
        data: { deck }
    })
};

export const removeCard = cardId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/cards/${cardId}`
    })
};

export const removeDeck = deckId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/decks/${deckId}`
    })
};