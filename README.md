#README

# Brainflayer

## About
[Brainflayer](https://brainflayer.herokuapp.com/#/) is a full stack clone of the site [Brainscape](http://brainscape.com). Users can log in and create decks of cards to study. Users can create, update, delete and add/remove tags to their decks, and can create and delete cards from each deck. Users can search all decks across the site, and decks that include the search term as the title or one of it's tag will be returned. Each deck has a unique study page, where the front of the card is rendered first, and the back of the card can be reveled with the click of a button.

## Technologies
Brainflayer was created with Ruby on Rails, Javascript, React/Redux, JSX, SCSS and HTML. The database used was PostgreSQL. 

# Primary Features

## Deck Search
When a search term is entered, all decks with this word as the title or as a tag will be returned to the user. The search feature utilizes a user-entered search term that is used as a query string parameter in the decks controller search method. 

  ![Screen Shot 2021-06-03 at 7 02 37 PM](https://user-images.githubusercontent.com/74744805/120722829-77e05700-c49e-11eb-99b1-ebe1d77642ab.png)
  
  An `api/search` route was written in the rails routes for this search feature. This route receives a GET request from the React frontend and calls the search method in the decks controller. 

 

## User Authentication
Users can create a new account, log in and log out of the Brainflayer app. Password encryption using the rails gem bcrypt is used for secure authentication. Only logged in users are able to create new decks of cards, and users can only edit and delete the decks they have created. 

## Image Carousel
One challenge I overcame when styling Brainflayer's landing page was implementing a custom carousel of 6 images to match the carousel on the original site. I did this by storing an active photo item pointing to an integer 0 - 5 in state and incrementing this number every three seconds. 


![Screen Shot 2021-06-04 at 2 07 06 PM](https://user-images.githubusercontent.com/74744805/120852898-dbbf5a00-c548-11eb-8e4b-e88f9cc8071d.png)

I then created an array of integers 0 through 5 and mapped over this array, adding an "active" or "previous" tag to each photo based on the image's numerical tag.

![Screen Shot 2021-06-04 at 2 07 25 PM](https://user-images.githubusercontent.com/74744805/120852901-dd891d80-c548-11eb-8ff9-90685a868538.png)

The CSS was written to smoothly transition each "previous" tagged image out of view as the "active" image trnastioned in.

![Screen Shot 2021-06-04 at 3 44 37 PM](https://user-images.githubusercontent.com/74744805/120854973-d8799d80-c54b-11eb-81c1-121130fbe757.png)

## Resources

* All icons used for Brainflayer are from fontawesome.com
* Inspiration and images used are from Brainscape.com  
