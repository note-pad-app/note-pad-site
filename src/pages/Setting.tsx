import TitleBar from "../components/titlebar"
import { useDispatch, useSelector } from "react-redux"
import { changeTheme } from "../state/slices/DarkMode"
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { initailValues, schema } from '../validators/changepassword'
import { AppDispatch } from "../state/store";

function Setting() {
  const darkTheme = useSelector((state: any) => state.theme.value)
  const dispatch = useDispatch<AppDispatch>();

  const [show, setshow] = useState(false)
  const onSubmit = (values: Object) => {
    console.log(values)
  }
  return (
    <div className="container" style={{ marginTop: '60px' }}>
      <div className="d-flex justify-content-center">
        <TitleBar title="Settings" />
      </div>
      <div className="settings mt-3 shadow-sm p-4 bg-white w-100 rounded d-flex justify-content-between align-items-center">
        <label htmlFor="dark-mode" className="text-black-50 fs-2">
          Dark Mode
        </label>
        <div className='form-check form-switch'>
          <input type="checkbox" id="dark-mode" onChange={()=> dispatch(changeTheme())} checked={darkTheme} className='form-check-input m-3 fs-4' />
        </div>
      </div>
      <div className="settings mt-3 shadow-sm p-4 bg-white w-100 rounded">
        <div className="d-flex justify-content-between align-items-center">
          <label htmlFor="dark-mode" className="text-black-50 fs-2">
            Change password
          </label>
          <div className='form-check form-switch'>
            <input type="checkbox" id="dark-mode" onChange={() => setshow(!show)} className='form-check-input m-3 fs-4' />
          </div>
        </div>
        {
          show ?
            <Formik
              initialValues={initailValues}
              validationSchema={schema}
              onSubmit={onSubmit}
            >
              <Form className='d-flex inputs gap-2 mt-3'>
                <div className="w-100">
                  <div className='mt-2 d-flex justify-content-start align-items-center'>
                    <Field type="password" name="password" id="dark-mode" className='form-control' placeholder="new password" />
                  </div>
                  <div className='mx-5 m-0 text-danger text-center'>
                    <ErrorMessage name="password" />
                  </div>
                </div>
                <div className="w-100">
                  <div className='mt-2 d-flex justify-content-start align-items-center'>
                    <Field type="password" name="confirm" id="dark-mode" className='form-control' placeholder="retype password" />
                  </div>
                  <div className='mx-5 m-0 text-danger text-center'>
                    <ErrorMessage name="confirm" />
                  </div>
                </div>
                <div>
                <button type="submit" className="mt-2 btn btn-success">Change</button>
                </div>
              </Form>
            </Formik>
            : ''
        }
      </div>
    </div>
  )
}

export default Setting