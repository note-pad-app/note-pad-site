import { Link } from 'react-router-dom';
import './style.css';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import * as api from '../../api';
import Loading from '../Loading';

type paramType = {
    todo: string;
    check: boolean;
    deleted?: boolean;
    id: number;
    isCompleted: boolean;
    inValidate: () => void;
};

function TodoCard({ todo, check, deleted, id, isCompleted, inValidate}: paramType) {
    const [completed, setCompleted] = useState(isCompleted);

    const checkMutation = useMutation({
        mutationFn: api.todo.complete,
        onSuccess: (data) => {
            inValidate()
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        }
    });

    const softDeleteMutation = useMutation({
        mutationFn: api.todo.softDelete,
        onSuccess: (data) => {
            inValidate()
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        }
    });

    const deleteMutation = useMutation({
        mutationFn: api.todo.remove,
        onSuccess: (data) => {
            inValidate()
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        }
    });

    const recoverMutation = useMutation({
        mutationFn: api.todo.recovery,
        onSuccess: (data) => {
            inValidate()
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        }
    });

    const toggleCompleted = () => {
        checkMutation.mutate({ id, is_complete: !completed });
        setCompleted(!completed);
    }

    const softDelete = () => {
        softDeleteMutation.mutate(id)
    }

    const deleteTodo = () => {
        deleteMutation.mutate(id)
    }

    const recoverTodo = () => {
        recoverMutation.mutate(id)
    }

    return (
        <div className="todocard border-rounded-3 shadow-sm p-4 mt-3 bg-white d-flex justify-content-between">
            {check ? (
                <input
                    onChange={toggleCompleted}
                    checked={completed}
                    type="checkbox"
                    className="form-check-input m-3"
                />
            ) : null}
            <Link to={"/todos/"+id} style={{pointerEvents: deleted?'none': 'auto'}} className="text-decoration-none w-100 text-start d-flex align-items-center">
                <span className="text-black">{todo.length > 100 ? todo.slice(0, 100) + '...' : todo}</span>
            </Link>
            {
                deleted ? (
                    <div className="d-flex">
                        <button onClick={deleteTodo} className="action-button me-3 text-danger">
                            {
                                deleteMutation.isPending ? <Loading /> :
                                    <i className="fas fa-trash"></i>
                            }
                        </button>
                        <button onClick={recoverTodo} className="action-button text-info">
                            {
                                recoverMutation.isPending ? <Loading /> :
                                    <i className="fas fa-trash-restore"></i>
                            }
                        </button>
                    </div>
                ) :
                    <button onClick={softDelete} className="action-button me-3 text-danger">
                        {
                            softDeleteMutation.isPending ? <Loading /> :
                                <i className="fas fa-trash"></i>
                        }
                    </button>
            }
        </div>
    );
};



export default TodoCard;