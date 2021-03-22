import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Redirect } from 'react-router-dom';

const DeckNav = (props) => {

    const content = (
        <div className="deck-nav">
            <a href="#" onClick={(e) => {
                e.stopPropagation();
                props.logout();
            }}>Log Out</a>
        </div>
    )

    if (props.loggedIn) {
        return content;
    }
    else {
        return <Redirect to="/" />
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: Boolean(state.session.id),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            return dispatch(logout())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckNav);