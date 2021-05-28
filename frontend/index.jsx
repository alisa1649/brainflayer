import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const preloadedState = {
        ui: {
            loginVisibility: false,
            signupVisibility: false
        }
    }
    if (window.currentUser) {
        preloadedState.session = { id: window.currentUser.id };
        preloadedState.users = { [window.currentUser.id]: window.currentUser };
        delete window.currentUser;
    }
    const store = configureStore(preloadedState);

    ReactDOM.render(<Root store={store} />, document.getElementById("root"))


    // make state available for debugging
    window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.ajax = $.ajax;
});