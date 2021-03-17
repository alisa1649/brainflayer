import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
    const result = createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger));

    // console.log("BBB: " + JSON.stringify(preloadedState, null, 2));
    // console.log("CCC: " + JSON.stringify(result, null, 2));
    return result;
}

export default configureStore;