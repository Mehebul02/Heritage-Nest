import { MdOutlineFileDownload } from "react-icons/md";
import Container from "../../component/Container";
import CustomCountUp from "../../component/CustomCountUp";
import CustomCountSecont from "../../component/CustomCountSecont";

const CountUp = () => {
    return (
        <Container className="my-48">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {/* 1st count up  */}
            <CustomCountUp number='2' title='New Flat Listed' Icon={MdOutlineFileDownload}/>
           {/* 2nd count up  */}
        <CustomCountSecont number='2' title='New Flat Listed' Icon={MdOutlineFileDownload}/>
            {/* 3rd count up  */}
            <CustomCountUp number='2' title='New Flat Listed' Icon={MdOutlineFileDownload}/>
             {/* 4th count up  */}
             <CustomCountSecont number='2' title='New Flat Listed' Icon={MdOutlineFileDownload}/>
            </div>  
        </Container>
    );
};

export default CountUp;