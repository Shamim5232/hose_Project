import Slider from "../SharedPages/Slider/Slider";
import { useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const PropertyData = useLoaderData();
  const [loadData, setLoadData] = useState(6);
  return (
    <div>
      <Slider></Slider>
      {/* real state property  */}
      <div className="my-5 py-4">
        <h2 className="text-xl lg:text-4xl text-center font-bold ">
          Real Estate <span className="text-orange-600">Property</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-12">
          {PropertyData.slice(0, loadData).map((property) => (
            <HomeCard property={property} key={property.id}></HomeCard>
          ))}
        </div>
        {loadData < PropertyData.length ? (
          <button
            onClick={() => setLoadData(PropertyData.length)}
            className="block rounded-none mx-auto my-8 btn bg-orange-600 text-white text-[18px] font-semibold"
          >
            Load More
          </button>
        ) : (
          ""
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
