import * as yup from 'yup'

const initailValues = {
    note: '',
};

const schema = yup.object({
    category: yup.string(),
    note: yup.string().required().min(5),
})

export { initailValues, schema }