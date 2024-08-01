import React, { useEffect, useRef, useState } from "react";
import Container from "../../component/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { CiLocationOn } from "react-icons/ci";
import { TfiGallery } from "react-icons/tfi";
import { cardImage1 } from "../../assets/images";
import PropertyCard from "./PropertyCard";

const PopularProperties = () => {
  const swiperRef = useRef(null);

  const [propertise, setPropertis] = useState([]);
  useEffect(() => {
    fetch("property.json")
      .then((res) => res.json())
      .then((data) => {
        setPropertis(data);
      });
  }, []);
  console.log(propertise);
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
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          //   autoplay={{
          //     delay: 2500,
          //     disableOnInteraction: false,
          //   }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {propertise?.map((property) => (
            <SwiperSlide key={property.id}>


<div className="card bg-base-100 w-96  shadow-xl my-10 flex flex-col">
  <figure className="relative h-1/2">
    <img src={property.img} alt="Shoes" className="w-full h-52 object-cover" />
    <div className="absolute bottom-4 left-6 flex items-center gap-3 bg-[#FDF0E7] px-3 py-1 rounded-md text-xl font-bodyFont font-semibold">
      <TfiGallery className="text-designColor" /> 20{" "}
    </div>
  </figure>
  <div className="card-body flex flex-col justify-between h-1/2">
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
        <CiLocationOn className="text-xl text-designColor" />{" "}
        {property.location}
      </span>
    </div>
    <h1 className="text-[24px] text-darkText font-bodyFont font-semibold mt-auto">
      $ {property.price}
    </h1>
  </div>
</div>

        
            </SwiperSlide>
          ))}

          
        </Swiper>
      </div>
    </Container>
  );
};

export default PopularProperties;
