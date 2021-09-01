#README

# Brainflayer

## About
[Brainflayer](https://brainflayer.herokuapp.com/#/) is a full stack clone of the site [Brainscape](http://brainscape.com). Users can log in and create decks of cards to study. Users can create, update, delete and add/remove tags to their decks, and can create and delete cards from each deck. Users can search all decks across the site, and decks that include the search term as the title or one of it's tag will be returned. Each deck has a unique study page, where the front of the card is rendered first, and the back of the card can be reveled with the click of a button.


## Technologies
Brainflayer was created with Ruby on Rails, Javascript, React/Redux, JSX, SCSS and HTML. The database used was PostgreSQL. 


# Primary Features

## Deck Search
When a search term is entered, all decks with this word as the title or as a tag will be returned to the user. The search feature utilizes a user-entered search term that is used as a query string parameter in the decks controller search method.



```
def search
    query = params[:query]
    @decks = Deck.joins(:author).where("
      UPPER(title) LIKE UPPER('%#{query}%')
      OR UPPER(CONCAT(tags, ',')) LIKE UPPER('%#{query},%')
      OR UPPER(users.email) LIKE UPPER('%#{query}%')
    ")
    render :index
  end
  ```
 
  
  
  An `api/search` route was written in the rails routes for this search feature. This route receives a GET request from the React frontend and calls the search method in the decks controller. 

 

## User Authentication
Users can create a new account, log in and log out of the Brainflayer app. Password encryption using the rails gem bcrypt is used for secure authentication. Only logged in users are able to create new decks of cards, and users can only edit and delete the decks they have created. 


## Image Carousel
One challenge I overcame when styling Brainflayer's landing page was implementing a custom carousel of 6 images to match the carousel on the original site. I did this by storing an active photo item pointing to an integer 0 - 5 in state and incrementing this number every three seconds. 



```
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePhoto: 1
        };
        window.setInterval(() => {
            this.setState({ activePhoto: (this.state.activePhoto + 1) % 6 })
        }, 3000)

    }

    render() {
        const slides = [];
        for (let i = 0; i < 6; i++) {
            slides.push(i);
        }
  ```



I then created an array of integers 0 through 5 and mapped over this array, adding an "active" or "previous" tag to each photo based on the image's numerical tag.



```
              {
                    slides.map((i) => (
                        <div key={i} className={`carousel-slide background-${i}`
                        + (this.state.activePhoto === i ? " active" : "")
                        + (this.state.activePhoto === (i + 1) % 6 ? " previous" : "")}>
                            <div className="overlay"></div>
                        </div>
                    ))
                }
 ```



The CSS was written to smoothly transition each "previous" tagged image out of view as the "active" image trnastioned in.



```
&.previous {
                left: -100%;
                transition: left 1.5s ease;
            }
            &.active {
                left: 0;
                transition: left 1.5s ease;
            }
```



## Resources

* All icons used for Brainflayer are from fontawesome.com
* Inspiration and images used are from Brainscape.com  


## How to Run Locally for Development
1. Run `npm run start` to have webpack watch for automatically build changes.
1. In a separate terminal, run `npm run serve` to make the bundle available to Rails.
1. In a separate terminal, run `rails s` to start the Rails server.
1. Visit the link given by Rails in a browser.