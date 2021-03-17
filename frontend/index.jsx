import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: {
                id: window.currentUser.id,
            },
            users: { [window.currentUser.id]: window.currentUser }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    }
    else {
        const preloadedState = {
            session: {
                id: null,
            }
        };
        store = configureStore(preloadedState);
    }

    ReactDOM.render(<Root store={store} />, document.getElementById("root"))


    // make state available for debugging
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.ajax = $.ajax;
});