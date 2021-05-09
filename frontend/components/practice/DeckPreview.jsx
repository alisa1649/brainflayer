import React from "react";
import DashboardHeader from "../dashboard/DashboardHeader";
import CardItem from "../dashboard/CardItem";
import {connect} from "react-redux";
import {changeNewCardVisibility} from "../../actions/ui_actions";
import {getActiveDeck} from "../../actions/active_deck_actions";
import NavBar from "../navbar/navbar";

class DeckPreview extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setActiveDeck(this.props.match.params.deck_id)
    }

    render() {
        return (
            <div className="display-container" style={{width: "100%"}}>
                <NavBar />
                <DashboardHeader deck={this.props.deck} />
                <div className="deck-show">
                    <div className="deck-cards-navbar">
                    </div>
                    <ul className="deck-list">
                        {
                            this.props.cards.map((card, i) => (
                                <CardItem card={card} key={i}/>
                            ))
                        }
                    </ul>
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
                })
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


export default connect(mapStateToProps, mapDispatchToProps)(DeckPreview);