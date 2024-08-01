import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const CustomButton = () => {
    return (
        <div className="mx-auto inline-block">
              <Link to='/buy'>
              <button className="text-xl text-primaryColor  font-semibold bg-primaryColor/20 px-4 py-2 rounded-md font-bodyFont flex items-center justify-center gap-4">
                <FiSearch /> Find Property
              </button>
              </Link>
            </div>
    );
};

export default CustomButton;