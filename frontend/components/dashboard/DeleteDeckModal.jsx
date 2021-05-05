import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Modal from '../modal/modal';
import {deleteDeck} from "../../actions/deck_actions";
import {changeDeleteDeckVisibility} from "../../actions/ui_actions";
import DashboardHeader from "./DashboardHeader";
import {getActiveDeck} from "../../actions/active_deck_actions";

class DeleteDeckModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    deleteDeck() {
        this.props.removeDeck(this.props.deck)
    }
    rerender() {
        this.setState()
       return <Redirect to="/" />
    }

    render() {
        const contents = (
            <Modal className="delete-deck-modal" closeModal={this.props.closeModal}>
                <div className="delete-deck-body">
                    <div className="delete-deck-content">
                        <div className="delete-title">
                            Caution
                        </div>
                        <div className="delete-warning">
                            Are you sure you want to move this deck from your library? This action cannot be undone.
                        </div>
                        <div className="delete-buttons">
                            <div className="button cancel" onClick={this.props.closeModal}>
                                <span className="text">No, Cancel
                                </span>
                            </div>
                            <div className="button proceed" onClick={() => {
                                this.deleteDeck();
                                this.rerender();
                                this.props.closeModal();
                            }}>
                                <span className="text">Yes, please proceed
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
        return this.props.visible ? contents : ""
    }
}

const mapStateToProps = (state) => {
    return {
        deck: state.activeDeck ? state.activeDeck.deck : {},
        visible: state.ui.deleteDeckVisibility
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDeck: (deckId) => {
            return dispatch(getActiveDeck(deckId))
        },
        processForm: (deckId) => dispatch(deleteDeck(deckId)),
        closeModal: () => dispatch(changeDeleteDeckVisibility(false)),
        openDeleteDeckModal: () => dispatch(changeDeleteDeckVisibility(true)),
        removeDeck: (deck) => {
            return dispatch(deleteDeck(deck.id))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteDeckModal);

