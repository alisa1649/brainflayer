import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createCard } from '../../actions/active_deck_actions';
import { login } from '../../actions/session_actions';
import { changeNewCardVisibility } from '../../actions/ui_actions';
import Modal from '../modal/modal';

class NewCardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
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
        const card = Object.assign({}, this.state);
        this.props.processForm(this.props.deckId, card);
        this.props.closeModal();
    }

    render() {
        const contents = (
            <Modal className="new-card-modal-container" closeModal={this.props.closeModal}>
                <form onSubmit={this.handleSubmit} className="modal-form-box">
                    <h2>Create New Card</h2>
                    <input
                        type="text"
                        placeholder="Question"
                        onChange={this.update('title')}
                        className="modal-input"
                    />
                    <input
                        type="text"
                        placeholder="Answer"
                        onChange={this.update('body')}
                        className="modal-input"
                    />
                    <div className="notes">Enter the question for your new card above</div>
                    <input className={`form-submit ${this.state.title.length < 1 || this.state.body.length < 1 ? "disabled" : ""}`} type="submit" />
                </form>
            </Modal>
        );
        return this.props.visible ? contents : null;
    }
}

const mapStateToProps = (state) => {
    return {
        deckId: state.activeDeck.deck ? state.activeDeck.deck.id : null,
        visible: state.ui.newCardVisibility
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (deckId, card) => dispatch(createCard(deckId, card)),
        closeModal: () => dispatch(changeNewCardVisibility(false))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCardForm);

