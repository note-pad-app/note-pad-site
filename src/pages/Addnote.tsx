import { ErrorMessage, Field, Form, Formik } from 'formik';
import CkEditor from '../components/ckeditor'
import { initailValues, schema } from '../validators/note'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Addnote() {
  const onSubmit = (values: any) => {
    console.log(values)
  }
  return (
    <main>
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
            <div className='mx-5 text-danger text-center'>
              <ErrorMessage name="note" />
            </div>
          </div>
          <button type="submit" className='btn mt-3 btn-success rounded-3 px-4 py-2 shadow-sm'>Save</button>
        </Form>
      </Formik>
    </main>
  )
}

export default Addnote