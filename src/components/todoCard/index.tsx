import { Link } from 'react-router-dom'
import './style.css'

type paramType = {
    todo: string,
    check: boolean
    deleted?: boolean
}

function TodoCard({ todo, check, deleted }: paramType) {
    return (
        <div className='todocard border-rounded-3 shadow-sm p-4 mt-3 bg-white d-flex justify-content-between'>
            <div className='d-flex justify-content-start align-items-center'>
                {check ? <input type="checkbox" className='form-check-input m-3 p-3' /> : null}
                <Link to="/todos/todo/23" className='text-decoration-none d-flex align-items-center w-100'>
                    <span className='text-black'>{todo.length > 100 ? todo.slice(0, 100) + "..." : todo}</span>
                </Link>
            </div>
            {
                deleted ? <div>
                    <button className='action-button me-3 text-danger'><i className='fas fa-trash' ></i></button>
                    <button className='action-button text-info'><i className='fas fa-trash-restore' ></i></button>
                </div> : ''
            }
        </div>
    )
}

export default TodoCard