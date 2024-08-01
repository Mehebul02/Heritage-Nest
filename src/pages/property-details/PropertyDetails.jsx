import { CiLocationOn } from "react-icons/ci";
import Container from "../../component/Container";
import {
  detailsImg1,
  detailsImg2,
  detailsImg3,
  detailsImg4,
  map,
  viewMore,
} from "../../assets/images";
import Map from "./Map";
import OverView from "./OverView";
import Amenities from "./Amenities";

const PropertyDetails = () => {
  return (
    <Container>
      <div className="my-10 flex flex-col lg:flex-row gap-14">
        <div>
          <h1 className="text-2xl text-darkText font-montserrat font-semibold">
            3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad
          </h1>
          <span className="label-text font-bodyFont flex items-center gap-2 my-2">
            <CiLocationOn className="text-xl text-designColor" />
            Meadowshire Park, Greenfield, USA
          </span>
        </div>
        <h1 className="text-2xl text-darkText font-montserrat  font-bold">
          $3000k
        </h1>
      </div>
      {/* Main div  */}
      <div className="flex flex-col lg:flex-row justify-between ">
        {/* image section  */}
        <div>
          <img className="w-[800px] rounded-md" src={detailsImg1} alt="house" />
          <div className="flex gap-4 mt-6 overflow-auto">
            <img
              className="w-[260px] rounded-md"
              src={detailsImg2}
              alt="image"
            />
            <img
              className="w-[260px] rounded-md"
              src={detailsImg3}
              alt="image"
            />
            <div className="relative">
              <img
                className="w-[260px] rounded-md"
                src={detailsImg4}
                alt="image"
              />
              <img className="absolute top-16 left-14" src={viewMore} alt="" />
            </div>
          </div>
          {/* overview  */}
          <div>
            <OverView />
          </div>
        </div>
        {/* text section  */}
        <div>
          <div className="lg:w-[384px] bg-[#ECF5FF] h-[492px] p-4 rounded-md space-y-2">
            <p className="text-[#6B7280] font-montserrat">property value</p>
            <h1 className="text-[24px] text-darkText font-bodyFont font-bold">
              $ 300k - $ 310k
            </h1>
            <p className="text-[#6B7280] font-montserrat">
              Your bid can not be than 10% of the <br /> property Minimum value.
            </p>
            {/* Min  */}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-bodyFont">Min</span>
              </div>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            {/* Max */}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-bodyFont">Mex</span>
              </div>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <br />
            <div className="flex justify-between items-center overflow-auto">
              <div className="">
                <div className="w-6 h-6 bg-designColor rounded-full"></div>
                <h1 className="text-[14px] font-bodyFont">$ 280k</h1>
              </div>
              <div className="">
                <div className="w-6 h-6 bg-designColor rounded-full"></div>
                <h1 className="text-[14px] font-bodyFont">$ 305k</h1>
              </div>
            </div>
            {/* button  */}
            <div className="text-center flex justify-center">
              <button className="bg-primaryColor px-4 py-2 text-white font-bodyFont font-bold rounded-md">
                Find Property
              </button>
            </div>
          </div>
          {/* map component  */}
          <Map />
        </div>
      </div>

      {/* Amenities */}
      <Amenities/>
    </Container>
  );
};

export default PropertyDetails;
