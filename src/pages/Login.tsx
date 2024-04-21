import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link } from 'react-router-dom'
import {initailValues, schema} from '../validators/login'
import { useDispatch } from 'react-redux'
import { useMutation } from '@tanstack/react-query'
import * as api from '../api'
import { setAuthToken } from '../state/slices/auth'
import  {Navigate}  from 'react-router-dom'

function Login() {
    const dispatch = useDispatch()
    const mutation = useMutation({
        mutationFn: api.auth.login,
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
            <div className='login-card col col-md-8 col-lg-5 col-xxl-5 bg-white mt-5 p-3 rounded shadow-lg mx-auto'>
                <p className='fs-1 text-black-50 text-center'>Login</p>
                <Formik
                    initialValues={initailValues}
                    validationSchema={schema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <div className='mt-2 d-flex justify-content-start align-items-center'>
                            <Field type="text" name="uids" placeholder='username/email' className='form-control' />
                        </div>
                        <div className='mx-5 mt-2 text-danger text-center'>
                            <ErrorMessage name="uids" />
                        </div>
                        <div className='mt-3 d-flex justify-content-start align-items-center'>
                            <Field type="password" name="password" placeholder='password' className='form-control' />
                        </div>
                        <div className='mx-5 mt-2 text-danger text-center'>
                            <ErrorMessage name="password" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className='btn btn-primary text-white mt-2 px-4'>LOGIN</button>
                        </div>
                        <div className='text-center mt-4'>
                            <Link to="/forgot-password" className="text-info text-center fs-6 p-3">forget your password?</Link>
                        </div>
                        <div className='text-center mt-4'>
                            <Link to="/signup" className="text-info text-center fs-5 p-3">don't have acount</Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Login