import { useLoaderData } from "react-router-dom";
import SpotCard from "../Cards/SpotCard";
import Banner from "./Banner";
import Cuisine from "./Cuisine";
import { useEffect, useState } from "react";
import Country from "./Country";
import Review from "../Cards/Review";

const Home = () => {
   
   
   const spots =  useLoaderData();


   const [countries, setCountries] = useState([]);


   useEffect(()=> {

   fetch(`http://localhost:5000/countryAll`,{

   })
   .then(res => res.json())
   .then( data => {
       setCountries(data);
   })

   },[])

   
    return (
        <div>
           
        
          <div className=" lg:w-[1870px] mt-16  mx-auto rounded-l-lg">
        
             <p className="text-center text-5xl font-extrabold mb-8">Visit The Most Beautiful Places of <span className="text-pink-800">SOUTHEAST ASIA</span> <br />With Us!</p>
        
        
          <Banner></Banner>


          </div>


          <p className="text-center text-5xl  my-11 font-extrabold mb-8">Countries You Can Visit <br /><span className="text-pink-800">TOURIST SPOTS</span> </p>


            <div className= "grid p-3 justify-center mb-11 text-center grid-cols-1 lg:grid-cols-3 lg:w-[1700px] gap-5 mx-auto items-center">

            {
                countries.map(country => <Country key={country._id}
                country={country}></Country>)
            }



            </div>







          <p className="text-center text-5xl  my-11 font-extrabold mb-8">Our Popular <br /><span className="text-pink-800">TOURIST SPOTS</span> </p>


            <div className= "grid p-3 justify-center mb-11 text-center grid-cols-1 lg:grid-cols-3 lg:w-[1700px] gap-5 mx-auto items-center">
 

                {
                  spots.slice(0,6).map(spot => <SpotCard key={spot._id}
                  
                  spot={spot}
                  
                  ></SpotCard>)


                }
            </div>


        

          <div>
            <h2 className="text-center mb-11 text-5xl font-extrabold">Here is our TASTY CUISINE</h2>
          <Cuisine></Cuisine>
          </div>


     <Review></Review>


        </div>
    );
};

export default Home;