import React from 'react';
import Navbar from '../navbar/navbar';
import LoginForm from '../login_form/login_form';
import SignupForm from '../signup_form/signup_form';

class SplashPage extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <LoginForm />
                <SignupForm />
            </div>
        )
    }
}

export default SplashPage;