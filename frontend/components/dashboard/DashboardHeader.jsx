import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getDecks } from '../../actions/deck_actions';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { render } from 'react-dom';

class DashboardHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getDecks();
    }

    render() {
        const content = (
            <div className="dash-header">
                <div className="header-icon-container">
                    icon here
                </div>
                <div className="header-text-container">
                    <div className="header-title">
                        deck title goes here
                    </div>
                    <div className="creator-name">
                        author's name goes here
                    </div>
                    <div className="header-buttons">
                        possibly style play/share/elipses buttons here?
                    </div>
                </div>
            </div>
        )
        if (this.props.loggedIn) {
            return content;
        }
        else {
            return <Redirect to="/" />
        }
    }
};



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


export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);
