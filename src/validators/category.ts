import * as yup from 'yup'

const initailValues = {
    name: '',
};

const schema = yup.object({
    name: yup.string().required(),
})

export { initailValues, schema }