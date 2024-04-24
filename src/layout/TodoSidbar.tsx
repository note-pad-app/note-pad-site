import { useEffect, useState } from 'react'
import { NavLink, Link, Outlet, useOutletContext } from 'react-router-dom'
import CategoryModal from '../components/CategoryModal'
import { useQuery } from '@tanstack/react-query';
import * as api from '../api';
import { Category } from '../Types/categoryTypes'

function Sidebar() {
    const { open } = useOutletContext<any>();
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show)
    const handleClose = () =>{
        setShow(!show)
        refetch()
    } 

    const { data, isSuccess, isError, refetch } = useQuery({
        queryKey: ['category', 'todo'],
        queryFn: ({ queryKey }) => api.category.getAll(queryKey[1]),
    })

    return (
        <>
            <CategoryModal show={show} handleClose={handleClose} type="todo" />
            <nav id="sidebarMenu" className={`collapse d-lg-block ${open ? 'd-block' : ''} sidebar bg-white overflow-auto`}>
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mb-4 mt-2 list">
                        <NavLink
                            to="/todos"
                            end
                            className="list-group-item list-group-item-action py-2 ripple"
                            aria-current="true"
                        >
                            <i className="fas fa-clipboard-list fa-fw me-3"></i>
                            <span>All To-dos</span><span className="float-end">0</span>
                        </NavLink>
                        <NavLink to="deletedTodos" className="list-group-item list-group-item-action py-2 ripple last-item"
                        ><i className="fas fa-trash-can fa-fw me-3"></i><span>Recently deleted</span><span className="float-end">0</span></NavLink
                        >
                        <div className="seperator bg-primary"></div>
                        <div className="catagory-header d-flex justify-content-between align-items-center my-2">
                            <h6 className="text-uppercase m-0">catagories</h6>
                            <NavLink to="editTodoCats" className="edit text-uppercase text-decoration-none">edit</NavLink>
                        </div>
                        {
                            isSuccess ? data.data.data.map((category: Category) => {
                                return (
                                    <NavLink key={category.id} to={"/todos/" + category.name} className="list-group-item list-group-item-action py-2 ripple">
                                        <i className="fas fa-clipboard fa-fw me-3"></i><span>{category.name}</span>
                                    </NavLink>
                                )
                            }) : (isError ? <p className="text-danger">something went wrong!!</p> : '...')
                        }
                        <NavLink to="/todos/nocatagory" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-clipboard-check fa-fw me-3"></i><span>No catagory</span><span className="float-end">0</span>
                        </NavLink>
                        <button onClick={handleShow} className="border-0 bg-white text-primary py-2 ripple text-decoration-none text-start"
                        ><span className="ms-5">New</span></button>
                        <div className="seperator bg-primary"></div>
                        <NavLink to="/settings" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-gear fa-fw me-3"></i><span>Settings</span></NavLink
                        >
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Sidebar