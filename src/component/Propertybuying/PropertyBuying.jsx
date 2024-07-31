import { house_1 } from "../../assets/images";
import Container from "../Container";
import CustomButton from "../CustomButton";
import SectionTitle from "../SectionTitle";

const PropertyBuying = () => {
    return (
        <Container>
            {/* Main div  */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 my-10">
                {/* images  */}
                <div>
                   <div className="relative">
                   <img className=" w-[458px] rounded-md" src={house_1} alt="" />
                   <img className="absolute -bottom-14 lg:-right-28 w-[300px] rounded-md" src={house_1} alt="" />
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