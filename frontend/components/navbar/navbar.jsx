import React from 'react';
import { connect } from 'react-redux';
import { setLoginModalVisibility } from '../../actions/session_actions';

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
                    <div className="action login" onClick={this.props.showLoginModal}>
                        Log In
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log("XXXX: " + JSON.stringify(state, null, 2));
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        showLoginModal: () => dispatch(setLoginModalVisibility(true))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);