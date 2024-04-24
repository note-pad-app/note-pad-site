import Modal from "react-bootstrap/Modal"
import './style.css'
import { useSelector } from 'react-redux'
import { ErrorMessage, Field, Form, Formik } from "formik"
import { initailValues, schema } from '../../validators/category'
import { RootState } from "../../state/store"
import { useMutation } from "@tanstack/react-query"
import * as api from '../../api'
import Loading from "../Loading"

type propsType = {
    show: boolean,
    handleClose: () => void,
    type: 'note' | 'todo'
}

function CategoryModal({ show, handleClose, type }: propsType) {
    const darkTheme = useSelector((state: RootState) => state.theme.value)
    const mutation = useMutation({
        mutationFn: api.category.store,
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const onSubmit = (values: object) => {
        mutation.mutate({ ...values, type });
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            className={`${darkTheme ? 'dark' : 'light'}`}
        >
            <Modal.Header className="modal-header border-0">
                <Modal.Title>New {type} catagory</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={initailValues}
                    validationSchema={schema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <div className="modal-body d-flex align-items-end">
                            <i className="fas fa-clipboard me-2 fs-4"></i>
                            <Field type="text" name="name" className="new-input" placeholder="Name" />
                        </div>
                        <div className='mx-5 text-danger text-center'>
                            <ErrorMessage name="name" />
                        </div>
                        <div className="d-flex justify-content-around mt-4">
                            <button type="button" className="new-btn" onClick={handleClose}>Cancel</button>
                            <button type="submit" className="new-btn">
                                {
                                    mutation.isPending ? <Loading /> : 'Add'
                                }
                            </button>
                        </div>
                    </Form>
                </Formik>
            </Modal.Body>
        </Modal>
    )
}

export default CategoryModal