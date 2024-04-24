import { Api } from '../Api'

export const store = async (data: object) => {
    return await Api().post('api/categories', data);
}

export const getAll = async (type: string) => {
    return await Api().get(`api/categories?filters=["type:${type}:="]`);
}

export const update = async ({ id, ...data }) => {
    return await Api().put(`api/categories/${id}`, data);
}

export const remove = async (id: number) => {
    return await Api().delete(`api/categories/${id}`);
}

