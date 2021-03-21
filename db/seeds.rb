# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user  = User.create!({
    email: "erlich@aviato.io",
    password: "hunter2"
})
tags = Tag.create!([
    {name: "development"},
    {name: "trivia"}
])

deck = Deck.create!({
    title: "react",
    objective: "learn react magic",
    author_id: user.id,
    tag_id: tags[0].id,
    icon_url: "fakeurl"
})

deck2 = Deck.create!({
    title: "silicon valley",
    objective: "learn trivia",
    author_id: user.id,
    tag_id: tags[1].id,
    icon_url: "fakeurl2"
})

react_cards = Card.create!([
    {title: "what is react?", body: "react is a javascript library", deck: deck},
    {title: "what is redux?", body: "redux is a state management framework", deck: deck}   
])

silicon_valley_trivia = Card.create!([
    {title: "who is richard hendricks?", body: "the founder of pied piper", deck: deck2},
    {title: "what is pied piper?", body: "a lossless compression algorithm company, duh!", deck: deck2}    
])
