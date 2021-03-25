json.deck do
    json.partial! "api/decks/deck", deck: @deck
    json.cards @deck.cards.each do |card|
        json.set! card.id do
            json.partial! '/api/cards/card', card: card
        end
    end
    json.author do
        json.extract! @deck.author, :email
        # json.set! @deck.author.id do
        #     json.extract! @deck.author, :email
        # end
    end
end
