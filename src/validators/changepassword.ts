import * as yup from 'yup'

const initailValues = { password: '', confirm: '' };
const schema = yup.object({
    password: yup.string().required().min(4),
    confirm: yup.string().required().min(4).oneOf([yup.ref('password'), null], 'passwords must match')
})

export {initailValues, schema}