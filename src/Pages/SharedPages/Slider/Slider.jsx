import slider1 from "../../../assets/slider1.jpg";
import slider2 from "../../../assets/slider2.jpg";
import slider3 from "../../../assets/slider3.jpg";
import slider4 from "../../../assets/slider4.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Slider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-96">
            <img src={slider1} className="h-full w-full" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96">
            <img src={slider2} className="h-full w-full" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96">
            <img src={slider3} className="h-full w-full" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96">
            <img src={slider4} className="h-full w-full" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
