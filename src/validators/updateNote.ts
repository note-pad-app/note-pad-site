import * as yup from 'yup'

const initailValues = {
    category: 'work',
    note: '<h1>something<h1>',
};

const schema = yup.object({
    category: yup.string(),
    note: yup.string().min(5),
})

export { initailValues, schema }