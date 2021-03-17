import React from 'react';
import Navbar from '../navbar/navbar';
import Modal from '../interactions/modal';
import LoginForm from '../session_form/login_form_container';

class SplashPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Navbar />
                <LoginForm />
            </div>
        )
    }
}

export default SplashPage;