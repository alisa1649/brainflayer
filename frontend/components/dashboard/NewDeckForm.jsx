import React from 'react';
import { connect } from 'react-redux';
import { createDeck } from '../../actions/deck_actions';
import { changeNewDeckVisibility } from '../../actions/ui_actions';
import Modal from '../modal/modal';

class NewDeckForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            tags: ""
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
        const deck = Object.assign({}, this.state);
        this.props.processForm(deck);
        this.props.closeModal();
    }

    render() {
        const contents = (
            <Modal className="new-deck-modal-container" closeModal={this.props.closeModal}>
                <form onSubmit={this.handleSubmit} className="modal-form-box">
                    <h2>Create New Deck</h2>
                    <input
                        type="text"
                        placeholder="Deck Name (e.g. Stonks, Interwebs)"
                        onChange={this.update('title')}
                        className="modal-input"
                    />
                    <input
                        type="text"
                        placeholder="Tags (e.g. investing, technology)"
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
        deckId: state.activeDeck.deck ? state.activeDeck.deck.id : null,
        visible: state.ui.newDeckVisibility
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (deck) => dispatch(createDeck(deck)),
        closeModal: () => dispatch(changeNewDeckVisibility(false))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckForm);

