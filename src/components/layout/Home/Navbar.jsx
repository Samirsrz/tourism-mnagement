import { useContext, } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import Swal from "sweetalert2";

const Navbar = ({theme, setTheme}) => {
 
   console.log(theme);
    const {user,logout } = useContext(AuthContext)
   
    const handleSignOut = () => {
        logout()
        .then()
        .catch()

        Swal.fire({
          position: "top",
          icon: "success",
          title: "User Logged Out Successfully",
          showConfirmButton: false,
          timer: 1500
        });
   }
   
   
   const navLinks = <>
    <li><NavLink  className='font-bold text-2xl mt-10'  to='/'>Home</NavLink></li>
    <li><NavLink className='font-bold text-2xl mt-10'  to='/allTouristSpot'>AllTouristsSpot</NavLink></li>
    <li><NavLink  className='font-bold text-2xl mt-10' to='/addTouristSpot'>ADDTouristsSpot</NavLink></li>
    <li><NavLink  className='font-bold text-2xl mt-10' to='/myList'>MyList</NavLink></li>

   </>
 
 
    return (
        <div className="navbar bg-gradient-to-r from-purple-900 to-pink-800">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-pink-500 rounded-box text-xs ">
        
             {
                navLinks
              }
            
            </ul>
          </div>
          <div className="flex items-center justify-center">
          <img className="w-[24px] lg:w-[50px] relative lg:top-6  rounded-full " src="https://i.ibb.co/HrTSywC/detailed-travel-logo-23-2148632074.jpg" alt="" />
          <a className="btn btn-ghost font-bold  sm:mr-9 lg:text-6xl text-xl  lg:mt-8">Tour<span className="text-pink-600">Ease</span></a>
        
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
                navLinks
            }
          </ul>
        </div>
        <div className="navbar-end lg:mt-8">

       
      

     <span className="text-3xl mr-5" onClick={() => setTheme(!theme)}>

     {
        theme ?  <CiDark className="text-white"></CiDark>
           :  <MdDarkMode></MdDarkMode>
      }



     </span>




   

        { user ?  
             
             <div className="flex gap-4 items-center">

          

             <div className="lg:tooltip" data-tip={user?.displayName || "Jennifer Lopez"}>
                <img className=" w-9 rounded-full" src={user?.photoURL} alt="" />
             </div>
               <button onClick={handleSignOut} className="btn border-none font-bold text-white mr-5 btn-primary ">Sign Out</button>
               
             </div>

            :

             <Link to='/login'>  <button className="btn  mr-5 border-none font-bold text-white btn-primary">SignIn</button> </Link>


              }
      
        <Link to='/register'>  <button className="btn border-none ml-3 font-bold text-white btn-primary">SignUp</button> </Link>
         
    
 

        </div>
      </div>
    );
};

export default Navbar;