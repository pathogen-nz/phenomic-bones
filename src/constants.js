import {
    AUTH0_CLIENT_ID,
    AUTH0_CLIENT_URL,
} from '../config.js'

export const auth0 = {
    AUTH0_CLIENT_ID,
    AUTH0_CLIENT_URL,
}

export const userState = {
    AUTHENTICATED: 'authenticated',
    NOT_AUTHENTICATED: 'not authenticated',
    AUTHENTICATING: 'authenticating',
    ERROR_AUTHENTICATING: 'error authenticating',
}