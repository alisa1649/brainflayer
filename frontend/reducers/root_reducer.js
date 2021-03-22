import { combineReducers } from 'redux';
import errors from './errors_reducer';
import session from './session_reducer';
import users from "./users_reducer";
import ui from "./ui_reducer";
import decks from "./decks_reducer";

const rootReducer = combineReducers({
    decks,
    users,
    session,
    errors,
    ui
});

export default rootReducer;
