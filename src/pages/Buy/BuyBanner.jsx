import { NavLink } from "react-router-dom";
import banner from "../../assets/images/buybanner.jpg";
import CustomBuyNav from "./CustomBuyNav";
const BuyBanner = () => {
  return (
    <div>
      <div className="relative">
        <img className="w-full h-[309px]" src={banner} alt="" />
        <div className="absolute  w-[984px] h-[300px] mx-auto right-72 -bottom-32 bg-lightText px-10 py-4 rounded-lg">
          <nav className="flex gap-9">
            <CustomBuyNav path={'/buy'} title='Buy'/>
            <CustomBuyNav path={'/rent'} title='Rent'/>
            <CustomBuyNav path={'/pg'} title='PG'/>
            <CustomBuyNav path={'/plot'} title='Plot'/>
            <CustomBuyNav path={'/commercial'} title='Commercial'/>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BuyBanner;
