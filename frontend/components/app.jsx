import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SplashPage from "./splash/splash_page"
import SignupForm from './session_form/signup_form_container';
import LoginForm from './session_form/login_form_container';

// import containers here

const App = ({ children }) => (
    <div>
        <h1>Brainflayer</h1>
        <Switch>
            <Route exact path="/" component={SplashPage} />
        </Switch>

        <hr />
        <h1>Testing Area</h1>
        <div style={{ border: "solid black 2px" }}>
            <SignupForm />
        </div>
        <div style={{ border: "solid black 2px" }}>
            <LoginForm />
        </div>
    </div >
);

export default App;
