import React from 'react';
import {connect} from "react-redux";
import {searchDecks} from "../../actions/deck_actions";
import NavBar from "../navbar/navbar";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";
import {getActiveDeck, receiveActiveDeck} from "../../actions/active_deck_actions";

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ""
        }
    }

    componentDidUpdate() {
        const searchTerm = this.props.match.params.search_term;
        if (this.state.searchTerm !== searchTerm) {
            this.setState({
                searchTerm: this.props.match.params.search_term
            })
            this.props.searchDecks(this.props.match.params.search_term);
        }
    }

    render() {
        return (
            <div className='results-page'>
                <NavBar />
                <SearchBar />
                <div className='results-wrapper'>
                    <div className='tag-panel'>
                    </div>
                    <div className='results-panel'>
                        <ul className="deck-links">
                            {this.props.decks.map(deck => <li><Link to={`/practice/${deck.id}`} onClick={() => this.props.setActiveDeck(deck)} className="deck-link">{deck.title}</Link></li>)}
                        </ul>
                    </div>
                </div>
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        decks: state.decks ? Object.values(state.decks) : [],
    }
};

const mapDispatchToProps = dispatch => {
    return {
        searchDecks: (search_term) => {
            return dispatch(searchDecks(search_term))
        },
        setActiveDeck: (deck) => {
            dispatch(getActiveDeck(deck.id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);