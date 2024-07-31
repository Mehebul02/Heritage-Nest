import { NavLink } from "react-router-dom";
import banner from "../../assets/images/buybanner.jpeg";
import CustomBuyNav from "./CustomBuyNav";
import { FaSearch } from "react-icons/fa";
import { CiDollar, CiLocationOn } from "react-icons/ci";
import { RiHome3Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
const BuyBanner = () => {
  return (
    <div>
      <div className="relative">
        <img className="w-full h-[309px]" src={banner} alt="" />
        <div className="absolute  lg:w-[984px] lg:h-[300px] mx-auto right-72 -bottom-32 bg-lightText px-10 py-4 rounded-lg">
          {/* nav item  */}
          <nav className="flex gap-9">
            <CustomBuyNav path={"/buy"} title="Buy" />
            <CustomBuyNav path={"/rent"} title="Rent" />
            <CustomBuyNav path={"/pg"} title="PG" />
            <CustomBuyNav path={"/plot"} title="Plot" />
            <CustomBuyNav path={"/commercial"} title="Commercial" />
          </nav>
          <div className="divider"></div>
          {/* search  */}
          <label className="form-control w-full ">
            <div className="relative w-full ">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full px-4 pl-10"
              />
              <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            </div>
          </label>
          {/* details */}
          <div className=" flex justify-center items-center gap-10 my-6">
            {/* location  */}
            <div className=" w-full">
              <span className="label-text font-bodyFont flex items-center gap-2 my-2">
                <CiLocationOn className="text-xl text-designColor" /> Location
              </span>

              <select className="select select-bordered w-full  bg-bgColor">
                <option disabled selected></option>
                <option>Meadowshire Park, Greenfield, USA</option>
                <option>Meadowshire Park, Greenfield, USA</option>
                <option>Meadowshire Park, Greenfield, USA</option>
                <option>Meadowshire Park, Greenfield, USA</option>
                
              </select>
            </div>
            {/* property type  */}
            <div className=" w-full">
              <span className="label-text font-bodyFont flex items-center gap-2 my-2">
                <RiHome3Line className="text-xl text-designColor" /> Property
                Type
              </span>

              <select className="select select-bordered w-full  bg-bgColor">
                <option disabled selected></option>
                <option>Single-Family Home</option>
                <option>Condominium</option>
                <option>Townhouse</option>
                <option>Apartment</option>
                <option>Commercial Building</option>
                <option>Vacant Land</option>
                <option>Duplex</option>
                <option>Retail Space</option>
               
              </select>
            </div>
            {/* Budget  */}
            <div className=" w-full">
              <span className="label-text font-bodyFont flex items-center gap-2 my-2">
                <CiDollar className="text-xl text-designColor" /> Budget
              </span>

              <input
                type="text"
               
                className="input input-bordered w-full px-4 pl-10 bg-bgColor"
              />
              
            </div>
          </div>
          {/* button  */}
          <button className=" w-full text-xl text-white  font-semibold bg-primaryColor px-4 py-2 rounded-md font-bodyFont flex items-center justify-center gap-4">
                <FiSearch /> Find Property
              </button>
        </div>
      </div>
    </div>
  );
};

export default BuyBanner;
