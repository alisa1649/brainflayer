export const fetchDecks = () => (
    $.ajax({
        method: 'GET',
        url: '/api/decks'
    })
);