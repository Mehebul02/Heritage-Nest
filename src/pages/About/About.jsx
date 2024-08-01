import CountUp from "../Buy/CountUp"
import Testimonial from "../Buy/Testimonial";
import AboutCountUp from "./AboutCountUp";
import AboutFrame from "./AboutFrame";
import Banner from "./Banner";
import BookConsultation from "./BookConsultation ";
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
           {/* Book Consultation Now */}
           <BookConsultation/>
           {/* testimonials  */}
           <Testimonial/>
        </div>
    );
};

export default About;