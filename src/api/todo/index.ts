import { Api } from '../Api'

export const store = async (data: object) => {
    return await Api().post('api/todos', data);
}

export const getAll = async (is_deleted='0') => {
    return await Api().get(`api/todos?filters=["is_deleted:${is_deleted}:="]`);
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

export const complete = async ({ id, ...data }) => {
    return await Api().patch(`api/todos/${id}/complete`, data);
}

export const softDelete = async (id: number) => {
    return await Api().patch(`api/todos/${id}/soft-delete`);
}

export const recovery = async (id: number) => {
    return await Api().patch(`api/todos/${id}/recover`);
}
