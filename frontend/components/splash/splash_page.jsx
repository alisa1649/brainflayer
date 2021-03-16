import React from 'react';
import SignupForm from '../session_form/signup_form.jsx';

class SplashPage extends React.Component {
    render() {
        return (
            <div>
                Hi I'm splashpage
                <SignupForm />
            </div>
        )
    }
}

export default SplashPage;