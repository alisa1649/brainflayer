import React from "react";
import {getActiveDeck} from "../../actions/active_deck_actions";
import {deleteDeck, getDecks} from "../../actions/deck_actions";
import {logout} from "../../actions/session_actions";
import {changeNewDeckVisibility} from "../../actions/ui_actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


class EmptyDecksPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const content = (
                <div className="empty-dashboard-message">
                    <div className="empty-header">
                        <h3 className="empty-header-text">
                            Add Decks to your Library
                        </h3>
                    </div>
                    <div className="empty-dashboard-content">
                        <div className="content-message">Your library is empty.</div>
                    </div>
                    <div className="empty-dashboard-footer">
                        <div className="footer-message">
                            <div className="message-text">You can create your own deck, or browse BrainFlayer's
                                catalog of flashcard tags covering dozens of subjects.
                            </div>
                            <div className="footer-buttons">
                                <div className="button create" onClick={this.props.openNewDeckModal}>
                                    <span className="text">Create a New Deck
                                    </span>
                                </div>
                                <Link to="/subjects" className="button find">
                                    <span className="text">Find Flashcards
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        )
       return content;
    }
}
const mapStateToProps = (state) => {
    console.log("SSSSSS: " + state.activeDeck ? state.activeDeck.deck : {});
    return {
        deck: state.activeDeck ? state.activeDeck.deck : {},
        decks: state.decks ? Object.values(state.decks) : []
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getDeck: (deckId) => {
            return dispatch(getActiveDeck(deckId))
        },
        getDecks: () => {
            return dispatch(getDecks())
        },
        openNewDeckModal: () => dispatch(changeNewDeckVisibility(true))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmptyDecksPage);

