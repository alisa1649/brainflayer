import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getDecks } from '../../actions/deck_actions';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { render } from 'react-dom';

class DeckNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIdx: 0 }
    }

    componentDidMount() {
        this.props.getDecks();
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
                    <div className="settings-button">
                        <span className="ion-ios-gear"></span>
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




                        <div className="new">
                            <span class="material-icons">
                                add
                            </span>
                            Create New Deck
                        </div>
                        <div className="find">
                            <span class="material-icons">
                                search
                            </span>
                            Find Flashcards
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckNav);