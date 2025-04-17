import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Login from "../Login/Login";

const Root = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <Navbar></Navbar>
            {user ? <div className="lg:max-w-7xl max-w-lg mx-auto"> 
                <Outlet></Outlet>   
            </div> : <Login></Login>}
        </div>
    );
};

export default Root;