import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./../../../assets/logo.svg";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <nav className="bg-gray-50 h-20 flex items-center">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden pl-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52`}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Service</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              {user?.email ? (
                <>
                  <li>
                    <Link onClick={handleLogOut}>Logout</Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl px-0">
            <img className={`h-4/5 lg:h-full`} src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Service</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            {user?.email ? (
              <>
                <li>
                  <Link onClick={handleLogOut}>Logout</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <span className="cursor-pointer">
            <FaSearch></FaSearch>
          </span>
          <span className="ml-3 md:ml-5 ">
            <FaShoppingCart></FaShoppingCart>
          </span>
          <a
            href="/"
            className=" btn bg-white border border-red-600 text-black ml-3 md:ml-5 p-2 md:p-4 hover:bg-red-700 hover:text-white md:flex items-center"
          >
            Appointment
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
