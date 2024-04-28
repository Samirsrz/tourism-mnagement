import { useLoaderData, useParams } from "react-router-dom";

const SpotDetails = () => {
 
    const spotDetails = useLoaderData();
   
    const {_id, touristSpotName, countryName , location, description, averageCost,seasonality,travelTime, totalVisitors, photo} = spotDetails;
   
      
      console.log(_id);

    return (
        <div className="lg:w-[1770px] bg-gradient-to-r from-purple-200 to-pink-800 mx-auto mt-8 gap-4 grid grid-cols-1 lg:grid-cols-3">
            
        <div className="col-span-2 shadow-xl mb-6">
           <img className="rounded-lg mt-8 w-3/4 m-auto" src={photo} alt="" />

        </div>
        
        
        <div className="space-y-10 bg-gradient-to-r from-purple-300 to-pink-300 p-4 rounded-lg shadow-lg">
         
              <h1 className="text-3xl border-b-2 pb-4 font-bold">{countryName}</h1>
              <h1 className="text-xl font-bold"><span>Spot: </span>{touristSpotName}</h1>
                <p><span className="text-xl mr-8 font-bold">Location:</span> {location}</p>
                 <p><span className="text-xl mr-4 font-bold">Season: </span>{seasonality}</p>
                 <p><span className="text-xl mr-8 font-bold">Average Cost </span>{averageCost}$</p>
                 <p><span className="text-xl mr-4 font-bold">Travel Time: </span>{travelTime}</p>
                 <p><span className="text-xl mr-4 font-bold">Total Visitors:</span>{totalVisitors}/peryear</p>
                 <p><span className="text-xl mr-4 font-bold"></span>{description}</p>


        </div>




        </div>
    );
};

export default SpotDetails;