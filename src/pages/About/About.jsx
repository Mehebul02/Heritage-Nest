import CountUp from "../Buy/CountUp";
import AboutCountUp from "./AboutCountUp";
import AboutFrame from "./AboutFrame";
import Banner from "./Banner";

const About = () => {
    return (
        <div>
           <Banner/>
           {/* count up  */}
           <AboutCountUp/>
           {/* about frame  */}
           <AboutFrame/>
        </div>
    );
};

export default About;