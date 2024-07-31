import { FaHome } from "react-icons/fa";
import Container from "../Container";
import CustomServices from "./CustomServices";

const Services = () => {
    return (
        <Container >
            <h1 className="text-3xl lg:text-[40px] text-center text-darkText font-bodyFont font-semibold lg:mt-32">Other Services</h1>
      {/* main div  */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-10">
      <CustomServices Icon={FaHome} title='Advanced Property Search' description='Effortlessly find your dream property with advanced search filters.'/>
      <CustomServices Icon={FaHome} title='Virtual Tours and Multimedia' description='Explore properties through immersive virtual tours and HD photos..'/>
      <CustomServices Icon={FaHome} title='Secure Online Transactions' description='Ensure secure transactions and e-sign documents seamlessly online.'/>
       </div>
        
        </Container>

    );
};

export default Services;