import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import SplashPage from "./splash/splash_page"
import Dashboard from "./dashboard/Dashboard"
import Subjects from "./search/Subjects";
import SearchResults from "./search/SearchResults";
import DeckPractice from "./practice/DeckPractice";

// import containers here

const App = ({ children, loggedIn }) => (
    <Switch>
        {
            loggedIn
                ? <Route exact path="/" component={Dashboard} />
                : <Route exact path="/" component={SplashPage} />
        }
        <Route exact path="/landing" component={SplashPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/subjects" component={Subjects} />
        <Route exact path="/subjects/:search_term" component={SearchResults} />
        <Route exact path="/practice/:deck_id" component={DeckPractice} />
    </Switch>
);

const mapStateToProps = (state) => {
    return {
        loggedIn: Boolean(state.session.id),
    }
};
const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
