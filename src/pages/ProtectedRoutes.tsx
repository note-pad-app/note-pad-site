import { useSelector } from "react-redux";
import { Outlet,Navigate } from "react-router-dom";
import { RootState } from "../state/store";

const ProtectedRoutes = ()=>{
    const isAuthentecated = useSelector((state: RootState)=> state.auth.isAuthenticated)
    return (
        isAuthentecated ? <Outlet /> : <Navigate to="/login" />
    )
}

export default ProtectedRoutes; 