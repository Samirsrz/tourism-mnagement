import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
    
    const spot = useLoaderData();

    const {_id, touristSpotName, countryName , location, description, averageCost,seasonality,travelTime, totalVisitors, photo} = spot;
   
     const handleUpdate = (e) => {
        e.preventDefault();
        const form  = e.target;
        const touristSpotName = form.touristSpotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitors = form.totalVisitors.value;
        const photo = form.photo.value;



        const updatedTouristSpot = {
            
            touristSpotName, countryName , location, description, averageCost,seasonality,travelTime, totalVisitors, photo
          }


           console.log(updatedTouristSpot);

           fetch(`http://localhost:5000/addSpot/${_id}`,{
            method: "PUT",
            headers:{
              'content-type' : 'application/json'
          },
            body: JSON.stringify(updatedTouristSpot) 
         })
          .then(res => res.json())
          .then(data => {
             
  
              if(data.modifiedCount > 0){
                  Swal.fire({
                      title: "Success",
                      text: "Your Spot has been Updated",
                      icon: 'success',
                      confirmButtonText: 'Done'
                     
                    });
              }
  
              console.log(data);
              form.reset();
          })





     }
   
    return (
        <div className="bg-gradient-to-r from-purple-300 to-pink-300 p-24 lg:w-[1870px] mx-auto">
        <h2 className="font-bold text-4xl ">Update Your Tourist Spot</h2>

            <form onSubmit={handleUpdate}>
            <div className="md:flex gap-7">
            <div className="join form-control md:w-1/2">
                <label className="label">
                    <span className="label-text  text-white font-bold text-xl ">Tourist Spot Name:</span>
                </label>
                <label className="input">
                
                <input defaultValue={touristSpotName} name="touristSpotName" required type="text" className="input join-item w-full"/>
                </label>

            </div>
            <div className="join form-control md:w-1/2">
                <label className="label">
                    <span className="label-text  text-white font-bold text-xl">Country Name:</span>
                </label>
                <label className="input">
                
                <input defaultValue={countryName} name="countryName" required  type="text" className="input  join-item w-full" />
                </label>

            </div>
            </div>
            <div className="md:flex gap-7">
            <div className="join form-control md:w-1/2">
                <label className="label">
                    <span className="label-text text-white font-bold text-xl">Location</span>
                </label>
                <label className="input">
                
                <input defaultValue={location} name="location" type="text" className="input  join-item w-full" />
                </label>

            </div>

            <div className="join form-control md:w-1/2">
                <label className="label">
                    <span className="label-text text-white font-bold text-xl">Average_Cost</span>
                </label>
                <label className="input">
                
                <input defaultValue={averageCost} name="averageCost" type="text" className="input  join-item w-full" />
                </label>

            </div>



            </div>
            <div className="md:flex gap-7">
            <div className="join form-control md:w-1/2">
                <label className="label">
                    <span className="label-text text-white font-bold text-xl">Seasonality</span>
                </label>
                <label className="input">
                
                <input defaultValue={seasonality} name="seasonality" required  type="text" className="input  join-item w-full"/>
                </label>

            </div>
            <div className="join form-control md:w-1/2">
                <label className="label">
                    <span className="label-text text-white font-bold text-xl">Travel-Time</span>
                </label>
                <label className="input">
                
                <input defaultValue={travelTime} name="travelTime" type="text" className="input  join-item w-full" />
                </label>

            </div>
            </div>
            <div className="lg:flex gap-7">
            <div className="join mx-auto form-control md:w-1/2">
                <label className="label">
                    <span className="label-text text-white font-bold text-xl">Photo:</span>
                </label>
                <label className="input">
                
                <input defaultValue={photo} name="photo" type="text"  required className="input  join-item w-full" />
                </label>

            </div>
            <div className="join form-control md:w-1/2">
                <label className="label">
                    <span className="label-text text-white font-bold text-xl">Total-Visitors <small>per year</small></span>
                </label>
                <label className="input">
                
                <input defaultValue={totalVisitors} name="totalVisitors" required  type="text" className="input  join-item w-full"/>
                </label>

            </div>

            </div>

       
        <div className="join mt-9 flex flex-col form-control md:w-1/2">
        
            <h2 className="label-text text-white font-bold text-xl">Description</h2>
        <div>
        <textarea  required cols={100} rows={10} name="description" type="text" className="w-full rounded-xl p-4" />
            
        </div>

        </div>



        
        <input type="submit" value="Update Spot" className="btn border-none font-bold btn-block mt-2 bg-purple-700" />
                

        </form>
            </div>
    );
};

export default UpdateSpot;