export const CHANGE_LOGIN_VISIBILITY = 'CHANGE_LOGIN_VISIBILITY';
export const CHANGE_SIGNUP_VISIBILITY = 'CHANGE_SIGNUP_VISIBILITY';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const CHANGE_NEW_CARD_VISIBILITY = 'CHANGE_NEW_CARD_VISIBILITY';
export const CHANGE_NEW_DECK_VISIBILITY = 'CHANGE_NEW_DECK_VISIBILITY';
export const CHANGE_DELETE_DECK_VISIBILITY = 'CHANGE_DELETE_DECK_VISIBILITY';
export const CHANGE_EDIT_DECK_VISIBILITY = 'CHANGE_EDIT_DECK_VISIBILITY';

export const changeLoginVisibility = (visibility) => {
    return {
        type: CHANGE_LOGIN_VISIBILITY,
        visibility: visibility
    }
};

export const changeSignupVisibility = (visibility) => ({
    type: CHANGE_SIGNUP_VISIBILITY,
    visibility: visibility
});

export const clearSessionErrors = () => {
    return {
        type: CLEAR_SESSION_ERRORS,
    }
}

export const changeNewCardVisibility = (visibility) => ({
    type: CHANGE_NEW_CARD_VISIBILITY,
    visibility: visibility
});

export const changeNewDeckVisibility = (visibility) => ({
    type: CHANGE_NEW_DECK_VISIBILITY,
    visibility: visibility
});

export const changeEditDeckVisibility = (visibility) => ({
    type: CHANGE_EDIT_DECK_VISIBILITY,
    visibility: visibility
});

export const changeDeleteDeckVisibility = (visibility) => ({
    type: CHANGE_DELETE_DECK_VISIBILITY,
    visibility: visibility
});
