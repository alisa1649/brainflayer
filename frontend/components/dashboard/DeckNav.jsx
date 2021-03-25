import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getDecks } from '../../actions/deck_actions';
import { Redirect } from 'react-router-dom';
import { changeNewDeckVisibility } from '../../actions/ui_actions';

class DeckNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIdx: 0,
            isSettingsVisible: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
    }

    componentDidMount() {
        this.props.getDecks();
        document.addEventListener("click", this.hideDropdown);
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

    render() {
        const content = (
            <div className="deck-nav">
                {/* <a href="#" onClick={(e) => {
                    e.stopPropagation();
                    this.props.logout();
                }}>Log Out</a> */}

                <div className="deck-nav-header">
                    <div className="dashboard-logo"></div>
                    <div className="profile-container">
                        <img className="user-account-image" src="https://brainscape-prod.s3.amazonaws.com/images/avatar_generic_square.png"></img>
                        <div className="user-email">{this.props.email}</div>
                        <div className="user-stats">0 Total Cards Submitted * 2 Decks Created</div>
                    </div>
                    <div className="settings-button" onClick={this.toggleDropdown}>
                        <span className="ion-ios-gear"></span>
                        <div className={"settings-dropdown" + (this.state.isSettingsVisible ? "" : " hidden")}>
                            <ul>
                                <li class="logout" onClick={this.props.logout}>Log Out</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="deck-nav-decks">
                    <div className="decks-utils">
                        <div className="classes">MY DECKS({this.props.decks.length})</div>
                        <div className="util-buttons">
                            <span class="plus-button"></span>
                            <span class="search-icon"></span>
                        </div>
                    </div>
                    <div className="decks">
                        <ul>
                            {
                                this.props.decks.map((deck, i) => {
                                    return (
                                        <li className={"deck-bar" + (this.state.activeIdx == i ? " active" : "")} key={i} onClick={() => { this.setState({ activeIdx: i }) }}>
                                            <div className="deck-icon">
                                                <img class="pack-icon-image" src="https://s3.amazonaws.com/brainscape-prod/system/pm/017/603/530/active_icons/iphone_3x_retina_161650729620210323-4823-oic2v.png?1616507296" />
                                            </div>
                                            <div className="deck-title-container">
                                                <span className="deck-title">{deck.title}</span>
                                                <div className="deck-delete"></div>
                                            </div>

                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="deck-actions">
                            <div className="deck-action">
                                <span class="material-icons add-icon">
                                    add
                                </span>
                                <span className="deck-action-text" onClick={this.props.openNewDeckModal}>
                                    Create New Deck
                                </span>
                            </div>
                            <div className="deck-action">
                                <span class="material-icons find-icon">
                                    search
                                </span>
                                <span className="deck-action-text">
                                    Find Flashcards
                                </span>

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
        loggedIn: Boolean(state.session.id),
        decks: state.decks ? Object.values(state.decks) : [],
        email: Object.values(state.users)[0].email
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getDecks: () => {
            return dispatch(getDecks())
        },
        logout: () => {
            return dispatch(logout())
        },
        openNewDeckModal: () => dispatch(changeNewDeckVisibility(true)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckNav);