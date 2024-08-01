import { FiSearch } from "react-icons/fi";
import { banner } from "../assets/images";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[590px]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-[750px]">
            <h1 className="mb-5 text-3xl lg:text-6xl text-lightText font-bold">
              Your Portal to India's Exquisite Real Real Estate
            </h1>
            <p className="mb-5">
              Seamlessly connecting you to the heartbeat of India's prime
              properties.
            </p>
            <div className="mx-auto inline-block">
              <Link to='/buy'>
              <button className="text-xl  bg-primaryColor px-4 py-2 rounded-md font-bodyFont flex items-center justify-center gap-4">
                
                <FiSearch /> Get Started
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
