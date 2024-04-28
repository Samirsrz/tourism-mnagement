import { useLoaderData } from "react-router-dom";
import  SpotCard from "./Cards/SpotCard";
import { useState } from "react";

const AllTouristSpot = () => {
   
    const allSpot = useLoaderData();
     console.log(allSpot);
    const [spots, setSpots] = useState(allSpot);

    const handleSort =()=>{
        const result =  [...allSpot].sort((a, b)=>{
          
            return b.averageCost - a.averageCost;
         
        })
        setSpots(result);
        console.log(result);
     }
   
    return (
        <div className="space-y-20">

                  
          <div >

          <div className="dropdown mx-auto
           dropdown-hover">
                <div tabIndex={0} role="button" className="btn btn-accent bg-purple-700 text-white font-extrabold lg:ml-28">SORT</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={handleSort}><a>Highest to Lowest Cost</a></li>
                </ul>
                </div>


          </div>
              

               


            <div className= "grid p-3  justify-center text-center grid-cols-1 lg:grid-cols-3 lg:w-[1700px] gap-5 mx-auto items-center">
 

                {
                  spots.map(spot => <SpotCard key={spot._id}
                  
                  spot={spot}
                  
                  ></SpotCard>)


                }
            </div>
        </div>
    );
};

export default AllTouristSpot;