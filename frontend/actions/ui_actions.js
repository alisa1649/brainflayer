import * as APIUtil from '../util/session_api_util';

export const CHANGE_LOGIN_VISIBILITY = 'CHANGE_LOGIN_VISIBILITY';

export const changeLoginVisibility = (visibilty) => ({
    type: CHANGE_LOGIN_VISIBILITY,
    visibilty
});