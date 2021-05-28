import React from 'react';
import NavBar from "../navbar/navbar";
import SearchBar from "./SearchBar";
import SearchListItems from "./SearchListItems";
import {getActiveDeck} from "../../actions/active_deck_actions";
import {connect} from "react-redux";

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='results-page'>
                <NavBar />
                <SearchBar />
                <div className='results-wrapper'>
                    <div className='tag-panel'>
                        <div className="deck-nav-footer-container">
                            <div className="deck-nav-footer">
                                <a target='_blank' href="https://github.com/alisa1649" className="github-link"> </a>
                                <a target='_blank' href="https://alisacheadle.com" className="portfolio-link"> </a>
                                <a target='_blank' href="https://www.linkedin.com/in/alisa-cheadle-04a7811a7/" className="linkedin-link"> </a>
                                <a target='_blank' href="http://www.alisacheadle.com/images/gallery/Alisa_Cheadle_Resume.pdf" className="resume-link"> </a>
                            </div>
                        </div>
                    </div>
                    <div className='results-panel'>
                        <div className="results-header">
                            <div className="header-text">{this.props.match.params.search_term} Decks</div>
                            <div className="header-blurb">Study <u>{this.props.match.params.search_term}</u> using smart web & mobile flashcards created
                                by top students, teachers, and professors. Prep for a quiz or learn for fun!
                            </div>
                        </div>
                        <SearchListItems terms={this.props.match.params.search_term} deck={this.props.deck}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        deck: state.activeDeck ? state.activeDeck.deck : {}
    }
};

const mapDispatchToProps = dispatch => {
    getActiveDeck: (deckId) => dispatch(getActiveDeck(deckId))
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);