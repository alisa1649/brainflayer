import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getDecks } from '../../actions/deck_actions';
import { getActiveDeck } from '../../actions/active_deck_actions';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { render } from 'react-dom';
import DashboardHeader from './DashboardHeader';

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
                    <div>
                        <ul>
                            {
                                this.props.cards.map((card, i) => (
                                    <li key={i}>
                                        <span className="card-title">
                                            {card.title}
                                        </span>
                                        <span className="card-body">
                                            {card.body}
                                        </span>
                                    </li>))
                            }
                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}


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
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(DeckShow);