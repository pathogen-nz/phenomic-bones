import { userState } from './constants';

/* Actions */

const USER_LOGOUT = 'phenomic-bones/user/logout'

const USER_AUTHENTICATE = 'phenomic-bones/user/authenticate'
const USER_AUTHENTICATING = 'phenomic-bones/user/authenticating'

/* Reducers */

const initialState = {
    loggedin: false,
    state: userState.NOT_AUTHENTICATED,
}

export const user = (state = initialState, action) => {
    if (action.type === USER_AUTHENTICATE) {
        return {
            ...state,
            loggedin: true,
            state: userState.AUTHENTICATED,
        }
    }
    else if (action.type === USER_AUTHENTICATING) {
        return {
            ...state,
            state: userState.AUTHENTICATING,
        }
    }
    else if (action.type === USER_LOGOUT) {
        return {
            ...state,
            loggedin: false,
            state: userState.NOT_AUTHENTICATED,
        }
    }
    else {
        return state
    }
}

/* Action Creators */

const userAuthenticate = () => {
    return {
        type: USER_AUTHENTICATE,
    }
}

const userAuthenticating = () => {
    return {
        type: USER_AUTHENTICATING,
    }
}

const userLogout = () => {
    return {
        type: USER_LOGOUT,
    }
}

const userLogin = (dispatch) => {
    return (dispatch) => {
        dispatch(userAuthenticating());

        setTimeout(() => {
            dispatch(userAuthenticate());
        }, 1000)
    }
}

export const actions = {
    userLogin,
    userLogout,
}