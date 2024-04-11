import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedPages/Navbar/Navbar";
import Footer from "../Pages/SharedPages/Footer/Footer";
import { useState, CSSProperties, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";

const Root = () => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className={loading ? "LoadingPosition" : ""}>
      {loading ? (
        <RingLoader color="#36d7b7" size={100} speedMultiplier={1} />
      ) : (
        <div>
          <div className="font-popins w-full px-5 lg:px-0 lg:max-w-[95%] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default Root;
