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
    }

    componentDidMount() {
        this.props.getDecks();
    }

    render() {
        const content = (
            <div className="deck-nav">
                <ul>
                    {
                        this.props.decks.map((deck, i) => {
                            return <li key={i}>{deck.title}</li>
                        })
                    }
                </ul>
                <a href="#" onClick={(e) => {
                    e.stopPropagation();
                    this.props.logout();
                }}>Log Out</a>
            </div>
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
        decks: state.decks ? Object.values(state.decks) : []
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