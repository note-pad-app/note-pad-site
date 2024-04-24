import { ErrorMessage, Formik, Field, Form } from "formik"
import { initailValues, schema } from '../validators/todo'
import { useMutation, useQuery } from "@tanstack/react-query"
import * as api from '../api';
import { Category } from "../Types/categoryTypes";
import Loading from "../components/Loading";

function Addtodo() {

  const { data, isSuccess } = useQuery({
    queryKey: ['categorySelect', 'todo'],
    queryFn: ({ queryKey }) => api.category.getAll(queryKey[1]),
  })

  const mutation = useMutation({
    mutationFn: api.todo.store,
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const onSubmit = (values: Object) => {
    mutation.mutate(values)
  }

  return (
    <main>
      <Formik
        initialValues={initailValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="container pt-4">
            <div className="view-titlebar d-flex justify-content-between align-items-center">
              <div className='d-flex justify-content-start align-items-center'>
                <i className="fas fa-clipboard-check fs-4 m-2"></i>
                <Field as="select" name="categoryId" id="" className='form-select form-select-sm border-0'>
                  <option selected>No catagory</option>
                  {
                    isSuccess && data.data.data.map((category: Category) => {
                      return (
                        <option value={category.id}>{category.name}</option>
                      )
                    })
                  }
                </Field>
              </div>
            </div>
            <div className='view-todo border-rounded-3 shadow-sm p-2 pb-5 mt-3 bg-white'>
              <div className='d-flex justify-content-start align-items-center border-bottom mt-2'>
                <div className='text-decoration-none d-flex align-items-center w-100'>
                  <Field type="text" name="todo" placeholder="new todo" className='w-100 border-0 px-2 py-2' style={{ outline: 'none' }} />
                </div>
              </div>
              <div className='mt-1 text-danger text-center'>
                <ErrorMessage name="todo" />
              </div>
              <div className='d-flex justify-content-start align-items-center border-bottom mt-2'>
                <i className='fas fa-bell m-3 fs-4'></i>
                <div className='text-decoration-none d-flex align-items-center w-100'>
                  <Field type="datetime-local" name="reminder" className='w-100 border-0 px-2 py-2 form-control' />
                </div>
              </div>
              <div className='d-flex justify-content-start align-items-center border-bottom mt-2'>
                <i className='fas fa-exclamation m-3 fs-4'></i>
                <div className='text-decoration-none d-flex align-items-center w-100'>
                  <span>Mark as important</span>
                </div>
                <div className='form-check form-switch'>
                  <Field type="checkbox" name="is_important" className='form-check-input m-3 fs-4' />
                </div>
              </div>
              <div className='d-flex justify-content-start align-items-center border-bottom mt-2'>
                <i className='fa-solid fa-chart-bar m-3 fs-4'></i>
                <div className='text-decoration-none d-flex align-items-center w-100'>
                  <Field type="text" name="remarks" placeholder='Remarks' className='w-100 border-0 px-2 py-2' style={{ outline: 'none' }} />
                </div>
              </div>
              <button type="submit" className='btn mt-3 btn-primary rounded-3 px-4 py-2 shadow-sm'>
                {mutation.isPending?<Loading />:'Add'}
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </main>
  )
}

export default Addtodo