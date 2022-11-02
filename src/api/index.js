import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333/'
})

// getting data 
export const getNotes = () => api.get('notes').then(res=> console.log(res)).catch(er=> console.log(er))
// user registeration 
export const register = (data) => api.post('register', data).then(res=> console.log(res.data)).catch(er=> console.log(er))
