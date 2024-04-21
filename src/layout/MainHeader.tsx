import { useState } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import DropDown from 'react-bootstrap/Dropdown'
import { useLocation } from 'react-router-dom'
import logo from '/logo.png'
import { clearAuthToken } from '../state/slices/auth'
import { useDispatch, useSelector } from 'react-redux'
import * as api from '../api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { logout } from '../api/auth'

const MainHeader = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    const logoutquery = useMutation({
        mutationFn: api.auth.logout,
        onSuccess: () => {
            dispatch(clearAuthToken())
        }
    })

    const logoutfn = () => {
        logoutquery.mutate()
    }

    if(logoutquery.isSuccess){
        return <Navigate to="/login" />
    }

    return (
        <>
            <header>
                <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    <div className="container-fluid">
                        {
                            location.pathname.includes('notes') && <button
                                id="navbar-toggler"
                                onClick={() => setOpen(!open)}
                            >
                                {open ? <i className="fas fa-close"></i> : <i className="fas fa-bars"></i>}
                            </button> || location.pathname.includes('todos') && <button
                                id="navbar-toggler"
                                onClick={() => setOpen(!open)}
                            >
                                {open ? <i className="fas fa-close"></i> : <i className="fas fa-bars"></i>}
                            </button> || ''
                        }
                        <div className='d-flex align-items-center m-0'>
                            <Link className="navbar-brand p-0 m-0 me-2" to="/">
                                <img src={logo} alt="logo" className='logo' />
                            </Link>
                            <Link className="navbar-brand p-0 nav-item m-0 me-2" style={{ color: 'red !important' }} to="/notes">
                                Notes
                            </Link>
                            <Link className="navbar-brand p-0 nav-item m-0" to="/todos">
                                Todos
                            </Link>
                        </div>
                        <ul className="navbar-nav ms-auto d-flex flex-row">
                            <div className='d-flex align-items-center mx-2'>
                                <Link to="" className='bell'>
                                    <i className='fas fa-bell'></i>
                                    {/* <span className="badge rounded-pill bg-danger">1</span> */}
                                </Link>
                            </div>
                            <DropDown>
                                <DropDown.Toggle
                                    variant="default"
                                    id="profile_dropdown"
                                    className='border-0'
                                >
                                    <img src="logo.png" alt="profile" width='35' height='35' />
                                </DropDown.Toggle>
                                <DropDown.Menu>
                                    <DropDown.Item>
                                        <Link className="text-decoration-none text-black d-block" to="profile">My profile</Link>
                                    </DropDown.Item>
                                    <DropDown.Item>
                                        <Link className="text-decoration-none text-black d-block" to="settings">Settings</Link>
                                    </DropDown.Item>
                                    <button className="logout-btn text-primary ps-3 pt-1 border-0 bg-transparent p-0" onClick={logoutfn}>Logout</button>
                                </DropDown.Menu>
                            </DropDown>
                        </ul>
                    </div>
                </nav>
            </header>
            <Outlet context={{ open, setOpen }} />
        </>
    )
}

export default MainHeader