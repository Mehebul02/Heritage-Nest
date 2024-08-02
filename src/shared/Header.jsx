
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import SocialLInks from "../component/SocialLInks";
const navigation = [
  { title: "Buy", link: "buy",},
  { title: "Sell", link: "#", },
  { title: "Services", link: "#",  },
  { title: "About", link: "about",  }
];
const Header = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  const handleClick = (e) => {
    if (e.target.contains(ref.current)) {
      setShow(false);
    }
  };
  return (
    <div className="">
  
   <div className="h-20 bg-[#ECF5FF]  px-4 lg:px-0 ">
   <div className="max-w-[1340px]  mx-auto flex items-center h-full justify-between">
       {/* navbar  */}
   <div className="hidden md:inline-flex items-center gap-7">
          <div className="flex text-[14px] gap-7">
            {navigation?.map((item) => (
              <Link
                key={item?.title}
                to={item?.link}
                smooth={true}
                duration={500}
                offset={-80}
                className="relative group font-medium  cursor-pointer duration-300 ">
                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1 }}>
                  
                  <span className="text-[18px] text-darkText  tracking-wide">{item?.title}</span>
                </motion.p>
                <span className="bg-primaryColor h-[2px]  absolute group-hover:w-full translate-all group-hover:duration-300  "></span>
              </Link>
            ))}
          </div>
        
        </div>
          {/* logo */}
          <div>
     <Link to='/'> <img src={logo} alt="logo" className="w-14 opacity-75 hover:opacity-100 duration-200 cursor-pointer"/></Link> 
       </div>
      {/* login */}
     <Link to='/login'>
        <button className="text-[14px] text-primaryColor bg-primaryColor/20 w-[96px] h-[40px] rounded-[14px] font-bodyFont ">Sing in</button>
    </Link>
               
        <div
          onClick={() => setShow(true)}
          className="md:hidden w-6 h-5 flex flex-col justify-between items-center cursor-pointer group overflow-hidden"
        >
          <span className="w-full h-[2px] bg-designColor inline-flex transform group-hover:translate-x-2 transition-all duration-300" />
          <span className="w-full h-[2px] bg-designColor inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all duration-300" />
          <span className="w-full h-[2px] bg-designColor inline-flex transform translate-x-1 group-hover:translate-x-2 transition-all duration-300" />
        </div>
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute md:hidden top-0 right-0 w-full h-screen bg-black/50 flex flex-col items-end z-50"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll bg-textBg flex flex-col items-center py-10 relative scrollBarHide"
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-designColor hover:text-red-500 absolute top-4 right-4 duration-200"
              />
              <div className="flex flex-col  items-center gap-7 mt-10 bg-primaryColor rounded-md">
                <ul className="flex flex-col  text-base gap-5">
                  {navigation?.map((item) => (
                    <Link
                      key={item?.title}
                      to={item?.link}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="font-medium text-white hover:text-designColor cursor-pointer duration-300"
                    >
                      <motion.li
                        onClick={() => setShow(false)}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.1, delay: item?.delay }}
                      >
                        <span className="text-designColor">
                          {item?.value} {item?.value && "."}{" "}
                        </span>
                        <span className="tracking-wide uppercase">
                          {item?.title}
                        </span>
                      </motion.li>
                    </Link>
                  ))}
                </ul>
               
                <SocialLInks className="flex-row items-center gap-5" />
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, ease: "easeIn" }}
                  className="text-sm w-72 tracking-widest text-designColor text-center mt-4"
                  href="#"
                >
                  
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
 
   </div>
     </div>
    
  );
};

export default Header;