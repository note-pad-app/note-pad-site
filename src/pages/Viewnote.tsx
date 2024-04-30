import { useState } from 'react';
import CkEditor from '../components/ckeditor'
import { Field, Form, Formik } from 'formik';
import { schema } from '../validators/updateNote'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useParams } from 'react-router';
import { useMutation, useQuery } from '@tanstack/react-query';
import * as api from '../api';
import { Category } from '../Types/categoryTypes';
import Loading from '../components/Loading';

type initType = {
  note: string,
  category_id: number
}

function Viewnote() {
  const { id } = useParams()
  const [edit, setedit] = useState(false)

  const updateMutation = useMutation({
    mutationFn: api.note.update,
    onSuccess: (data)=>{
      console.log(data)
    },
    onError: (data)=>{
      console.log(data)
    }
  })

  const { data, isSuccess } = useQuery({
    queryKey: ['note', id],
    queryFn: () => api.note.show(id as string)
  })

  const categories = useQuery({
    queryKey: ['categorySelect', 'note'],
    queryFn: ({ queryKey }) => api.category.getAll(queryKey[1]),
  })

  const onSubmit = (values: object) => {
    updateMutation.mutate({id, ...values})
  }

  const initailValues: initType = {
    note: data?.data.note,
    category_id: data?.data.categoryId
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
                    <Field as="select" name="category_id" id="" className='form-select form-select-sm border-0'>
                      <option selected>No catagory</option>
                      {
                        isSuccess && categories.data?.data.data.map((category: Category) => {
                          return (
                            <option key={category.id} value={category.id ?? ''}>{category.name}</option>
                          )
                        })
                      }
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
                <button type="submit" className='btn mt-3 btn-success rounded-3 px-4 py-2 shadow-sm'>
                  {
                    updateMutation.isPending ? <Loading /> : 'Save'
                  }
                </button>
              </Form>
            </Formik>
            : <div>
              <div>
                <div className="view-titlebar d-flex justify-content-between align-items-center">
                  <div className='d-flex justify-content-start align-items-center'>
                    <h2 className='fs-4 text-info'>{data?.data.category ? data?.data.category.name : ''}</h2>
                  </div>
                  <p>{new Date(data?.data.createdAt).toDateString()}</p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: data?.data.note }} className='parsedHtml note-content' />
                <button onClick={() => setedit(true)} className='btn mt-3 btn-primary rounded-3 px-4 py-2 shadow-sm'>Edit</button></div>
            </div>
        }
      </div>
    </main>
  )
}

export default Viewnote