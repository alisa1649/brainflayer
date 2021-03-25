import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';
import { CHANGE_LOGIN_VISIBILITY, CHANGE_SIGNUP_VISIBILITY, CLEAR_SESSION_ERRORS } from "../actions/ui_actions"

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case CHANGE_LOGIN_VISIBILITY:
            return [];
        case CHANGE_SIGNUP_VISIBILITY:
            return [];
        default:
            return state;
    }
};
