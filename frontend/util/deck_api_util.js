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