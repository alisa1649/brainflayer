import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SplashPage from "./splash/splash_page"

// import containers here

const App = ({ children }) => (
    <div>
        <h1>Brainflayer</h1>
        <Switch>
            <Route exact path="/" component={SplashPage} />
        </Switch>
    </div>
);

export default App;
