import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getActiveDeck} from "../../actions/active_deck_actions";
import * as APIUtil from "../../util/deck_api_util";

class SearchListItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: "",
            decks: {}
        }
        this.searchDecks = this.searchDecks.bind(this);
        this.render = this.render.bind(this);
    }

    searchDecks(search_term) {
        APIUtil.searchDecks(search_term).then(decks => {
            this.setState({decks: decks})
        })
    }

    componentDidMount() {
        this.componentDidUpdate()
    }

    componentDidUpdate() {
        const searchTerm = this.props.terms;
        if (this.state.searchTerm !== searchTerm) {
            this.setState({
                searchTerm: searchTerm
            })
            this.searchDecks(searchTerm);
        }
    }

    render() {
        return (
            <ul className="search-links">
                {Object.values(this.state.decks).map(deck => <li key={deck.id}>
                    <Link to={`/practice/${deck.id}`} onClick={() => this.props.setActiveDeck(deck)} className="subject-bar">
                        <div className="subject-icon">
                            <img alt="React/Redux" className="subject-icon" src="https://www.brainscape.com/assets/app_icons/ugs-df12edeffeac52b066888004169a388e7565d586243f095eb999ff34b9331a7d.png" />
                        </div>
                        <div className="main-data">
                            <div className="result-flashcard-header">
                                {deck.title}
                            </div>
                            <div className="result-flashcard-info">
                              <div className="result-flashcard-author">Deck Maker: <Link className="author-link" to={`/subjects/${deck.author.email}`}>{deck.author.email}</Link></div>
                            </div>
                            <div className="result-flashcard-tags">
                                Deck Tags: {deck.tags}
                            </div>
                        </div>
                        <Link to={`/practice/${deck.id}`} className="result-action">
                            action
                        </Link>
                    </Link>
                </li>)}
            </ul>
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
        setActiveDeck: (deck) => {
            dispatch(getActiveDeck(deck.id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchListItems);