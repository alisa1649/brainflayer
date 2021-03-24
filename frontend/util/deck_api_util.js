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