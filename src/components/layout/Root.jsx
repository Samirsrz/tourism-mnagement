import { Outlet } from "react-router-dom";
import Navbar from "./Home/Navbar";
import {  useState } from "react";
import Footer from "./Home/Footer";

const Root = () => {
   
   const [theme, setTheme] = useState(false);




    return (
        <div className={`${theme ? "bg-black  h-full text-white" : ""} space-y-36 `}>
              <Navbar 
              theme={theme}
              setTheme= {setTheme}
              ></Navbar>

              <div >
              <Outlet></Outlet>
              </div>
            
            <Footer></Footer>

        </div>
    );
};

export default Root;