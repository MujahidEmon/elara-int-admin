import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:max-w-7xl max-w-lg mx-auto"> 
                <Outlet></Outlet>   
            </div>
        </div>
    );
};

export default Root;