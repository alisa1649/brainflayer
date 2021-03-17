import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    SET_LOGIN_MODAL_VISIBILITY,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, state, { id: action.currentUser.id });
            break;
        case LOGOUT_CURRENT_USER:
            newState = Object.assign({}, state);
            delete newState[id];
            break;
        case SET_LOGIN_MODAL_VISIBILITY:
            newState = Object.assign({}, state, { isLoginModalVisible: action.value })
            break;
        default:
            newState = state;
            break;
    }

    console.log("YYYYYYY: ", JSON.stringify(state));
    console.log("ZZZZZZZ: ", JSON.stringify(newState));

    return newState;
};

export default sessionReducer;
