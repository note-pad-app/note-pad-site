import { Api } from '../Api'

export const signup = async (userdata: object) => {
    return await Api().post('api/auth/register', userdata);
}

export const login = async (userdata: object) => {
    return await Api().post('api/auth/login', userdata);
}

export const logout = async () => {
    return await Api().post('api/auth/logout');
}

export const forgotPassword = async (data: object) => {
    return await Api().post('api/auth/forgot-password', data);
}

export const resetPassword = async (data: object) => {
    return await Api().post('api/auth/reset-password', data);
}

export const userInfo = async () => {
    return await Api().get('api/auth/info');
}

