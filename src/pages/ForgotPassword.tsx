import { Formik, Form, Field, ErrorMessage } from 'formik'
import {initailValues, schema} from '../validators/forgotpassword'
import { useMutation } from '@tanstack/react-query'
import * as api from '../api'

function ForgotPassword() {
    const mutation = useMutation({
        mutationFn: api.auth.forgotPassword,
        onSuccess: (data)=>{
            console.log(data)
        },
        onError(error, variables, context) {
            console.log(error)
        },
    })

    const onSubmit = (values: object) => {
        mutation.mutate(values)        
    }

    return (
        <div className='container'>
            <div className='login-card col col-md-8 col-lg-5 col-xxl-5 bg-white mt-5 p-3 rounded shadow-lg mx-auto'>
                <p className='fs-1 text-black-50 text-center'>Forgot Password</p>
                <Formik
                    initialValues={initailValues}
                    validationSchema={schema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <div className='mt-2 d-flex justify-content-start align-items-center'>
                            <Field type="text" name="uids" placeholder='username / email' className='form-control' />
                        </div>
                        <div className='mx-5 mt-2 text-danger text-center'>
                            <ErrorMessage name="uids" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className='btn btn-primary text-white mt-2 px-4'>Send</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default ForgotPassword