import Modal from "react-bootstrap/Modal"
import './style.css'
import { useSelector } from 'react-redux'
import { useDarkMode } from '../../hooks/useDarkMode'
import { ErrorMessage, Field, Form, Formik } from "formik"
import { initailValues, schema } from '../../validators/category'

type propsType = {
    show: boolean,
    handleClose: () => void,
}

function NewCatModal({ show, handleClose }: propsType) {
    useSelector((state: any) => state.theme.value)
    const getCookie = useDarkMode('dark')

    const onSubmit = (values: any) => {
        console.log(values)
    }
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            className={`${getCookie ? 'dark' : 'light'}`}
        >
            <Modal.Header className="modal-header border-0">
                <Modal.Title>New note catagory</Modal.Title>
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
                            <Field type="text" name="category" className="new-input" placeholder="Name" />
                        </div>
                        <div className='mx-5 text-danger text-center'>
                            <ErrorMessage name="category" />
                        </div>
                        <div className="d-flex justify-content-around mt-4">
                            <button className="new-btn" onClick={handleClose}>cancel</button>
                            <button type="submit" className="new-btn">add</button>
                        </div>
                    </Form>
                </Formik>
            </Modal.Body>
        </Modal>
    )
}

export default NewCatModal