export const CHANGE_LOGIN_VISIBILITY = 'CHANGE_LOGIN_VISIBILITY';
export const CHANGE_SIGNUP_VISIBILITY = 'CHANGE_SIGNUP_VISIBILITY';

export const changeLoginVisibility = (visibility) => ({
    type: CHANGE_LOGIN_VISIBILITY,
    visibility: visibility
});

export const changeSignupVisibility = (visibility) => ({
    type: CHANGE_SIGNUP_VISIBILITY,
    visibility: visibility
});