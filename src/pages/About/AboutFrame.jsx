
import { aboutFrame1 } from "../../assets/images";
import Container from "../../component/Container";
import SectionTitle from "../../component/SectionTitle";

const AboutFrame = () => {
    return (
        <Container>
            <div className="relative my-24">
            <img className="w-[904px] h-[455px]  rounded-md" src={aboutFrame1} alt="aboutFrame" />
            <div className=" absolute z-50 bottom-0 right-0 lg:w-[552px] h-[270px] bg-[#ECF5FF] p-6 rounded-md">
                <SectionTitle title='Our Story'/>
                <h1 className="lg:text-[36px] text-darkText font-montserrat font-bold">Efficient and Transparent Home Buying Solutions</h1>
                <p className="text-[#6B7280] font-bodyFont mt-2">In the symphony of bustling markets and serene landscapes, Heritage-Nest was born—a vision to</p>

            </div>
            
        </div>
        </Container>
    );
};

export default AboutFrame;