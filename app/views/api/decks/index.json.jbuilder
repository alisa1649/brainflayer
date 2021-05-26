@decks.each do |deck|
  json.set! deck.id do
    json.partial! 'deck', deck: deck

    json.author do
      json.extract! deck.author, :email
    end
    json.deck do
      json.extract! deck.tags
    end
  end
end