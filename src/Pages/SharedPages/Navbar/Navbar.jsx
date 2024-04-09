import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <NavLink className="mx-3 navlink text-lg uppercase font-bold" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="mx-3 navlink text-lg uppercase font-bold"
          to="/about"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className="mx-3 navlink text-lg uppercase font-bold"
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className="mx-3 navlink text-lg uppercase font-bold"
          to="/blog"
        >
          Property
        </NavLink>
      </li>
      <li>
        <NavLink
          className="mx-3 navlink text-lg uppercase font-bold"
          to="/update-profile"
        >
          Update Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <Link
          className="btn bg-orange-600 rounded-none text-lg px-8 text-white"
          to="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
