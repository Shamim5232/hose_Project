import { Link, NavLink, useNavigate } from "react-router-dom";
import avater from "../../../assets/avater.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOUt = () => {
    logout()
      .then(() => {
        console.log("Logout Successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navlinks = (
    <>
      <li>
        <NavLink
          className="mx-2 navlink text-lg uppercase font-semibold"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="mx-2 navlink text-lg uppercase font-semibold"
          to="/about"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className="mx-2 navlink text-lg uppercase font-semibold"
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className="mx-2 navlink text-lg uppercase font-semibold"
          to="/blog"
        >
          Property
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className="mx-2 navlink text-lg uppercase font-semibold"
              to="/UpdateProfile"
            >
              Update Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className="mx-2 navlink text-lg uppercase font-semibold"
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 z-50">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu z-50 menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">BD HOUSE</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar mr-3"
        >
          <div className="w-10 rounded-full">
            <img
              title={user?.displayName}
              alt="Tailwind CSS Navbar component"
              src={user ? user.photoURL : avater}
            />
          </div>
        </div>
        {user ? (
          <button
            onClick={handleSignOUt}
            className="btn bg-orange-600 rounded-none text-lg px-8 text-white"
          >
            Logout
          </button>
        ) : (
          <Link
            className="btn bg-orange-600 rounded-none text-lg px-8 text-white"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
