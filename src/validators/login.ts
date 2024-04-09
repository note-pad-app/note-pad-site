import * as yup from 'yup'

const initailValues = { username: '', password: '' };
const schema = yup.object({
    username: yup.string().required().min(3),
    password: yup.string().required().min(4)
})

export {initailValues, schema}