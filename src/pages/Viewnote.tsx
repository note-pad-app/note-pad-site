import { useState } from 'react';
import CkEditor from '../components/ckeditor'
import { Field, Form, Formik } from 'formik';
import { initailValues, schema } from '../validators/updateNote'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Viewnote() {
  const [edit, setedit] = useState(false)
  const onSubmit = (values: any) => {
    console.log(values)
  }
  return (
    <main>
      <div className="container pt-4 view-note">
        {
          edit ?
            <Formik
              initialValues={initailValues}
              validationSchema={schema}
              onSubmit={onSubmit}
            >
              <Form className="container pt-4 view-note">
                <div className=" d-flex justify-content-between align-items-center">
                  <div className='d-flex justify-content-start align-items-center'>
                    <i className="fas fa-clipboard fs-4 m-2"></i>
                    <Field as="select" name="category" id="" className='form-select form-select-sm border-0'>
                      <option selected>No catagory</option>
                      <option value="work">work</option>
                      <option value="personal">personal</option>
                      <option value="life">life</option>
                      <option value="home">home</option>
                    </Field>
                  </div>
                  <p>{new Date().toDateString()}</p>
                </div>
                {/*ckeditor*/}
                <div className="mt-4">
                  <Field
                    name="note"
                    render={({ field, form }) => {
                      return <CkEditor data={field.value}
                        onchange={
                          (event: Event, editor: ClassicEditor) => {
                            form.setFieldValue(field.name, editor.getData())
                          }}
                      />
                    }}
                  ></Field>
                </div>
                <button type="submit" className='btn mt-3 btn-success rounded-3 px-4 py-2 shadow-sm'>Save</button>
              </Form>
            </Formik>
            : <div>
              <div>
                <div className="view-titlebar d-flex justify-content-between align-items-center">
                  <div className='d-flex justify-content-start align-items-center'>
                    <h2 className='fs-4 text-info'>Work</h2>
                  </div>
                  <p>{new Date().toDateString()}</p>
                </div>
                <div className="mt-4 note-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto similique blanditiis velit numquam suscipit minus magnam non adipisci nobis perferendis cupiditate explicabo quidem fuga, iure totam iste in nemo animi!
                </div>
                <button onClick={() => setedit(true)} className='btn mt-3 btn-primary rounded-3 px-4 py-2 shadow-sm'>Edit</button></div>
            </div>
        }
      </div>
    </main>
  )
}

export default Viewnote