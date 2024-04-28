import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip';


const Country = ({country}) => {
 
     const { countryName ,flagImage, description } = country;

    return (
      <div>
          <Link 
        data-tooltip-id="tooltip-anchor-hide"
        data-tooltip-content="Click Me to See More Tourist Spots"
        data-tooltip-delay-hide={1000}
        
        to={`/countryDetails/${countryName}`}>
        <div className="card h-[500px]  card-compact bg-gradient-to-r from-purple-300 to-pink-500 shadow-xl">
        <figure><img className="w-full" src={flagImage} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl border-b-2 border-black pb-4">Country: {countryName}</h2>
          <h2 className="card-title">Spot: {countryName}</h2>
          <h2 className="card-title">Description: {description}</h2>
          
          
        
          
        </div>
          </div>
        
        </Link>
        <Tooltip id="tooltip-anchor-hide" />
      </div>
    );
};

export default Country;