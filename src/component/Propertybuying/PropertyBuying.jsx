
import Container from "../Container";
import CustomButton from "../CustomButton";
import SectionTitle from "../SectionTitle";
import services_house_1 from '../../assets/images/house/services_1.jpg'
import services_house_2 from '../../assets/images/house/services_house_2.jpg'
import { TiMediaPlayReverse } from "react-icons/ti";
import CustomProperty from "./CustomProperty";
const PropertyBuying = () => {
    return (
        <Container>
           <div className="space-y-12 lg:space-y-40">
            {/* custom 1st section  */}
           <CustomProperty image_1={services_house_1} image_2={services_house_2} Icon={TiMediaPlayReverse} title='Efficient and Transparent Home Buying Solutions' description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'/>
             {/* 2nd section */}
             <div className=" flex flex-col-reverse lg:flex-row  gap-7 space-x-44">
                {/* text section  */}
                <div className="max-w-[552px] space-y-10">
                    <SectionTitle title='Property buying'/>
                    <h1 className="text-3xl text-darkText font-bodyFont font-semibold">Efficient and Transparent Home Buying Solutions</h1>
                <p className="font-bodyFont">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              <CustomButton/>
                </div>
                {/* images  */}
                <div>
                   <div className="relative">
                   <img className=" lg:w-[458px] rounded-md" src={services_house_1} alt="house" />
                  <div className="relative">
                  <img className="absolute -bottom-14 lg:-right-28 w-[300px] rounded-md" src={services_house_2} alt="house" />
                 <div className="absolute   right-28 lg:-right-6 -top-12 lg:-top-40 "> <TiMediaPlayReverse className="  text-4xl text-white rounded-full bg-primaryColor " /></div>
                  </div>
                   </div>

                </div>
                

            </div>
            {/* 3rd custom section  */}
            <CustomProperty image_1={services_house_1} image_2={services_house_2} Icon={TiMediaPlayReverse} title='Efficient and Transparent Home Buying Solutions' description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'/>
           </div>
          
        </Container>
    );
};

export default PropertyBuying;