import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {

   const {user} = useContext(AuthContext);
   const [item, setItem] = useState([]);
  


   useEffect(()=> {
    
    fetch(`https://tourism-management-server-nine-sigma.vercel.app/myList/${user?.email}`)
     .then(res => res.json())
     .then(data => {

        
        setItem(data);
    })


  }, [user])

   

   const handleDelete = (_id) =>{
      console.log(_id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
         if(result.isConfirmed){
            fetch(`https://tourism-management-server-nine-sigma.vercel.app/myList/${_id}`,{

              method: "DELETE",     
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            if(data.deletedCount > 0){
                Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success"
              });
              
              const remaining = item.filter(spot => spot._id !== _id)
              setItem(remaining);


            }

            })


         }
      })
   }

 

    const handleUpdate = (_id) => {
        console.log(_id);
    }



    return (
        <div className="mt-10">
            <h3 className="text-center text-6xl text-pink-950 font-bold">MY TOURIST SPOTS</h3>
      
         

            <div className="lg:overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Tourist Spot</th>
        <th>Country</th>
        <th>Average Cost</th>
        <th>Travel Time</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        item.map(p =>    <tr key={p._id}>
            <th></th> 
            <td>{p.email}</td>
            <td>{p.touristSpotName}</td>
            <td>{p.countryName}</td>
            <td>{p.averageCost}</td>
            <td>{p.travelTime}</td>
            

            <td>  <Link to={`/updateSpot/${p._id}`}><button  className="btn btn-ghost bg-pink-900 text-white font-bold">Update</button></Link></td>

          <td>  <button onClick={() => handleDelete(p._id)} className="btn btn-ghost bg-pink-900 text-white font-bold">Delete</button></td>
         
        
          </tr>
         
              
        )
     }
     
    </tbody>
  </table>
</div>


        </div>

                    
     
        
    );
};

export default MyList;