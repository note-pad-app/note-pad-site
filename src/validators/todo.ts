import * as yup from 'yup'

const initailValues = {
    todo: '',
};

const schema = yup.object({
    category: yup.string(),
    todo: yup.string().required().min(5),
    important: yup.boolean(),
    reminder: yup.date(),
    remarks: yup.string()
})

export { initailValues, schema }