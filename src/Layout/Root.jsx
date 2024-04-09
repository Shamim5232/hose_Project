import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedPages/Navbar/Navbar";
import Footer from "../Pages/SharedPages/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="font-popins w-full px-5 lg:px-0 lg:max-w-[95%] mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
