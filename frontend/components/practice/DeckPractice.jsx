import React from "react";
import DashboardHeader from "../dashboard/DashboardHeader";
import CardItem from "../dashboard/CardItem";
import {connect} from "react-redux";
import {changeNewCardVisibility} from "../../actions/ui_actions";
import {getActiveDeck} from "../../actions/active_deck_actions";
import NavBar from "../navbar/navbar";
import DeckNav from "../dashboard/DeckNav";

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
        let cardText = ""
        if (this.props.cards.length) {
            console.log(JSON.stringify(this.props.cards))
            if (this.state.isRevealed) {
                cardText = this.props.cards[this.state.currentCard].body
            }
            else {
                cardText = this.props.cards[this.state.currentCard].title
            }
        }
        return (
            <div className="practice-container" >
                <DeckNav />
                <div className="practice-area">
                    <div className="practice-header">
                    </div>
                    <div className="practice-card-container">
                        <div className="practice-card">
                            <div className="card-text">{cardText}</div>
                        </div>
                    </div>
                    <div className="practice-footer">
                        {
                            !this.state.isRevealed
                                ? <div onClick={() => { this.setState(() => ({isRevealed: true})) }} className="reveal-button">Reveal Answer</div>
                                : <div onClick={() => { this.setState((s) => ({isRevealed: false, currentCard: (s.currentCard + 1) % this.props.cards.length})) }} className="reveal-button">Next</div>
                        }

                    </div>
                </div>
            </div >
        )
    };
};


const mapStateToProps = (state) => {
    return {
        deck: state.activeDeck ? state.activeDeck.deck : {},
        cards: state.activeDeck.deck
            ? state.activeDeck.deck.cards.map(
                card => {
                    console.log("CARD::::" + JSON.stringify(card));
                    return Object.values(card)[0];
                }).filter(c => c !== null)
            : []
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getActiveDeck: (deckId) => dispatch(getActiveDeck(deckId)),
        openNewCardModal: () => dispatch(changeNewCardVisibility(true)),
        setActiveDeck: (deckId) => {
            dispatch(getActiveDeck(deckId))
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(DeckPractice);