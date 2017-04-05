/* Actions */

const USER_LOGIN = 'user/login'
const USER_LOGOUT = 'user/logout'

/* Reducers */

const initialState = {
    loggedin: false,
}

export const user = (state = initialState, action) => {
    if (action.type === USER_LOGIN) {
        return {
            ...state,
            loggedin: true,
        }
    }
    else if (action.type === USER_LOGOUT) {
        return {
            ...state,
            loggedin: false,
        }
    }
    else {
        return state
    }
}

/* Action Creators */

const userLogin = () => {
    return {
        type: USER_LOGIN,
    }
}

const userLogout = () => {
    return {
        type: USER_LOGOUT,
    }
}

export const actions = {
    userLogin,
    userLogout,
}