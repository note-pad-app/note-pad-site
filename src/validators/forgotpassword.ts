import * as yup from 'yup'

const initailValues = { uids: ''};
const schema = yup.object({
    uids: yup.string().required().min(3),
})

export {initailValues, schema}