import { CiLocationOn } from "react-icons/ci";
import { TfiGallery } from "react-icons/tfi";
import { SwiperSlide } from "swiper/react";

const PropertyCard = ({property}) => {
    const {img} = property
    return (
        <SwiperSlide>
             <div className="card bg-base-100 w-96 shadow-xl my-10">
              <figure className="relative">
                <img src={img} alt="Shoes" />
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
    );
};

export default PropertyCard;