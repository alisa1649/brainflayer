import React from 'react';
import { connect } from 'react-redux';
import { deleteCard, getActiveDeck } from '../../actions/active_deck_actions';
import DashboardHeader from './DashboardHeader';
import { changeNewCardVisibility } from '../../actions/ui_actions';
import CardItem from './CardItem';
import SearchListItems from "../search/SearchListItems";
import {Link} from "react-router-dom";


class DeckShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1
        }
    }
componentDidMount() {
    if (Object.values(this.props.decks).length > 0) {
        this.props.getActiveDeck(Object.values(this.props.decks)[0].id)
    }
}

    render() {
        return (
            <div className="display-container">
                <DashboardHeader deck={this.props.deck} />
                <div className="deck-show">
                    <div className="deck-cards-navbar">
                        <div onClick={() => this.setState({activeTab: 1})} className={`tab nav-decks ${this.state.activeTab === 1 ? "active" : ""}`}>
                            <span id="text">Cards ({Object.keys(this.props.cards).length})</span>
                        </div>
                        <div onClick={() => this.setState({activeTab: 0})} className={`tab nav-about ${this.state.activeTab === 0 ? "active" : ""}`}>
                            <span id="text">Related</span>
                        </div>
                    </div>
                    {
                        this.state.activeTab === 0
                            ? <SearchListItems terms={this.props.deck.tags.split(",")[0]}/>
                            : this.cardList()
                    }
                </div>
            </div >
        )
    }

    cardList() {
        return (
            <ul className="deck-list">
                <li className="deck-item deck-item-header" key={-1}>
                    <div className="round-icon-container">
                        <div className="round-icon"></div>
                        <div>CARDS
                        </div>
                    </div>
                    <Link to={`/practice/${this.props.deck ? this.props.deck.id : ""}`} className="study-button">
                        <div className="inner-study-button">
                        </div>
                        <div className="study-button-text">
                            Study {Object.keys(this.props.cards).length} cards
                        </div>
                    </Link>
                    <div className="deck-links">
                        <a href="#">
                            {/*<span className="material-icons">*/}
                            {/*    mode_edit*/}
                            {/*</span>*/}
                            {/*<span className="deck-link-text">Edit Cards</span>*/}
                        </a>
                    </div>
                </li>
                {
                    this.props.cards.map((card, i) => (
                        <CardItem card={card} key={i} deleteCard={this.props.deleteCard} />
                    ))
                }
                <li className="deck-item deck-item-footer" key={-2} onClick={this.props.openNewCardModal}>
                    <div className="round-icon-container">
                        <div className="round-icon" style={{ visibility: "hidden" }}></div>
                    </div>
                    <div className="card-icon material-icons">
                        add
                    </div>
                    <div className="card-details">
                        <div className="card-title-container">
                                        <span className="card-title">
                                            Add Card to Deck
                                        </span>
                        </div>
                        <div className="item-bar"></div>
                    </div>
                </li>
            </ul>
        )
    }
};


const mapStateToProps = (state) => {
    return {
        decks: state.decks,
        deck: state.activeDeck ? state.activeDeck.deck : {},
        cards: state.activeDeck.deck
            ? state.activeDeck.deck.cards.map(
                card => {
                    return Object.values(card)[0];
                })
            : []
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getActiveDeck: (deckId) => dispatch(getActiveDeck(deckId)),
        openNewCardModal: () => dispatch(changeNewCardVisibility(true)),
        deleteCard: (cardId) => {
            dispatch(deleteCard(cardId));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(DeckShow);