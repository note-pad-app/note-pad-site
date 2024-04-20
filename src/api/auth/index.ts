import { api } from '../index'

export const signup = async (userdata: object) => {
    return await api().post('api/auth/register', userdata);
}

export const login = async (userdata: object) => {
    return await api().post('api/auth/login', userdata);
}

export const logout = async () => {
    return await api().post('api/auth/logout');
}

export const forgotPassword = async (data: object) => {
    return await api().post('api/auth/forgot-password', data);
}

export const resetPassword = async (data: object) => {
    return await api().post('api/auth/reset-password', data);
}

