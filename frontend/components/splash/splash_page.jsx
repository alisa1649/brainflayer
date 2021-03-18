import React from 'react';
import Navbar from '../navbar/navbar';
import LoginForm from '../login_form/login_form';
import SignupForm from '../signup_form/signup_form';

class SplashPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginModal: false,
            showSignupModal: false
        }
    }
    render() {
        return (
            <div>
                <Navbar
                    showLoginModal={this.state.showLoginModal}
                    onClickLogin={() => {
                        this.setState({ showLoginModal: true })
                    }}
                />
                <LoginForm
                    active={this.state.showLoginModal}
                    closeModal={() => this.setState({ showLoginModal: false })}
                    onClickNav={() => {
                        this.setState({
                            showSignupModal: true,
                            showLoginModal: false
                        })
                    }}
                />
                <SignupForm
                    active={this.state.showSignupModal}
                    closeModal={() => this.setState({ showSignupModal: false })}
                    onClickNav={() => {
                        this.setState({
                            showLoginModal: true,
                            showSignupModal: false
                        })
                    }}
                />
            </div>
        )
    }
}

export default SplashPage;