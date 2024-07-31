import { NavLink } from "react-router-dom";

const CustomBuyNav = ({title,path}) => {
    return (
        <div>
              <NavLink to={path} className={({ isActive }) =>  isActive ? "text-[16px] text-primaryColor font-bodyFont font-medium border-b-2 border-primaryColor " : "" }>
            {title}
            </NavLink>
        </div>
    );
};

export default CustomBuyNav;