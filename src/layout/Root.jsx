
import { Outlet } from "react-router-dom";
import Header from "../shared/Header";

const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Root;