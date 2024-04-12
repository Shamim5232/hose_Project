import { FaArrowAltCircleRight } from "react-icons/fa";
import { useParams, useLoaderData } from "react-router-dom";
const Details = () => {
  const { viewid } = useParams();
  const data = useLoaderData();
  const singleData = data.find((ViewData) => ViewData.id === viewid);
  const {
    id,
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
    facilities,
    Owner,
  } = singleData;

  return (
    <div className="my-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl lg:text-3xl font-bold my-5">{estate_title}</h2>
        <h2 className="text-xl lg:text-3xl font-bold my-5">Price: $ {price}</h2>
      </div>
      <p className="mb-2 text-lg uppercase">Status: {Status}</p>
      <div className="h-full lg:h-[500px]">
        <img src={img} alt="" className="h-full w-full" />
      </div>
      <div className="grid grid-col-1 lg:grid-cols-5 lg:gap-6 my-12">
        <div className="col-span-3">
          <h2 className="text-2xl font-bold mb-5">Description:</h2>
          <p className="mb-8">{description}</p>
          <h2 className="text-2xl font-bold mb-5">Property Details:</h2>
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="p-4">
              <div className="flex justify-between my-3 items-center">
                <h2 className="text-lg font-semibold">Size:</h2>
                <span className="text-lg font-semibold">{Area}</span>
              </div>
              <div className="divider"></div>
              <div className="flex justify-between my-3 items-center">
                <h2 className="text-lg font-semibold">Bedrooms:</h2>
                <span className="text-lg font-semibold">{rooms}</span>
              </div>
              <div className="divider"></div>
              <div className="flex justify-between my-3 items-center">
                <h2 className="text-lg font-semibold">Bathrooms:</h2>
                <span className="text-lg font-semibold">{Bath}</span>
              </div>
              <div className="divider"></div>
              <div className="flex justify-between my-3 items-center">
                <h2 className="text-lg font-semibold">Segment Name:</h2>
                <span className="text-lg font-semibold">{segment_name}</span>
              </div>
              <div className="divider"></div>
            </div>
            <div className="p-4">
              <div className="">
                <h2 className="text-lg font-semibold">Facilities:</h2>
                <p className="mt-3">
                  {facilities.map((fas, idx) => (
                    <li className="flex gap-3" key={idx}>
                      <FaArrowAltCircleRight />
                      {fas}
                    </li>
                  ))}
                </p>
              </div>
              <div className="divider"></div>
              <div className="flex justify-between my-3 items-center">
                <h2 className="text-lg font-semibold">Location:</h2>
                <span className="text-lg font-semibold">{location}</span>
              </div>
              <div className="divider"></div>
            </div>
          </div>
        </div>
        <div className="col-span-2 p-5">
          <div className="card border p-5 rounded-md bg-gray-200">
            <div className="flex items-center">
              <img className="h-40 w-40 border-2" src={Owner.Own_img} alt="" />
              <div className="ml-3">
                <h2 className="text-lg font-bold mb-3">{Owner.name}</h2>
                <p className="text-lg">{Owner.address}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-8">
              <h2 className="text-lg font-semibold">Office Phone:</h2>
              <span className="text-lg font-semibold">
                {Owner.office_number}
              </span>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Phone Number:</h2>
              <span className="text-lg font-semibold">{Owner.phone}</span>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Email:</h2>
              <span className="text-lg font-semibold">{Owner.email}</span>
            </div>
            <div className="divider"></div>
            <button className="w-full rounded-none  text-lg border-none btn bg-orange-500 text-white">
              View My Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
