@decks.each do |deck|
  json.set! deck.id do
    json.partial! 'deck', deck: deck
    # json.reviewIds []
  end
end