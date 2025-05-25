import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { HashLoader } from "react-spinners";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div className="flex justify-center bg-white items-center h-screen">
            <HashLoader color="#FCAB35" />
        </div>
    }
    if(user){
        return <Navigate to={'/orders'}></Navigate> && children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoutes;