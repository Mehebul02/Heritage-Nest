import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import register from '../../assets/images/register.png'
const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
  
  
    return (
        <div
        className=" flex flex-col md:flex lg:flex-row p-2 lg:space-x-10 mt-10  max-w-[1300px] mx-auto"
        
      >
       
        <div className="w-1/2     bg-no-repeat  lg:w-1/2  rounded-l-lg ">
          <img src={register} alt="register" />
        </div>
        <div className="  p-10 rounded-md ">
          <h1 className="text-3xl text-primaryColor font-poppins font-semibold ">
            Sign up to Heritage Nest.
          </h1>
          <p className="font-poppins my-2 ">Enter your details below</p>
  
          <div className="flex mt-10 gap-4"></div>
          {/* <div className="divider font-serif">Or sign In with e-mail</div> */}
  
          <form >
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-xl font-serif font-semibold">
                  Full Name
                </span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Email"
                required
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-xl font-serif font-semibold">
                  Email
                </span>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
                className="input input-bordered w-full "
              />
            </label>
  
            <label className="form-control w-full relative">
              <div className="label">
                <span className="label-text text-xl font-serif font-semibold">
                  Password
                </span>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Your Password"
                className="input input-bordered w-full "
                required
              />
              <span
                className="absolute right-6 top-14"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-xl"></FaEyeSlash>
                ) : (
                  <FaEye className="text-xl"></FaEye>
                )}
              </span>
             
            </label>
            <div className=' p-4 dark:bg-white w-full  m-auto rounded-lg flex gap-6 items-center'>
                <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                  <div className='flex flex-col  '>
                    <label>
                      <input
                        className='text-sm cursor-pointer w-36 '
                        type='file'
                        name='image'
                        
                        id='image'
                        accept='image/*'
                        hidden
                      />
                     
                    </label>
                  </div>
                </div>
               
              </div>
            <button className="bg-designColor   px-8 py-2 rounded-lg text-xl font-serif text-white font-semibold mt-4">
          
                
             
              Register
             
            </button>
          </form>
  
          <p className="font-poppins text-center text-xl  my-6">
            Already An Account ?{" "}
            <Link className="btn-link" to="/login">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    );
};

export default RegisterForm;