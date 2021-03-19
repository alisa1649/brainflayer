import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SplashPage from "./splash/splash_page"
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// import containers here

const App = ({ children }) => (
    <div>
        <Switch>
            <Route exact path="/" component={SplashPage} />
        </Switch>
    </div >
);

export default App;
