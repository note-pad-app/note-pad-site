import {api} from '../index'

// getting data
export const getNotes = () => api.get('notes').then(res=> console.log(res)).catch(er=> console.log(er))
// user registeration 
export const register = (data: JSON) => api.post('register', data).then(res=> console.log(res.data)).catch(er=> console.log(er))
