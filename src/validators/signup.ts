import * as yup from 'yup'

const initailValues = { username: '', email: '', password: '', confirm: '' };
const schema = yup.object({
    username: yup.string().required().min(3),
    email: yup.string().required().min(3).email(),
    password: yup.string().required().min(4),
    confirm: yup.string().label('confirm password').required().oneOf([yup.ref('password'), null], 'password must match!')
})

export { initailValues, schema }