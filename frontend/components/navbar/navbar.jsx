import React from 'react';
import { connect } from 'react-redux';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginModal: props.showLoginModal
        };
    }
    render() {
        return (
            <div id="navbar">
                <div className="logo-container">
                    <div className="logo"></div>
                </div>
                <div className="actions">
                    <div className="action login" onClick={this.props.onClickLogin}>
                        Log In
                    </div>
                </div>
            </div>
        )
    }
}
export default NavBar;