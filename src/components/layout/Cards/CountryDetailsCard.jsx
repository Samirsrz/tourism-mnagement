import { Link } from "react-router-dom";





const CountryDetailsCard = ({country}) => {

    const {_id, touristSpotName, countryName , location, description, averageCost,seasonality,travelTime, totalVisitors, photo} = country;
   


    return (
        <div className="card h-[500px]  card-compact bg-gradient-to-r from-purple-800 to-pink-800 shadow-xl">
        <figure><img className="w-full" src={photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl border-b-2 border-black pb-4">Country: {countryName}</h2>
          <h2 className="card-title">Spot: {touristSpotName}</h2>
          <h2 className="card-title">Location: {location}</h2>
          <h2 className="card-title">Average Cost: {averageCost}</h2>
          
          
      
                  <p> <span><Link to={`/viewSpot/${_id}`}><button className="btn bg-pink-950 border-none text-white font-bold btn-accent w-full ">View Details</button></Link>  </span></p>
                
                
              
              
              
          
        </div>
          </div>
    );
};

export default CountryDetailsCard;