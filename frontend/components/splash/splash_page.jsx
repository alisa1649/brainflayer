import React from 'react';
import Navbar from '../navbar/navbar';
import Modal from '../interactions/modal';
import LoginForm from '../session_form/login_form_container';

class SplashPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginModal: true
        }
    }
    render() {
        return (
            <div>
                <Navbar
                    showLoginModal={this.state.showLoginModal}
                    onClickLogin={() => {
                        this.setState({ showLoginModal: true })
                    }} />
                <LoginForm
                    active={true}
                    onClose={() => this.setState({ showLoginModal: false })}
                />
            </div>
        )
    }
}

export default SplashPage;