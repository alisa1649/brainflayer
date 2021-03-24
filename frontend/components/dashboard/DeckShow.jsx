import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getDecks } from '../../actions/deck_actions';
import { getActiveDeck } from '../../actions/active_deck_actions';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { render } from 'react-dom';
import DashboardHeader from './DashboardHeader';
import Modal from '../modal/modal';
import { changeNewDeckVisibility, changeNewCardVisibility } from '../../actions/ui_actions';
import CardItem from './CardItem';


class DeckShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getActiveDeck(1);
    }
    render() {
        return (
            <div className="display-container">
                <DashboardHeader deck={this.props.deck} />
                <div className="deck-show">
                    <div className="deck-cards-navbar">
                        <div className="tab nav-about">
                            <span id="text">About</span>
                        </div>
                        <div className="tab nav-decks active">
                            <span id="text">Decks ({this.props.cards.length})</span>
                        </div>
                        <div className="tab nav-learners">
                            <span id="text">Learners (1)</span>
                        </div>
                    </div>
                    {/* <div className="cards-title">Cards</div> */}
                    <ul className="deck-list">
                        <li className="deck-item deck-item-header" key={-1}>
                            <div className="round-icon-container">
                                <div className="round-icon"></div>
                                <div>CARDS</div>
                            </div>
                            <div className="study-button">
                                <div className="inner-study-button">
                                </div>
                                <div className="study-button-text">
                                    Study 0 cards
                                </div>
                            </div>
                            <div class="deck-links">
                                <a href="#">
                                    <span className="material-icons">
                                        mode_edit
                                    </span>
                                    <span className="deck-link-text">Edit Cards</span>
                                </a>
                            </div>
                        </li>
                        {
                            this.props.cards.map((card, i) => (
                                <CardItem card={card} key={i} />
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
                </div>
            </div >
        )
    };
};


const mapStateToProps = (state) => {
    return {
        deck: state.activeDeck ? state.activeDeck.deck : {},
        cards: state.activeDeck.deck ? state.activeDeck.deck.cards.map(e => Object.values(e)[0]) : []
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getActiveDeck: (deckId) => {
            return dispatch(getActiveDeck(deckId))
        },
        openNewCardModal: () => dispatch(changeNewCardVisibility(true)),
        openNewDeckModal: () => dispatch(changeNewDeckVisibility(true))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(DeckShow);