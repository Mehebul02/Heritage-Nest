
import Container from "../Container";
import CustomButton from "../CustomButton";
import SectionTitle from "../SectionTitle";
import services_house_1 from '../../assets/images/house/services-1.avif'
import services_house_2 from '../../assets/images/house/services-2.png'
import { TiMediaPlayReverse } from "react-icons/ti";
import CustomProperty from "./CustomProperty";
import image1 from '../../assets/images/house/image1.avif'
import image2 from '../../assets/images/house/image2.avif'
import image3 from '../../assets/images/house/image3.jpg'
import { detailsImg3 } from "../../assets/images";
const PropertyBuying = () => {
    return (
        <Container>
           <div className="space-y-12 lg:space-y-40">
            {/* custom 1st section  */}
           <CustomProperty image_1={services_house_1} image_2={services_house_2} Icon={TiMediaPlayReverse} title='Efficient and Transparent Home Buying Solutions' description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'/>
             {/* 2nd section */}
             <div className=" flex flex-col lg:flex-row-reverse justify-evenly  gap-7  ">
                 {/* images  */}
                 <div>
                   <div className="relative">
                   
                   <img className="w-[300px] lg:w-[400px]  rounded-md" src={image1} alt="house" />
                   
                  <div className="relative">
                  <img className="absolute -bottom-14 lg:-right-14 lg:-top-80 lg:w-[300px] rounded-md" src={detailsImg3} alt="house" />
                 <div className="absolute right-28 lg:right-56 -top-12 lg:-top-72 "> <TiMediaPlayReverse className="  text-4xl text-white rounded-full bg-primaryColor " /></div>
                  </div>
                   </div>

                </div>
                {/* text section  */}
                <div className="max-w-[552px] space-y-10">
                    <SectionTitle title='Property buying'/>
                    <h1 className="text-3xl text-darkText font-bodyFont font-semibold">Efficient and Transparent Home Buying Solutions</h1>
                <p className="font-bodyFont">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              <CustomButton/>
                </div>
               
                

            </div>
            {/* 3rd custom section  */}
            <CustomProperty image_1={image2} image_2={image3} Icon={TiMediaPlayReverse} title='Efficient and Transparent Home Buying Solutions' description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'/>
           </div>
          
        </Container>
    );
};

export default PropertyBuying;