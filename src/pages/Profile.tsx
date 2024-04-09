import { Field, Form, Formik } from "formik"
import { useState } from "react"
import { schema } from '../validators/profile'

function Profile() {
  const [edit, setEdit] = useState(false)
  const onSubmit = (values: Object) => {
    console.log(values)
    setEdit(false)
  }

  return (
    <div className="container profile" style={{ marginTop: '60px' }}>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <img
          src="logo.png"
          className="rounded-circle text-center mt-4"
          height="200"
          width="200"
          alt="Avatar"
        />
        {
          edit ?
            <Formik
              initialValues={{}}
              validationSchema={schema}
              onSubmit={onSubmit}
            >
              <Form className='profile-edit d-flex flex-column justify-content-between gap-3 inputs mt-3'>

                <div className="custom-file">
                  <Field type="file" name="photo" id="file-input" className="custom-file-input" />
                  <label htmlFor="file-input" className="custom-file-label">Upload Avatar</label>
                </div>
                <Field type="text" name="fullname" className='form-control' placeholder="fullname" />
                <Field type="text" name="username" className='form-control' placeholder="username" />
                <button type="submit" className="btn btn-success">Save changes</button>
              </Form>
            </Formik>
            : <div className="text-center"><h1 className="text-black-50 fs-2 mt-2">M.Edriss Aria</h1>
              <p className="text-black-50 fs-2 mt-2">Username</p>
              <button className="btn btn-primary" onClick={() => setEdit(true)}>Edit Profile</button>
            </div>
        }
      </div>
      <div className="detail mt-3 shadow-sm p-4 px-0 bg-white w-100 rounded d-flex justify-content-around align-items-center">
        <p className="fs-4 m-0"><span className="text-info me-2">199</span>Notes</p>
        <p className="fs-4 m-0"><span className="text-info me-2">199</span>Todos</p>
      </div>
    </div>
  )
}

export default Profile