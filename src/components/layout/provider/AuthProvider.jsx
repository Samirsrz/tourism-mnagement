import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../../Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {


    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider =  new GithubAuthProvider();
 



       const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
       }

       const updateUserProfile = (name, image) =>  {
        return updateProfile(auth.currentUser, {
           displayName: name,
           photoURL: image
        })
      }


       const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
       }



       const logout = () => {
        setLoading(true);
        return signOut(auth)

     }

     const googleLogin = () => {
     
        signInWithPopup(auth,googleProvider)
        .then(res => {
         Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User LoggedIn Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          
        }) 
 }

 const githubLogin = () => {
   signInWithPopup(auth,githubProvider)
   .then(res => {
      Swal.fire({
         position: "top-end",
         icon: "success",
         title: "User LoggedIn Successfully",
         showConfirmButton: false,
         timer: 1500
       });
     
     }) 

 }


 


 useEffect(()=> {
     
    const unSubscribe = onAuthStateChanged(auth, currentUser => {

      
       if(currentUser) {
        setUser(currentUser);
       }
       else{
        setUser(null)
       }
     
       setLoading(false);
    });

    return () => {
       unSubscribe();
    }


    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        signIn,
        logout,
        googleLogin,
        githubLogin
     }
  






    return (
     <AuthContext.Provider value={authInfo}>
   
   {children}

     </AuthContext.Provider>
    );
};

export default AuthProvider;