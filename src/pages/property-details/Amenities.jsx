import { MdOutlineLocalLaundryService, MdOutlineSolarPower, MdSportsTennis } from "react-icons/md";
import Container from "../../component/Container";
import { GiHomeGarage, GiLift, GiNuclearWaste, GiRunningShoe, GiSecurityGate } from "react-icons/gi";
import { FaGlassWaterDroplet, FaGraduationCap, FaWarehouse, FaWifi } from "react-icons/fa6";
import CustomAmenities from "../../component/CustomAmenities";
import { LuAreaChart, LuFileClock, LuParkingCircle } from "react-icons/lu";
import { FaCarAlt } from "react-icons/fa";
import { RiUmbrellaLine } from "react-icons/ri";
import { GrBusinessService, GrVmMaintenance } from "react-icons/gr";
import { LiaIntercom } from "react-icons/lia";
import { PiPipeDuotone, PiTelevisionSimpleBold } from "react-icons/pi";
import Services from "../../component/otherServices/Services";

import NearbyProperties from "./NearbyProperties";


const Amenities = () => {
    return (
        <Container>
           <div className="max-w-[1280px] mx-auto bg-[#E5E7EB] p-6 rounded-md">
           <h1 className="text-[24px] font-montserrat font-semibold my-4">Amenities</h1>
            <div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                    <h1 className="text-[16px] font-bodyFont flex items-center gap-1"><MdOutlineSolarPower/> Power Back Up</h1>
                    <h1 className="text-[16px] font-bodyFont flex items-center gap-1"><GiLift/> Lift </h1>
                    <h1 className="text-[16px] font-bodyFont flex items-center gap-1"><FaWarehouse/>Club House</h1>
                    
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 my-6 ">
                <CustomAmenities Icon={LuParkingCircle} title='Park'/>
                <CustomAmenities Icon={FaCarAlt} title='Reserved Parking'/>
                <CustomAmenities Icon={GiSecurityGate} title='Security'/>
                <CustomAmenities Icon={FaGlassWaterDroplet} title='Water Storage'/>
                <CustomAmenities Icon={RiUmbrellaLine} title='Private Terrace/Garden'/>
                <CustomAmenities Icon={LuFileClock } title='Vaastu Compliant'/>
                <CustomAmenities Icon={GrBusinessService } title='Service/Goods Lift'/>
                <CustomAmenities Icon={GiHomeGarage } title='Visitor Parking'/>
                <CustomAmenities Icon={LiaIntercom } title='Intercom Facility'/>
                <CustomAmenities Icon={GrVmMaintenance } title='Maintenance Staff'/>
                <CustomAmenities Icon={GiNuclearWaste } title='Waste Disposal'/>
                <CustomAmenities Icon={MdOutlineLocalLaundryService } title='Laundry Service'/>
                <CustomAmenities Icon={FaWifi } title='Internet/Wi-Fi Connectivity'/>
                <CustomAmenities Icon={PiTelevisionSimpleBold } title='DTH Television Facility'/>
                <CustomAmenities Icon={PiPipeDuotone } title='Piped Gas'/>
                <CustomAmenities Icon={GiRunningShoe } title='Jogging and Strolling Track'/>
                <CustomAmenities Icon={MdSportsTennis } title='Outdoor Tennis Courts'/>
                <CustomAmenities Icon={FaGraduationCap } title='Early Learning Centre'/>
                <CustomAmenities Icon={LuAreaChart } title='Kids Play Area'/>
                <CustomAmenities Icon={MdSportsTennis } title='Indoor Squash & Badminton Courts'/>
                   
                </div>
            </div>
           </div>
           {/* services  */}
           <Services/>
         
          
           <NearbyProperties/>
        </Container>
    );
};

export default Amenities;