import * as yup from 'yup'

const initailValues = { uids: '', password: '' };
const schema = yup.object({
    uids: yup.string().required().min(3),
    password: yup.string().required().min(4)
})

export {initailValues, schema}