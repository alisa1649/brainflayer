import {
    CHANGE_LOGIN_VISIBILITY
} from '../actions/ui_actions';

const uiReducer = (state = {}, action) => {
    Object.freeze(state);
    return state;
};

export default uiReducer;
