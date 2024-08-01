import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Container from "../../component/Container";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('testimonial.json')
      .then(res => res.json())
      .then(data => {
        setTestimonials(data);
      });
  }, []);

  return (
    <Container>
      <div className="text-center mt-16 space-y-4">
        <h1 className="text-4xl text-darkText font-bodyFont font-semibold">
          Testimonial
        </h1>
      </div>

      {/* Swiper Section */}
      <Swiper
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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials?.map(testimonial => (
          <SwiperSlide key={testimonial.id}>
            <div className="max-w-[528px] flex flex-col justify-center p-6 shadow-md rounded-xl sm:px-12 bg-bgColor dark:bg-gray-50 dark:text-gray-800 my-10 space-y-4">
              {/* Rating */}
              <div className="rating rating-md space-x-6 mx-auto">
                <input
                  type="radio"
                  name={`rating-${testimonial.id}`}
                  className="mask mask-star-2 bg-designColor"
                />
                <input
                  type="radio"
                  name={`rating-${testimonial.id}`}
                  className="mask mask-star-2 bg-designColor"
                />
                <input
                  type="radio"
                  name={`rating-${testimonial.id}`}
                  className="mask mask-star-2 bg-designColor"
                />
                <input
                  type="radio"
                  name={`rating-${testimonial.id}`}
                  className="mask mask-star-2 bg-designColor"
                />
                <input
                  type="radio"
                  name={`rating-${testimonial.id}`}
                  className="mask mask-star-2 bg-orange-300"
                />
              </div>
              {/* Text */}
              <p className="text-[#818181] text-center font-bodyFont">
                {testimonial.description}
              </p>
              {/* Person */}
              <div className="avatar">
                <div className="w-12 mx-auto rounded-full">
                  <img src={testimonial.img} alt={testimonial.name} />
                </div>
              </div>
              <div>
                <h1 className="text-[20px] text-center font-montserrat font-bold">
                  {testimonial.name}
                </h1>
                <p className="text-[16px] text-[#6B7280] text-center">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonial;
