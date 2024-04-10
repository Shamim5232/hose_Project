import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Details from "../Pages/Details/Details";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/property.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/view-details/:viewid",
        element: <Details></Details>,
        loader: () => fetch("/property.json"),
      },
      {
        path: "/UpdateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
    ],
  },
]);
