import CountUp from "../Buy/CountUp";
import AboutCountUp from "./AboutCountUp";
import AboutFrame from "./AboutFrame";
import Banner from "./Banner";
import OurTeam from "./OurTeam";

const About = () => {
    return (
        <div>
           <Banner/>
           {/* count up  */}
           <AboutCountUp/>
           {/* about frame  */}
           <AboutFrame/>
           {/* our team  */}
           <OurTeam/>
        </div>
    );
};

export default About;