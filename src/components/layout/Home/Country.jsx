import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Country = ({country}) => {
 
     const { countryName ,flagImage, description } = country;

    return (
        <Link to={`/countryDetails/${countryName}`}>
        <div className="card h-[500px]  card-compact bg-gradient-to-r from-purple-300 to-pink-500 shadow-xl">
        <figure><img className="w-full" src={flagImage} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl border-b-2 border-black pb-4">Country: {countryName}</h2>
          <h2 className="card-title">Spot: {countryName}</h2>
          <h2 className="card-title">Description: {description}</h2>
          
          
        
          
        </div>
          </div>
        
        </Link>
    );
};

export default Country;