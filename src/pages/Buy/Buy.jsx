import BuyBanner from "./BuyBanner";
import CountUp from "./CountUp";
import ListedProperty from "./ListedProperty";
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
            {/* listed property  */}
            <ListedProperty/>
            {/* Testimonial  */}
            <Testimonial/>
        </div>
    );
};

export default Buy;