import { member1, member2, member3 } from "../../assets/images";
import Container from "../../component/Container";
import SectionTitle from "../../component/SectionTitle";

const OurTeam = () => {
    return (
        <Container >
            <div >
            <SectionTitle title='Our Team'/>
            <h1 className="text-[40px] text-black font-bodyFont font-bold">Discover the Faces Behind Our Success</h1>
            <div className="flex flex-col lg:flex-row lg:w-[384px] gap-5 my-6 ">
                <img className="rounded-md" src={member1} alt="member1" />
                <img className="rounded-md" src={member2} alt="member2" />
                <img  className="rounded-md" src={member3} alt="member3" />
            </div>
        </div>
        </Container>
    );
};

export default OurTeam;