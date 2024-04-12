// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { FaFacebook, FaSkype, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Agent = () => {
  const [agent, setAgent] = useState([]);
  useEffect(() => {
    fetch("agent.JSON")
      .then((res) => res.json())
      .then((data) => setAgent(data));
  }, []);
  console.log(agent);

  return (
    <div className="mb-12">
      <div className="my-8 pb-12 text-center">
        <h2 className="lg:text-3xl uppercase font-semibold">Our Agent</h2>
      </div>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
        }}
        slidesPerView={4}
        spaceBetween={70}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {agent.map((agentInfo) => {
          const { img, name, property } = agentInfo;
          return (
            <SwiperSlide>
              <div className=" relative">
                <img src={img} className="h-full w-full" alt="" />
                <div className="bg-black p-5 absolute w-full bottom-0">
                  <h2 className="text-xl text-center font-bold text-white">
                    {name}
                  </h2>
                  <p className="text-gray-300 text-center my-3 mb-4">
                    Property: {property}
                  </p>
                </div>
                <div className="absolute p-2 bg-orange-600 w-4/5 mx-auto text-center bottom-0 left-8">
                  <div className="flex justify-around items-center">
                    <FaFacebook className="text-white"></FaFacebook>
                    <FaTwitter className="text-white"></FaTwitter>
                    <FaLinkedin className="text-white"></FaLinkedin>
                    <FaSkype className="text-white"></FaSkype>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Agent;
