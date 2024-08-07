import { useLoaderData } from "react-router-dom";
import SpotCard from "../Cards/SpotCard";
import Banner from "./Banner";
import Cuisine from "./Cuisine";
import { useEffect, useState } from "react";
import Country from "./Country";
import Review from "../Cards/Review";
import { useTypewriter,Cursor } from "react-simple-typewriter";





const Home = () => {

    const [typeEffect] = useTypewriter({
        words:  ['TOURIST SPOTS'],
        loop:{},
        typeSpeed:100,
       deleteSpeed:40
    })
   
   
   const spots =  useLoaderData();


   const [countries, setCountries] = useState([]);


   useEffect(()=> {

   fetch(`https://tourism-management-server-nine-sigma.vercel.app/countryAll`,{

   })
   .then(res => res.json())
   .then( data => {
       setCountries(data);
   })

   },[])

   
    return (
        <div>
           
        
          <div className=" lg:w-[1870px] mt-16  mx-auto rounded-l-lg">
        
             <p className="text-center text-5xl font-extrabold mb-8">Visit The Most Beautiful <span className="text-pink-800">{typeEffect}</span> of SOUTHEAST ASIA <br /> With Us!</p>
        
        
          <Banner></Banner>


          </div>


          <p className="text-center text-5xl  my-11 font-extrabold mb-8"><span className="text-pink-800">{typeEffect}</span> <br />In the SouthEast Countries <br /> </p>


            <div className= "grid p-3 justify-center mb-11 text-center grid-cols-1 lg:grid-cols-3 lg:w-[1700px] gap-5 mx-auto items-center">

            {
                countries.map(country => <Country key={country._id}
                country={country}></Country>)
            }



            </div>







          <p className="text-center text-5xl  my-11 font-extrabold mb-8">Our Popular <br /><span className="text-pink-800">{typeEffect}</span> </p>


            <div className= "grid p-3 justify-center mb-11 text-center grid-cols-1 lg:grid-cols-3 lg:w-[1700px] gap-5 mx-auto items-center">
 

                {
                  spots.slice(0,6).map(spot => <SpotCard key={spot._id}
                  
                  spot={spot}
                  
                  ></SpotCard>)


                }
            </div>


        

          <div className="mb-24">
            <h2 className="text-center mb-11 text-5xl font-extrabold">Here is our TASTY CUISINE</h2>
          <Cuisine></Cuisine>
          </div>

              <p className="text-center mb-11 text-5xl font-extrabold">Our Reviews</p>
   <div className="mt-24 bg-gradient-to-r from-purple-900 to-pink-800 p-4">
  
      <Review></Review>


      </div>
        </div>
    );
};

export default Home;