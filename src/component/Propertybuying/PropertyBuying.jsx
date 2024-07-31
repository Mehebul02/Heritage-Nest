
import Container from "../Container";
import CustomButton from "../CustomButton";
import SectionTitle from "../SectionTitle";
import services_house_1 from '../../assets/images/house/services_1.jpg'
import services_house_2 from '../../assets/images/house/services_house_2.jpg'
import { TiMediaPlayReverse } from "react-icons/ti";
const PropertyBuying = () => {
    return (
        <Container>
            {/* Main div  */}
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-center  my-10">
                {/* images  */}
                <div>
                   <div className="relative">
                   <img className=" w-[458px] rounded-md" src={services_house_1} alt="house" />
                  <div className="relative">
                  <img className="absolute -bottom-14 lg:-right-28 w-[300px] rounded-md" src={services_house_2} alt="house" />
                 <div className="absolute left-32 -top-12 lg:-right-6 lg:-top-40 "> <TiMediaPlayReverse className="  text-4xl text-white rounded-full bg-primaryColor " /></div>
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
        </Container>
    );
};

export default PropertyBuying;