import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={slide1} alt="" className="w-full" />
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <h3 className="text-3xl uppercase text-center -mt-16 text-white relative z-10">
              Salad
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide2} alt="" className="w-full" />
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <h3 className="text-3xl uppercase text-center -mt-16 text-white relative z-10">
              Pizza
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide3} alt="" className="w-full" />
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <h3 className="text-3xl uppercase text-center -mt-16 text-white relative z-10">
              Soup
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide4} alt="" className="w-full" />
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <h3 className="text-3xl uppercase text-center -mt-16 text-white relative z-10">
              Dessert
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide5} alt="" className="w-full" />
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <h3 className="text-3xl uppercase text-center -mt-16 text-white relative z-10">
              Salad
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
