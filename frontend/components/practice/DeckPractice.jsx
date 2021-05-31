import React from "react";
import DashboardHeader from "../dashboard/DashboardHeader";
import CardItem from "../dashboard/CardItem";
import {connect} from "react-redux";
import {changeLoginVisibility, changeNewCardVisibility, changeNewDeckVisibility} from "../../actions/ui_actions";
import {getActiveDeck} from "../../actions/active_deck_actions";
import NavBar from "../navbar/navbar";
import DeckNav from "../dashboard/DeckNav";
import {Link, Redirect} from "react-router-dom";

class DeckPractice extends React.Component {
    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        this.state = {
            currentCard: 0,
            isRevealed: false
        }
    }

    componentDidMount() {
        this.props.setActiveDeck(this.props.match.params.deck_id)
    }

    render() {
        let cardFront = this.props.cards.length ? this.props.cards[this.state.currentCard].title : "";
        let cardBack = this.props.cards.length ? this.props.cards[this.state.currentCard].body : "";
        if (!this.props.loggedIn) {
            this.props.openLoginModal();
            return <Redirect to="/landing" />
        }
        else if (this.props.cards.length) {
            return (
                <div className="practice-container">
                    <DeckNav/>
                    <div className="practice-area">
                        <div className="practice-header">
                            <div className="practice-header-text">
                                <span className="label">Deck:&nbsp;</span>
                                <span className="deck name">{this.props.deck ? this.props.deck.title : ""}</span>
                                <span className="card label">Card:&nbsp;</span>
                                <span
                                    className="card name">{this.state.currentCard + 1}/{this.props.cards.length}</span>
                                <Link to="/dashboard" className="return-to-dash">Back to dashboard</Link>
                            </div>
                        </div>
                        <div className="practice-card-container">
                            <div className={`practice-card front ${this.state.isRevealed ? "" : "active"}`}>
                                <div className="card-header">Q</div>
                                <div className={`card-text-container`}>
                                    <div className="card-text">{cardFront}</div>
                                </div>
                            </div>
                            <div className={`practice-card back ${this.state.isRevealed ? "active" : ""}`}>
                                <div className="card-header">A</div>
                                <div className={`card-text-container`}>
                                    <div className="card-text">{cardBack}</div>
                                </div>
                            </div>
                        </div>
                        <div className="practice-footer">
                            {
                                !this.state.isRevealed
                                    ? <div onClick={() => {
                                        this.setState(() => ({isRevealed: true}))
                                    }} className="reveal-button">Reveal Answer</div>
                                    : <div onClick={() => {
                                        this.setState((s) => ({
                                            isRevealed: false,
                                            currentCard: (s.currentCard + 1) % this.props.cards.length
                                        }))
                                    }} className="reveal-button next">Next</div>
                            }
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="practice-container">
                    <DeckNav/>
                    <div className="practice-area">
                        <div className="practice-header">
                            <div className="practice-header-text">
                                <span className="card name">There are no cards in this deck!</span>
                                <Link to="/dashboard" className="return-to-dash">Back to dashboard</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    };
}

const mapStateToProps = (state) => {
    return {
        loggedIn: Boolean(state.session.id),
        deck: state.activeDeck ? state.activeDeck.deck : {},
        cards: state.activeDeck.deck
            ? state.activeDeck.deck.cards.map(
                card => {
                    return Object.values(card)[0];
                }).filter(c => c !== null)
            : []
    }
};

const mapDispatchToProps = dispatch => {
    return {
        openNewDeckModal: () => dispatch(changeNewDeckVisibility(true)),
        openLoginModal: () => dispatch(changeLoginVisibility(true)),
        openNewCardModal: () => dispatch(changeNewCardVisibility(true)),
        setActiveDeck: (deckId) => {
            dispatch(getActiveDeck(deckId))
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(DeckPractice);