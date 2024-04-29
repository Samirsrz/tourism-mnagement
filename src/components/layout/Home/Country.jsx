import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'

const Country = ({country}) => {
 
       

     const { countryName ,flagImage, description } = country;

    return (
      <div>
          <Link 
       id="clickable"
        to={`/countryDetails/${countryName}`}>
        <div className="card h-[500px]  card-compact bg-gradient-to-r from-purple-300 to-pink-500 shadow-xl">
        <figure><img className="w-full" src={flagImage} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl border-b-2 border-black pb-4">Country: {countryName}</h2>
          <h2 className="card-title">Spot: {countryName}</h2>


          <h2 className="card-title"><span className="text-purple-500 font-bold ">{description}</span></h2>
          
          
        
          
        </div>
          </div>
        
        </Link>
        <Tooltip anchorSelect="#clickable" clickable>
  <button>Click me to see Spots in this Country</button>
</Tooltip>
      </div>
    );
};

export default Country;