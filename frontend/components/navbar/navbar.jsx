import React from 'react';
import { connect } from 'react-redux';
import { changeLoginVisibility, changeSignupVisibility } from '../../actions/ui_actions';

class NavBar extends React.Component {
    render() {
        return (
            <div id="navbar">
                <div className="logo-container">
                    <div className="logo"></div>
                </div>

                <span className="items">
                    <div className="options">
                        <div className="option find-flashcards">
                            Find Flashcards
                    </div>
                        <div className="option make-flashcards">
                            Make Flashcards
                    </div>
                        <div className="option why-works">
                            Why It Works
                    </div>
                        <div className="option learn-more">
                            More...
                    </div>
                    </div>

                    {
                        this.props.loggedIn
                            ? <div className="actions">
                                <div className="action login" onClick={this.props.openLoginModal}>
                                    {this.props.email}
                                </div>
                                <div className="action upgrade" onClick={this.props.openSignupModal}>
                                    Upgrade To Pro
                            </div>
                            </div>
                            : <div className="actions">
                                <div className="action login" onClick={this.props.openLoginModal}>
                                    Log In
                            </div>
                                <div className="action upgrade" onClick={this.props.openSignupModal}>
                                    Get Started
                            </div>
                            </div>
                    }
                </span>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loggedIn: Boolean(state.session.id),
        email: state.users[state.session.id].email
    }
};

const mapDispatchToProps = dispatch => {
    return {
        openLoginModal: () => dispatch(changeLoginVisibility(true)),
        openSignupModal: () => dispatch(changeSignupVisibility(true)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);