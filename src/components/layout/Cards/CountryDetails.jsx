import { useLoaderData } from "react-router-dom";
import CountryDetailsCard from "./CountryDetailsCard";



const CountryDetails = () => {


     const countries =  useLoaderData();
    



    return (

        <div className= "grid p-3  justify-center text-center grid-cols-1 lg:grid-cols-3 lg:w-[1700px] gap-5 mx-auto items-center">
           
              {
                countries.map(country => <CountryDetailsCard key={country._id}
                
                country = {country}
                ></CountryDetailsCard>)
              }

        </div>
    );
};

export default CountryDetails;