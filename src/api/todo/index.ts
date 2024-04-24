import { Api } from '../Api'

export const store = async (data: object) => {
    return await Api().post('api/todos', data);
}

export const getAll = async () => {
    return await Api().get(`api/todo`);
}

export const update = async ({ id, ...data }) => {
    return await Api().put(`api/todos/${id}`, data);
}

export const show = async (id: number) => {
    return await Api().get(`api/todos/${id}`);
}

export const remove = async (id: number) => {
    return await Api().delete(`api/todos/${id}`);
}
