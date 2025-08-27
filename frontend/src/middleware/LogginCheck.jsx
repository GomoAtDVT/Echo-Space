import { Navigate, Outlet } from "react-router-dom"

export default function LoggingCheck() {
    const loginToken =  localStorage.getItem('userToken');
 if (!loginToken){
     return <Navigate to={'/login'} replace/>
    }else{
        return <Outlet />
    }
}