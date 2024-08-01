import React, { useRef } from "react";
import Container from "../../component/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CiLocationOn } from "react-icons/ci";
import { TfiGallery } from "react-icons/tfi";
import { cardImage1 } from "../../assets/images";

const PopularProperties = () => {
  const swiperRef = useRef(null);

  return (
    <Container>
      <div className="my-10">
        <div className="flex flex-col lg:flex-row lg:space-x-80">
          <h1 className="text-3xl text-darkText font-bodyFont font-semibold">
            Popular Properties
          </h1>
          <p className="text-primaryColor btn-link font-bodyFont">
            See all properties
          </p>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => swiperRef.current.swiper.slidePrev()}>Prev</button>
          <button onClick={() => swiperRef.current.swiper.slideNext()}>Next</button>
        </div>

        {/* card section */}
        <Swiper
          ref={swiperRef}
          watchSlidesProgress={true}
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card bg-base-100 w-96 shadow-xl my-10">
              <figure className="relative">
                <img src={cardImage1} alt="Shoes" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3 bg-[#FDF0E7] px-3 py-1 rounded-md text-xl font-bodyFont font-semibold">
                  <TfiGallery className="text-designColor" /> 20{" "}
                </div>
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <h2 className="text-[14px] text-primaryColor font-bodyFont bg-bgColor px-4 py-1 rounded-md">
                    Apartment
                  </h2>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-designColor"></div>
                    <h1 className="text-[16px] font-bodyFont"> Ready to Move</h1>
                  </div>
                </div>
                <div className="border"></div>
                <h1 className="text-[20px] text-darkText font-bodyFont font-semibold">
                  SunnySlope Suites
                </h1>
                <span className="label-text font-bodyFont flex items-center gap-2 my-2">
                  <CiLocationOn className="text-xl text-designColor" />{" "}
                  Meadowshire Park, Greenfield, USA
                </span>
                <h1 className="text-[24px] text-darkText font-bodyFont font-semibold">
                  $ 250000
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 w-96 shadow-xl my-10">
              <figure className="relative">
                <img src={cardImage1} alt="Shoes" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3 bg-[#FDF0E7] px-3 py-1 rounded-md text-xl font-bodyFont font-semibold">
                  <TfiGallery className="text-designColor" /> 20{" "}
                </div>
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <h2 className="text-[14px] text-primaryColor font-bodyFont bg-bgColor px-4 py-1 rounded-md">
                    Apartment
                  </h2>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-designColor"></div>
                    <h1 className="text-[16px] font-bodyFont"> Ready to Move</h1>
                  </div>
                </div>
                <div className="border"></div>
                <h1 className="text-[20px] text-darkText font-bodyFont font-semibold">
                  SunnySlope Suites
                </h1>
                <span className="label-text font-bodyFont flex items-center gap-2 my-2">
                  <CiLocationOn className="text-xl text-designColor" />{" "}
                  Meadowshire Park, Greenfield, USA
                </span>
                <h1 className="text-[24px] text-darkText font-bodyFont font-semibold">
                  $ 250000
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 w-96 shadow-xl my-10">
              <figure className="relative">
                <img src={cardImage1} alt="Shoes" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3 bg-[#FDF0E7] px-3 py-1 rounded-md text-xl font-bodyFont font-semibold">
                  <TfiGallery className="text-designColor" /> 20{" "}
                </div>
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <h2 className="text-[14px] text-primaryColor font-bodyFont bg-bgColor px-4 py-1 rounded-md">
                    Apartment
                  </h2>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-designColor"></div>
                    <h1 className="text-[16px] font-bodyFont"> Ready to Move</h1>
                  </div>
                </div>
                <div className="border"></div>
                <h1 className="text-[20px] text-darkText font-bodyFont font-semibold">
                  SunnySlope Suites
                </h1>
                <span className="label-text font-bodyFont flex items-center gap-2 my-2">
                  <CiLocationOn className="text-xl text-designColor" />{" "}
                  Meadowshire Park, Greenfield, USA
                </span>
                <h1 className="text-[24px] text-darkText font-bodyFont font-semibold">
                  $ 250000
                </h1>
              </div>
            </div>
          </SwiperSlide>

          {/* Repeat for more SwiperSlides */}
        </Swiper>
      </div>
    </Container>
  );
};

export default PopularProperties;
