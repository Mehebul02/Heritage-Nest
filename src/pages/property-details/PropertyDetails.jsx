import { CiLocationOn } from "react-icons/ci";
import Container from "../../component/Container";
import { detailsImg1 } from "../../assets/images";

const PropertyDetails = () => {
  return (
    <Container>
      <div className="my-10 flex gap-14">
        <div>
          <h1 className="text-2xl text-darkText font-montserrat font-semibold">
            3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad
          </h1>
          <span className="label-text font-bodyFont flex items-center gap-2 my-2">
            <CiLocationOn className="text-xl text-designColor" />
            Meadowshire Park, Greenfield, USA
          </span>
        </div>
        <h1 className="text-2xl text-darkText font-montserrat  font-bold">
          $3000k
        </h1>
        </div>
        {/* Main div  */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* image section  */}
          <div>
            <img className="w-1/2" src={detailsImg1} alt="" />
          </div>
          {/* text section  */}
          <div></div>
        </div>
    
    </Container>
  );
};

export default PropertyDetails;
