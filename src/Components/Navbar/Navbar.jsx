import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const {user, logout} = useContext(AuthContext)

    // functions for toogle theme 
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const LocalTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", LocalTheme);
  }, [theme]);

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };


//   logout funtions

const handleLogout = () => {
    logout()
    .then()
    .catch(error => console.error(error)
    )
}



  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            
          <li>
            <NavLink to={'/'} className={({isActive}) => 
             isActive ? 'text-[#FCAB35] font-bold' : 'font-bold'
            }  >Manage Orders</NavLink>
          </li>
          <li>
            <NavLink to={'/addProduct'} className={({isActive}) => isActive ? 'text-[#FCAB35] font-bold' : 'font-bold'} >Add Products</NavLink>
          </li>
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost text-xl"><span className="text-[#FCAB35]">Elara</span> Int Admin</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        
          <li>
            <NavLink to={'/'} className={({isActive}) => 
             isActive ? 'text-[#FCAB35] font-bold' : 'font-bold'
            }  >Manage Orders</NavLink>
          </li>
          <li>
            <NavLink to={'/addProduct'} className={({isActive}) => isActive ? 'text-[#FCAB35] font-bold' : 'font-bold'} >Add Products</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? <button onClick={handleLogout} className="btn">Logout</button> : <Link to={'/login'} className="btn">Login</Link>}

        {/* Toggle Theme */}
        {/* <label className="grid ml-4 cursor-pointer place-items-center">
          <input
            onChange={handleTheme}
            type="checkbox"
            className="toggle theme-controller  col-span-2 col-start-1 row-start-1"
          />
          <svg
            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label> */}
      </div>
    </div>
  );
};

export default Navbar;
