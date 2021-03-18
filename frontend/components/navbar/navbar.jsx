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
                <div className="actions">
                    <div className="action login" onClick={this.props.openLoginModal}>
                        Log In
                    </div>
                    <div className="action upgrade" onClick={this.props.openSignupModal}>
                        Get Started
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // TODO: add current user login status here 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openLoginModal: () => dispatch(changeLoginVisibility(true)),
        openSignupModal: () => dispatch(changeSignupVisibility(true)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);