import * as yup from 'yup'

const initailValues = {
    category: '',
};

const schema = yup.object({
    category: yup.string().required(),
})

export { initailValues, schema }