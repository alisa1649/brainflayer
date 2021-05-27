import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { deleteDeck, getDecks } from '../../actions/deck_actions';
import { getActiveDeck } from '../../actions/active_deck_actions';
import { Redirect } from 'react-router-dom';
import { changeNewDeckVisibility } from '../../actions/ui_actions';
import { Link } from 'react-router-dom';

class DeckNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSettingsVisible: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.deckClickHandler = this.deckClickHandler.bind(this);
    }

    componentDidMount() {
        this.props.getDecks();
        document.addEventListener("click", this.hideDropdown);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.hideDropdown);
    }

    toggleDropdown(e) {
        e.stopPropagation();
        this.setState({
            isSettingsVisible: !this.state.isSettingsVisible
        })
    }

    hideDropdown() {
        this.setState({
            isSettingsVisible: false
        })
    }

    deckClickHandler(event) {
        const key = event.currentTarget.getAttribute("deck-id");
        this.props.getDeck(key)
    }

    render() {
        const numDecks = Object.keys(this.props.decks).length
        const content = (
            <div className="deck-nav">
                <div className="deck-nav-header">
                    <Link to="/landing" className="dashboard-logo"></Link>
                    <Link to="/dashboard" className="profile-container">
                        <img className="user-account-image" src="https://brainscape-prod.s3.amazonaws.com/images/avatar_generic_square.png"></img>
                        <div className="user-email">{this.props.email}</div>
                        <div className="user-stats">{`${numDecks} Decks Created`} </div>
                    </Link>
                    <div className="settings-button" onClick={this.toggleDropdown}>
                        <span className="ion-ios-gear"></span>
                        <div className={"settings-dropdown" + (this.state.isSettingsVisible ? "" : " hidden")}>
                            <ul>
                                <li className="logout" onClick={this.props.logout}>Log Out</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="deck-nav-decks">
                    <div className="decks-utils">
                        <div className="classes">MY DECKS({this.props.decks.length})</div>
                        <div className="util-buttons">
                            <span className="plus-button" onClick={this.props.openNewDeckModal}></span>
                            <Link to="/subjects" className="search-icon"></Link>
                        </div>
                    </div>
                    <div className="decks">
                        <ul>
                            {
                                this.props.decks.map((deck, i) => {
                                    return (
                                        <li className={"deck-bar" + (this.props.deck && this.props.deck.id == deck.id ? " active" : "")} key={i} deck-id={deck.id} onClick={this.deckClickHandler}>
                                            <div className="deck-icon">
                                                <img className="pack-icon-image" src="https://s3.amazonaws.com/brainscape-prod/system/pm/017/603/530/active_icons/iphone_3x_retina_161650729620210323-4823-oic2v.png?1616507296" />
                                            </div>
                                            <div className="deck-title-container">
                                                <span className="deck-title">{deck.title}</span>
                                                <div className="deck-delete" onClick={() => { this.props.removeDeck(deck) }}>
                                                    <div className="delete-deck-flag"></div>
                                                </div>

                                            </div>

                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="deck-actions">
                            <div className="deck-action" onClick={this.props.openNewDeckModal}>
                                <span className="material-icons add-icon">
                                    add
                                </span>
                                <span className="deck-action-text">
                                    Create New Deck
                                </span>
                            </div>
                            <div className="deck-action">
                                <span className="material-icons find-icon">
                                    search
                                </span>
                                <Link to="/subjects" className="deck-action-text">
                                    Find Flashcards
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )

        if (this.props.loggedIn) {
            return content;
        }
        else {
            return <Redirect to="/" />
        }
    }

}

const mapStateToProps = (state) => {
    return {
        deck: state.activeDeck ? state.activeDeck.deck : {},
        loggedIn: Boolean(state.session.id),
        decks: state.decks ? Object.values(state.decks) : [],
        email: Object.values(state.users)[0].email
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
        removeDeck: (deck) => {
            return dispatch(deleteDeck(deck.id))
        },
        logout: () => {
            return dispatch(logout())
        },
        openNewDeckModal: () => dispatch(changeNewDeckVisibility(true))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckNav);