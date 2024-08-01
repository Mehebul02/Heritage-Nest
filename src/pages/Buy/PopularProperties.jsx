import Container from "../../component/Container";
import { cardImage1 } from "../../assets/images";
import { TfiGallery } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import SlideCards from "./SlideCards";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const PopularProperties = () => {
  return (
    <Container>
      <div className="my-10">
        <div className="flex flex-col lg:flex-row lg:space-x-80">
          <h1 className="text-3xl text-darkText font-bodyFont font-semibold">
            Popular Properties
          </h1>
          <p className="text-primaryColor btn-link font-bodyFont">
            See all propeety
          </p>
        </div>

        {/* card section  */}

        <div className="">
            <SlideCards/>
        </div>
      </div>
    </Container>
  );
};

export default PopularProperties;
