import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link, Navigate } from 'react-router-dom'
import { initailValues, schema } from '../validators/signup'
import { useMutation } from '@tanstack/react-query'
import * as api from '../api'
import { setAuthToken } from '../state/slices/auth'
import { useDispatch, useSelector } from 'react-redux'

function SignUp() {
    
    const dispatch = useDispatch()
    const mutation = useMutation({
        mutationFn: api.auth.signup,
        onSuccess: (data)=>{
            dispatch(setAuthToken(data.data.token))
        },
        onError(error, variables, context) {
            console.log(error)
        },
    })

    const onSubmit = (values: any) => {
        mutation.mutate(values)        
    }

    if(mutation.isSuccess){
        return <Navigate to="/" />
    }

    return (
        <div className='container'>
            <div className='signup-card col col-md-8 col-lg-5 col-xxl-5 mx-auto p-3 rounded shadow-lg'>
                <p className='fs-1 text-black-50 text-center'>Sign Up</p>
                <Formik
                    initialValues={initailValues}
                    validationSchema={schema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <div className='d-flex justify-content-start align-items-center'>
                            <Field type="text" name="fullname" placeholder='fullname' className='form-control' />
                        </div>
                        <div className='mx-5 text-danger text-center'>
                            <ErrorMessage name="fullname" />
                        </div>
                        <div className='mt-3 d-flex justify-content-start align-items-center'>
                            <Field type="text" name="username" placeholder='username' className='form-control' />
                        </div>
                        <div className='mx-5 text-danger text-center'>
                            <ErrorMessage name="username" />
                        </div>
                        <div className='mt-3 d-flex justify-content-start align-items-center'>
                            <Field type="text" name="email" placeholder='E-mail' className='form-control' />
                        </div>
                        <div className='mx-5 text-danger text-center'>
                            <ErrorMessage name="email" />
                        </div>
                        <div className='mt-3 d-flex justify-content-start align-items-center'>
                            <Field type="password" name="password" placeholder='password' className='form-control' />
                        </div>
                        <div className='mx-5 text-danger text-center'>
                            <ErrorMessage name="password" />
                        </div>
                        <div className='mt-3 d-flex justify-content-start align-items-center'>
                            <Field type="password" name="confirm" placeholder='confirm password' className='form-control' />
                        </div>
                        <div className='mx-5 text-danger text-center'>
                            <ErrorMessage name="confirm" />
                        </div>
                        <div className="text-center mt-3">
                            <button type="submit" className='btn btn-primary text-white mt-3 px-4 align-self-center'>
                                Sign Up
                            </button>
                        </div>
                        <div className='text-center mt-4'>
                            <Link to="/login" className="text-info text-center fs-5 p-3">have an acount</Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default SignUp 
