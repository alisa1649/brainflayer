export const CHANGE_LOGIN_VISIBILITY = 'CHANGE_LOGIN_VISIBILITY';
export const CHANGE_SIGNUP_VISIBILITY = 'CHANGE_SIGNUP_VISIBILITY';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const changeLoginVisibility = (visibility) => {
    return {
        type: CHANGE_LOGIN_VISIBILITY,
        visibility: visibility
    }
};

export const changeSignupVisibility = (visibility) => {

    return {
        type: CHANGE_SIGNUP_VISIBILITY,
        visibility: visibility
    }
};

export const clearSessionErrors = () => {
    return {
        type: CLEAR_SESSION_ERRORS,
    }
}

