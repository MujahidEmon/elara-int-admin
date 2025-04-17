import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <h2 className="text-center text-2xl">Landing Page</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;