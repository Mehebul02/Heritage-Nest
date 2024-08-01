import BuyBanner from "./BuyBanner";
import CountUp from "./CountUp";
import PopularProperties from "./PopularProperties";
import Testimonial from "./Testimonial";

const Buy = () => {
    return (
        <div>
            {/* buy banner  */}
            <BuyBanner/>
            {/* Countup  */}
            <CountUp/>
            {/* Popular Properties  */}
            <PopularProperties/>
            {/* Testimonial  */}
            <Testimonial/>
        </div>
    );
};

export default Buy;