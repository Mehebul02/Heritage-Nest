import React, { useEffect, useRef, useState } from "react";
import Container from "../../component/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { CiLocationOn } from "react-icons/ci";
import { TfiGallery } from "react-icons/tfi";
import { Link } from "react-router-dom";

const PopularProperties = () => {
  const swiperRef = useRef(null);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("property.json")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
      });
  }, []);



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

        {/* card section */}
        <Swiper
          ref={swiperRef}
          watchSlidesProgress={true}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
             autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {properties?.map((property) => (
           
            <SwiperSlide key={property.id}>
              <Link to='/propertyDetails' >
              <div className="card bg-base-100 w-full shadow-xl my-10 flex flex-col">
  <figure className="relative h-52 md:h-64 lg:h-80 overflow-hidden">
    <img
      src={property.img}
      alt="Shoes"
      className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
    />
    <div className="absolute bottom-4 left-6 flex items-center gap-3 bg-[#FDF0E7] px-3 py-1 rounded-md text-xl font-bodyFont font-semibold">
      <TfiGallery className="text-designColor" /> 20
    </div>
  </figure>
  <div className="card-body flex flex-col justify-between flex-grow">
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-[14px] text-primaryColor font-bodyFont bg-bgColor px-4 py-1 rounded-md">
          {property.type}
        </h2>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-designColor"></div>
          <h1 className="text-[16px] font-bodyFont">
            {property.read}
          </h1>
        </div>
      </div>
      <div className="border my-2"></div>
      <h1 className="text-[20px] text-darkText font-bodyFont font-semibold">
        {property.title}
      </h1>
      <span className="label-text font-bodyFont flex items-center gap-2 my-2">
        <CiLocationOn className="text-xl text-designColor" /> 
        {property.location}
      </span>
    </div>
    <h1 className="text-[24px] text-darkText font-bodyFont font-semibold mt-auto">
      $ {property.price}
    </h1>
  </div>
</div>

              </Link>
              
            </SwiperSlide>
           
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default PopularProperties;
