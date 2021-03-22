json.deck do
    json.partial! "api/decks/deck", deck: @deck
    json.cards @deck.cards.each do |card|
        json.set! card.id do
            json.partial! '/api/cards/card', card: card
        end
    end
end
