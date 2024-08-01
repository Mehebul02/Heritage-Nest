import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import CustomOverview from "../../component/CustomOverview";
import { LiaBedSolid } from "react-icons/lia";
import { MdBackupTable, MdOutlineBalcony } from "react-icons/md";

const OverView = () => {
    return (
        <div className="lg:w-[800px] lg:h-[356px] bg-[#E5E7EB] my-10 rounded-md p-6">
            <h1 className="text-2xl text-darkText font-bodyFont font-semibold">Overview</h1>
            <div className="bg-[#E5E7EB] shadow-lg border-2 my-4 p-2 rounded-md">
           <div className="flex overflow-auto justify-between">
           <CustomOverview Icon={FaCartFlatbedSuitcase} title='2 Bath'/>
           <CustomOverview Icon={LiaBedSolid} title='2 Beds'/>
           <CustomOverview Icon={MdOutlineBalcony} title='2 Balcony'/>
           <CustomOverview Icon={MdBackupTable} title='Fully Furnished'/>
           </div>
           </div>
           {/* room info  */}
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-16" >
            {/* 1st  */}
            <div className="">
                <p className="text-[16px] text-[#5C5C5C] font-bodyFont">Carpet Area</p>
                <h1 className="text-xl text-darkText font-montserrat font-semibold">2000 sqft</h1>
                <p className="text-sm text-[#5C5C5C] font-montserrat">$ 225/sqft</p>
            </div>
            {/* 1st  */}
            <div className="">
                <p className="text-[16px] text-[#5C5C5C] font-bodyFont">Floor</p>
                <h1 className="lg:text-xl text-darkText font-montserrat font-semibold">Second (Out of 6th floor)</h1>
                
            </div>
            {/* 1st  */}
            <div className="">
                <p className="text-[16px] text-[#5C5C5C] font-bodyFont">Transaction Type</p>
                <h1 className="text-xl text-darkText font-montserrat font-semibold">Ready to move</h1>
            </div>
            {/* 1st  */}
            <div className="">
                <p className="text-[16px] text-[#5C5C5C] font-bodyFont">Lift</p>
                <h1 className="text-xl text-darkText font-montserrat font-semibold">1</h1>
               
            </div>
          
            </div>
            {/* room info  */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-16 my-6">
               {/* 1st   */}
                <div className="">
                <p className="text-[16px] text-[#5C5C5C] font-bodyFont">Facing</p>
                <h1 className="text-xl text-darkText font-montserrat font-semibold">North - East</h1>
                
            </div>
               {/* 1st   */}
                <div className="">
                <p className="text-[16px] text-[#5C5C5C] font-bodyFont">Additional Rooms</p>
                <h1 className="text-xl text-darkText font-montserrat font-semibold">1 servant room & 1 gust room</h1>
                
            </div>
               {/* 1st   */}
                <div className="">
                <p className="text-[16px] text-[#5C5C5C] font-bodyFont">Age of construction</p>
                <h1 className="text-xl text-darkText font-montserrat font-semibold">New Construction</h1>
                
            </div>

            </div>
        </div>
    );
};

export default OverView;