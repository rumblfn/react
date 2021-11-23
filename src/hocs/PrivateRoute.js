import { Navigate } from "react-router-dom";

export const PrivateRoute = ({authed, children }) => {
    console.log(authed)
    return authed ? children : <Navigate to='/login'/>
}