import {
    CHANGE_LOGIN_VISIBILITY,
    CHANGE_SIGNUP_VISIBILITY
} from '../actions/ui_actions';

const uiReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CHANGE_LOGIN_VISIBILITY:
            return Object.assign({}, state, { loginVisibility: action.visibility })
        case CHANGE_SIGNUP_VISIBILITY:
            return Object.assign({}, state, { signupVisibility: action.visibility })
        default:
            return state;
    }
};

export default uiReducer;