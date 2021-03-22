import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SplashPage from "./splash/splash_page"
import Dashboard from "./dashboard/Dashboard"
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// import containers here

const App = ({ children }) => (
    <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
);

export default App;
