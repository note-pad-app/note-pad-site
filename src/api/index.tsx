import axios from 'axios'
import { getCookie } from '../helpers/getCookieValue';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

export function api() {
    // const token = useSelector((state: RootState)=> state.auth.token)

    return axios.create({
        baseURL: 'http://127.0.0.1:3333/',
        headers: {
            // Authorization: `Bearer ${token}`,
        },
    })
}

export * as auth from './auth'