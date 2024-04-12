import * as yup from 'yup'

const initailValues = { photo: '',fullname: 'edriss aria' , username: 'edriss'};

const schema = yup.object({
    photo: yup.string(),
    fullname: yup.string().min(4),    
    username: yup.string().min(3),
})

export {initailValues, schema}