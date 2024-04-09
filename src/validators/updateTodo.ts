import * as yup from 'yup'

const initailValues = {
    category: 'work',
    todo: "something to do",
    important: true, 
    reminder: "2024-04-30T06:07",
    remarks: "remarks",
};

const schema = yup.object({
    category: yup.string(),
    todo: yup.string().required().min(5),
    important: yup.boolean(),
    reminder: yup.date(),
    remarks: yup.string()
})

export { initailValues, schema }