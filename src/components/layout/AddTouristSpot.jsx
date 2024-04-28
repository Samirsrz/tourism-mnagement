import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./provider/AuthProvider";

const AddTouristSpot = () => {

      const {user} = useContext(AuthContext);

     const handleAddTourist= (e) =>{
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
        const email = user.email;
        const name = user.displayName;
        const photo = form.photo.value;



          const touristSpot = {
            
            touristSpotName, countryName , location, description, averageCost,seasonality,travelTime, totalVisitors, email, name, photo
          }

        console.log(touristSpot);

       fetch('http://localhost:5000/addSpot',{
          method: "POST",
          headers:{
            'content-type' : 'application/json'
        },
          body: JSON.stringify(touristSpot) 
       })
        .then(res => res.json())
        .then(data => {
           

            if(data.insertedId){
                Swal.fire({
                    title: "Sweet!",
                    text: "Your Spot has been added",
                    imageUrl: `${photo}`,
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                  });
            }

            console.log(data);
            form.reset();
        })
        
     }


    return (
        <div className="bg-gradient-to-r from-purple-800 to-pink-800 p-24 lg:w-[1870px] mx-auto">
            <h2 className="font-bold text-4xl ">Add Tourist Spot of your Own</h2>

    <form onSubmit={handleAddTourist}>
    <div className="md:flex gap-7">
    <div className="join form-control md:w-1/2">
        <label className="label">
            <span className="label-text  text-white font-bold text-xl ">Tourist Spot Name:</span>
        </label>
        <label className="input">
          
        <input name="touristSpotName" required type="text" className="input join-item w-full"/>
        </label>
 
   </div>
    <div className="join form-control md:w-1/2">
        <label className="label">
            <span className="label-text  text-white font-bold text-xl">Country Name:</span>
        </label>
        <label className="input">
           
        <input name="countryName" required  type="text" className="input  join-item w-full" />
        </label>
 
   </div>
    </div>
    <div className="md:flex gap-7">
    <div className="join form-control md:w-1/2">
        <label className="label">
            <span className="label-text text-white font-bold text-xl">Location</span>
        </label>
        <label className="input">
          
        <input name="location" type="text" className="input  join-item w-full" />
        </label>
 
   </div>

    <div className="join form-control md:w-1/2">
        <label className="label">
            <span className="label-text text-white font-bold text-xl">Average_Cost</span>
        </label>
        <label className="input">
          
        <input name="averageCost" type="text" className="input  join-item w-full" />
        </label>
 
   </div>


   
    </div>
    <div className="md:flex gap-7">
    <div className="join form-control md:w-1/2">
        <label className="label">
            <span className="label-text text-white font-bold text-xl">Seasonality</span>
        </label>
        <label className="input">
          
        <input name="seasonality" required  type="text" className="input  join-item w-full"/>
        </label>
 
   </div>
    <div className="join form-control md:w-1/2">
        <label className="label">
            <span className="label-text text-white font-bold text-xl">Travel-Time</span>
        </label>
        <label className="input">
           
        <input name="travelTime" type="text" className="input  join-item w-full" />
        </label>
 
   </div>
    </div>
    <div className="lg:flex gap-7">
    <div className="join mx-auto form-control md:w-1/2">
        <label className="label">
            <span className="label-text text-white font-bold text-xl">Photo:</span>
        </label>
        <label className="input">
          
        <input name="photo" type="text"  required className="input  join-item w-full" />
        </label>
 
   </div>
   <div className="join form-control md:w-1/2">
        <label className="label">
            <span className="label-text text-white font-bold text-xl">Total-Visitors <small>per year</small></span>
        </label>
        <label className="input">
           
        <input name="totalVisitors" required  type="text" className="input  join-item w-full"/>
        </label>
 
   </div>
 
    </div>

    <div className="md:flex gap-7">
    <div className="join form-control md:w-1/2">
        <label className="label">
            <span className="label-text text-white font-bold text-xl">Your Name</span>
        </label>
        <label className="input">
          
        <input placeholder="Your Name" name="name" type="text" defaultValue={user.displayName}    disabled className="input join-item w-full"/>
        </label>
 
   </div>

    <div className="join form-control md:w-1/2">
        <label className="label">
            <span className="label-text  text-white font-bold text-xl">Email:</span>
        </label>
        <label className="input">
          
        <input disabled defaultValue={user.email} name="email" required  placeholder="Email" type="text" className="input join-item w-full"/>
        </label>
 
   </div>
  
  
    </div>

    <div className="join mt-9 flex flex-col form-control md:w-1/2">
       
           <h2 className="label-text text-white font-bold text-xl">Description</h2>
      <div>
      <textarea  required cols={100} rows={10} name="description" type="text" className="w-full rounded-xl p-4" />
        
      </div>
 
   </div>



      
      <input type="submit" value="Add Spot" className="btn border-none font-bold btn-block mt-2 bg-purple-700" />
            

    </form>
        </div>
    );
};

export default AddTouristSpot;