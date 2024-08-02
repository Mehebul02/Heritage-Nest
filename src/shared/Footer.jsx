import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { logo } from "../assets/images";

const Footer = () => {
    return (
        <div>
            <footer className="grid grid-cols-2 lg:grid-cols-6 gap-x-4  bg-bgColor text-base-content p-16">
        <aside>
         <img src={logo} alt="" />
          <p className="font-bodyFont">
          Design amazing digital experiences that 
            
            create more happy in the world.
          </p>
        </aside>
        
        <nav className="flex flex-col gap-3">
          <p className="footer-title lowercase text-[14px] font-bodyFont font-semibold">Product</p>
          <a className="link link-hover text-[#475467] font-bodyFont">Overview</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Features</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Solutions</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Tutorials</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Pricing</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Releases</a>
          
        </nav>
        <nav className="flex flex-col gap-3">
          <p className="footer-title lowercase text-[14px] font-bodyFont font-semibold">Company</p>
          <a className="link link-hover text-[#475467] font-bodyFont">About Us</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Careers</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Press</a>
          <a className="link link-hover text-[#475467] font-bodyFont">News</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Media kit</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Contact</a>
          
        </nav>
        <nav className="flex flex-col gap-3">
          <p className="footer-title lowercase text-[14px] font-bodyFont font-semibold">Resources</p>
          <a className="link link-hover text-[#475467] font-bodyFont">Blog</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Newsletter</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Events</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Help Centre</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Tutorials</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Support</a>
          
        </nav>
        <nav className="flex flex-col gap-3">
          <p className="footer-title lowercase text-[14px] font-bodyFont font-semibold">Social</p>
          <a className="link link-hover text-[#475467] font-bodyFont">Twitter</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Linkedin</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Facebook</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Github</a>
          <a className="link link-hover text-[#475467] font-bodyFont">AngelList</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Dribble</a>
          
        </nav>
        <nav className="flex flex-col gap-3">
          <p className="footer-title lowercase text-[14px] font-bodyFont font-semibold">Legal</p>
          <a className="link link-hover text-[#475467] font-bodyFont">Terms</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Privacy</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Cookies</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Licenses</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Setting</a>
          <a className="link link-hover text-[#475467] font-bodyFont">Contact</a>
          
        </nav>
       
       
       
      </footer>
      <div className="border"></div>
      <footer className="footer bg-bgColor  items-center p-10">
  <aside className="grid-flow-col items-center">
    <p> © {new Date().getFullYear()}  Heritage- Nest . All rights reserved.</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
     <div><FaTwitter className="text-2xl text-primaryColor"/></div>
    </a>
    <a>
     <div><FaLinkedin className="text-2xl text-primaryColor"/></div>
    </a>
    <a>
     <div><FaFacebook className="text-2xl text-primaryColor"/></div>
    </a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;