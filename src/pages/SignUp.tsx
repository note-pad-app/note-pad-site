import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { useMutation } from 'react-query'
import * as api from '../api'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function SignUp() {
    const navigate = useNavigate()
    const [verfiyMessage, setVerifyMessage] = useState(false)

    const initailValues = { username: '', email: '', password: '', confirm: '' };
    const loginSchema = yup.object({
        username: yup.string().required().min(3),
        email: yup.string().required().min(3).email(),
        password: yup.string().required().min(4),
        confirm: yup.string().label('confirm password').required().oneOf([yup.ref('password'), null], 'password must match!')
    })

    const register = useMutation(api.register)

    const onSubmit = (values: any) => {
        register.mutate(values, { onSuccess: () => setVerifyMessage(true) });
    }
    return (
        <div className='container'>
            <div className='signup-card col col-md-8 col-lg-5 col-xxl-5 mt-5 mx-auto p-3 rounded shadow-lg'>
                <p className='fs-1 text-black-50 text-center'>Sign Up</p>
                <Formik
                    initialValues={initailValues}
                    validationSchema={loginSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <div className='mt-2 d-flex justify-content-start align-items-center'>
                            <i className='fas fa-user fs-4 m-3'></i>
                            <Field type="text" name="username" placeholder='username' className='form-control' />
                        </div>
                        <div className='mx-5 text-danger text-center'>
                            <ErrorMessage name="username" />
                        </div>
                        <div className='mt-2 d-flex justify-content-start align-items-center'>
                            <i className='fas fa-envelope fs-4 m-3'></i>
                            <Field type="text" name="email" placeholder='E-mail' className='form-control' />
                        </div>
                        <div className='mx-5 text-danger text-center'>
                            <ErrorMessage name="email" />
                        </div>
                        <div className='mt-2 d-flex justify-content-start align-items-center'>
                            <i className='fas fa-lock fs-4 m-3'></i>
                            <Field type="password" name="password" placeholder='password' className='form-control' />
                        </div>
                        <div className='mx-5 text-danger text-center'>
                            <ErrorMessage name="password" />
                        </div>
                        <div className='mt-2 d-flex justify-content-start align-items-center'>
                            <i className='fas fa-unlock fs-4 m-3'></i>
                            <Field type="password" name="confirm" placeholder='confirm password' className='form-control' />
                        </div>
                        <div className='mx-5 text-danger text-center'>
                            <ErrorMessage name="confirm" />
                        </div>
                        <div className="text-center mt-2">
                            <button type="submit" className='btn btn-info text-white mt-2 px-4 align-self-center'>
                                {register.isLoading ? 'Sign Up...' : 'Sign Up'}
                            </button>
                        </div>
                        <Link to="/login" className="text-info text-decoration-none d-block text-center fs-4 p-3">have an acount</Link>
                        {verfiyMessage ?
                            <h5 className='text-center alert alert-success'>Check your email we sent verification link</h5>
                            : null}
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default SignUp 
