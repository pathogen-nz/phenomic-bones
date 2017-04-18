import { userState } from './constants';
import * as api from './authentication';

/* Actions */

const USER_LOGOUT = 'phenomic-bones/user/logout'

const USER_AUTHENTICATE = 'phenomic-bones/user/authenticate'
const USER_AUTHENTICATING = 'phenomic-bones/user/authenticating'
const USER_AUTHENTICATION_ERROR = 'phenomic-bones/user/authenticationError'
const USER_AUTHENTICATION_FAILED = 'phenomic-bones/user/authenticationFailed'

/* Reducers */

const initialState = {
    profile: null,
    state: userState.NOT_AUTHENTICATED,
}

export const user = (state = initialState, action) => {
    if (action.type === USER_AUTHENTICATE) {
        return {
            ...state,
            profile: action.profile,
            state: userState.AUTHENTICATED,
        }
    }
    else if (action.type === USER_AUTHENTICATING) {
        return {
            ...state,
            state: userState.AUTHENTICATING,
        }
    }
    else if (action.type === USER_AUTHENTICATION_ERROR) {
        return {
            ...state,
            state: userState.ERROR_AUTHENTICATING,
        }
    }
    else if (action.type === USER_AUTHENTICATION_FAILED) {
        return {
            ...state,
            state: userState.NOT_AUTHENTICATED,
        }
    }
    else if (action.type === USER_LOGOUT) {
        return {
            ...state,
            profile: null,
            state: userState.NOT_AUTHENTICATED,
        }
    }
    else {
        return state
    }
}

/* Action Creators */

const userAuthenticate = (userProfile) => {
    return {
        type: USER_AUTHENTICATE,
        profile: userProfile,
    }
}

const userAuthenticating = () => {
    return {
        type: USER_AUTHENTICATING,
    }
}

const userAuthenticationError = () => {
    return {
        type: USER_AUTHENTICATION_ERROR,
    }
}

const userAuthenticationFailed = () => {
    return {
        type: USER_AUTHENTICATION_FAILED,
    }
}

const userLogout = () => {
    return {
        type: USER_LOGOUT,
    }
}

const userLogin = () => {
    return (dispatch) => {
        dispatch(userAuthenticating());

        api.authenticateUser({
            onSuccess: (userProfile) => {
                dispatch(userAuthenticate(userProfile));
            },
            onError: (error) => {
                dispatch(userAuthenticationError(error));
            },
            onFailure: (error) => {
                dispatch(userAuthenticationFailed(error));
            }
        });
    }
}

export const actions = {
    userLogin,
    userLogout,
}