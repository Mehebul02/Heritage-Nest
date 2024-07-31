import { MdOutlineFileDownload } from "react-icons/md";
import Container from "../../component/Container";
import CustomCountUp from "../../component/CustomCountUp";

const CountUp = () => {
    return (
        <Container className="mt-52">
          <div className="flex ">
            <CustomCountUp number='2' title='New Flat Listed' Icon={MdOutlineFileDownload}/>
          {/* <div className="w-[280px] bg-[#FDF0E7] p-4 rounded-xl space-y-3">
            <h1 className="text-4xl text-designColor font-bodyFont font-semibold">2k+</h1>
            <p className="font-bodyFont">New Flat Listed</p>
            <div className="flex justify-between items-center">
                <button className="btn-link text-designColor">View All</button>
                <MdOutlineFileDownload className="text-xl text-designColor"/>
            </div>
            </div> */}
            </div>  
        </Container>
    );
};

export default CountUp;