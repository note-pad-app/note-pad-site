import { Formik, Form, Field, ErrorMessage } from 'formik'
import { initailValues, schema } from '../validators/changepassword'
import { useMutation } from '@tanstack/react-query'
import * as api from '../api'
import { useSearchParams } from 'react-router-dom'

function ResetPassword() {
    const [searchParams] = useSearchParams()

    const mutation = useMutation({
        mutationFn: api.auth.resetPassword,
        onSuccess: (data) => {
            console.log(data)
        },
        onError(error, variables, context) {
            console.log(error)
        },
    })

    const onSubmit = (values: any) => {
        const new_values = {
            user_id: searchParams.get('user_id'),
            token: searchParams.get('token'),
            password: values.password
        }
        
        mutation.mutate(new_values)        
    }

    return (
        <div className='container'>
            <div className='login-card col col-md-8 col-lg-5 col-xxl-5 bg-white mt-5 p-3 rounded shadow-lg mx-auto'>
                <p className='fs-1 text-black-50 text-center'>Login</p>
                <Formik
                    initialValues={initailValues}
                    validationSchema={schema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <div className='mt-2 d-flex justify-content-start align-items-center'>
                            <Field type="password" name="password" placeholder='new password' className='form-control' />
                        </div>
                        <div className='mx-5 mt-2 text-danger text-center'>
                            <ErrorMessage name="password" />
                        </div>
                        <div className='mt-3 d-flex justify-content-start align-items-center'>
                            <Field type="password" name="confirm" placeholder='retype password' className='form-control' />
                        </div>
                        <div className='mx-5 mt-2 text-danger text-center'>
                            <ErrorMessage name="confirm" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className='btn btn-primary text-white mt-2 px-4'>Reset</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default ResetPassword