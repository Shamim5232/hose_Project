import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { SiBlueprint } from "react-icons/si";
const HomeCard = ({ property }) => {
  console.log(property);
  const {
    location,
    estate_title,
    description,
    img,
    Status,
    price,
    rooms,
    Area,
    segment_name,
    Bath,
  } = property;
  return (
    <div className="card card-compact bg-base-100 shadow-xl relative">
      <figure className="h-72">
        <img src={img} className="w-full h-full" alt={estate_title} />
      </figure>
      <div className="absolute blur-0 top-5 left-0 rounded-r-md px-5 py-1 bg-gray-300">
        <p className="text-lg font-semibold">{Status}</p>
      </div>
      <div className="card-body">
        <h3 className="text-lg">{segment_name}</h3>
        <p className="flex items-center text-lg">
          <IoLocationOutline className="mr-3" /> {location}
        </p>
        <h2 className="card-title">{estate_title}</h2>
        <p className="text-lg">{description}</p>
        <div className="divider"></div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">${price}</h2>
          <div className="flex items-center gap-5">
            <p className="flex items-center tex-2xl gap-2">
              <SiBlueprint className="text-xl" /> {Area}
            </p>
            <p className="flex items-center tex-2xl gap-2">
              <IoBedOutline className="text-xl" /> {rooms}
            </p>
            <p className="flex items-center tex-2xl gap-2">
              <FaBath className="text-xl" /> {Bath}
            </p>
          </div>
        </div>
        <div className="card-actions justify-end mt-5">
          <button className="btn bg-orange-600 text-white">
            View Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
