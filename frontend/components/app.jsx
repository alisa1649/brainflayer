import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SplashPage from "./splash/splash_page"
import SignupForm from './session_form/signup_form_container';
import LoginForm from './session_form/login_form_container';

// import containers here

const App = ({ children }) => (
    <div>
        <Switch>
            <Route exact path="/" component={SplashPage} />
        </Switch>
    </div >
);

export default App;