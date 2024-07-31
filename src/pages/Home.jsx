import Banner from "../component/Banner";
import Services from "../component/otherServices/Services";
import PropertyBuying from "../component/Propertybuying/PropertyBuying";

const Home = () => {
    return (
        <main>
           <Banner/>
           <PropertyBuying/>
           <Services/>
        </main>
    );
};

export default Home;