import * as yup from 'yup'

const schema = yup.object({
    photo: yup.string(),
    fullname: yup.string().max(4),    
    username: yup.string().min(3),
})

export {schema}