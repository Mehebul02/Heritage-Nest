
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


const SocialLogin = () => {

    return (
        <div>
        <div
         
          className="flex justify-center items-center gap-6  w-56 mx-auto p-3 rounded-md"
        >
        <button  >  <FcGoogle className="text-3xl bg-white  rounded-md " /></button>
         <button > <FaFacebook  className="text-3xl bg-white  rounded-md "/></button>
        </div>
      </div>
  
    );
};

export default SocialLogin;