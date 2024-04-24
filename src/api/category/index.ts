import { Api } from '../Api'

export const store = async (data: object) => {
    return await Api().post('api/categories', data);
}

export const getAll = async (type: string) => {
    return await Api().get(`api/categories?filters=["type:${type}:="]`);
}
