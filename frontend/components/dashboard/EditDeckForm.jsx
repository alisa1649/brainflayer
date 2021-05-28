import React from 'react';
import { connect } from 'react-redux'
import {changeEditDeckVisibility} from '../../actions/ui_actions';
import Modal from '../modal/modal';
import {editDeck} from "../../util/deck_api_util";
import {getActiveDeck} from "../../actions/active_deck_actions";

class EditDeckForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            tags: "",
            editDeckVisibility: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // let Deck = Object.assign({}, this.state);
        // console.log(Deck)
        const deck = this.props.deck
        console.log(deck)
        this.props.processForm(deck);
        this.props.closeModal();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState((s) => ({
                title: this.props.title,
                tags: this.props.tags,
                editDeckVisibility: s.editDeckVisibility
            }))
        }
    }

    render() {
        const contents = (
            <Modal className="edit-deck-modal-container" closeModal={this.props.closeModal}>
                <form onSubmit={this.handleSubmit} className="modal-form-box">
                    <h2>Edit This Deck</h2>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.update('title')}
                        className="modal-input"
                    />
                    <input
                        type="text"
                        value={this.state.tags}
                        onChange={this.update('tags')}
                        className="modal-input"
                    />
                    <div className="notes">Use commas to separate multiple tags.</div>
                    <input className={`form-submit ${this.state.title.length < 1 ? "disabled" : ""}`} type="submit" />
                </form>
            </Modal>
        );
        return this.props.visible ? contents : null;
    }
}

const mapStateToProps = (state) => {
    return {
        deck: state.activeDeck ? state.activeDeck.deck : null,
        deckId: state.activeDeck.deck ? state.activeDeck.deck.id : null,
        visible: state.ui.editDeckVisibility,
        title: state.activeDeck.deck ? state.activeDeck.deck.title : "",
        tags: state.activeDeck.deck ? state.activeDeck.deck.tags : ""
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (deck) => dispatch(editDeck(deck)),
        closeModal: () => dispatch(changeEditDeckVisibility(false)),
        getDeck: (deckId) => {
            return dispatch(getActiveDeck(deckId))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditDeckForm);

