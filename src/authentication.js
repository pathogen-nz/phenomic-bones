import Auth0Lock from 'auth0-lock';

import { auth0 } from './constants';

export const authenticateUser = (successCallback, errorCallback, failedCallback) => {
    const { AUTH0_CLIENT_ID, AUTH0_CLIENT_URL } = auth0;

    const lockOptions = {
        auth: {
            redirect: false
        },
        autoclose: true
    }

    const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_CLIENT_URL, lockOptions);

    lock.show();

    lock.on('authenticated', (result) => {
        lock.getUserInfo(result.accessToken, (error, profile) => {
            if (error) {
                errorCallback(error);
            }
            else {
                successCallback(profile);
            }
        })
    })

    lock.on('unrecoverable_error', (error) => {
        lock.hide();
        errorCallback(error);
    })

    lock.on('authorization_error', (error) => {
        lock.hide();
        failedCallback(error);
    })
}