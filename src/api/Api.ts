import axios from 'axios'
import { store } from '../state/store';

export function Api() {
    const token = store.getState().auth.token

    return axios.create({
        baseURL: 'http://127.0.0.1:3333/',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

