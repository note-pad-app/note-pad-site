import { Api } from '../Api'

export const store = async (data: object) => {
    return await Api().post('api/notes', data);
}

export const getAll = async (is_deleted='0') => {
    return await Api().get(`api/notes?filters=["is_deleted:${is_deleted}:="]`);
}

export const getFavs = async () => {
    return await Api().get(`api/notes?filters=["is_favorite:1:="]`);
}

export const update = async ({ id, ...data }) => {
    return await Api().put(`api/notes/${id}`, data);
}

export const show = async (id: string) => {
    return await Api().get(`api/notes/${id}`);
}

export const remove = async (id: number) => {
    return await Api().delete(`api/notes/${id}`);
}

export const favorite = async ({ id, ...data }) => {
    return await Api().patch(`api/notes/${id}/favorite`, data);
}

export const softDelete = async (id: number) => {
    return await Api().patch(`api/notes/${id}/soft-delete`);
}

export const recovery = async (id: number) => {
    return await Api().patch(`api/notes/${id}/recover`);
}
