import { FaHome } from "react-icons/fa";
import Container from "../Container";

const Services = () => {
    return (
        <Container >
            <h1 className="text-3xl lg:text-[40px] text-center text-darkText font-bodyFont font-semibold ">Other Services</h1>
      {/* main div  */}
       <div className="grid grid-cols-3">
       <div className="flex  gap-5 bg-bgColor p-6">
            {/* icon  */}
            <div className="">
               <span className=""> <FaHome className=" text-2xl text-white bg-designColor "/></span>

            </div>
            {/* text  */}
            <div className="max-w-[384px] space-y-4">
            <h1 className="text-[24px] font-bodyFont font-semibold">Advanced Property Search</h1>
            <p className="font-bodyFont text-gray-600">Effortlessly find your dream property with advanced search filters.</p>
            </div>
        </div>
       </div>
        
        </Container>

    );
};

export default Services;