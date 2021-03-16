import { combineReducers } from 'redux';
import errors from './errors_reducer';
import session from './session_reducer';
import users from "./users_reducer";

const rootReducer = combineReducers({
    users,
    session,
    errors,
});

export default rootReducer;
