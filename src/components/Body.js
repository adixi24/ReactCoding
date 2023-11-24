import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body =()=>{
    //how will i configure what my outlet render
    return(
        <div className="flex">
            <SideBar />
            <Outlet />
           
        </div>
    );
};
export default Body;