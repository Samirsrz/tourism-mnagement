import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/layout/Root';
import Error from './components/layout/Pages/Error';
import Login from './components/layout/Login';
import Register from './components/layout/Register';
import AllTouristSpot from './components/layout/AllTouristSpot';
import AddTouristSpot from './components/layout/AddTouristSpot';
import MyList from './components/layout/Pages/MyList';
import Home from './components/layout/Home/Home';
import AuthProvider from './components/layout/provider/AuthProvider';
import PrivateRoute from './components/layout/provider/PrivateRoute';
import SpotDetails from './components/layout/Pages/SpotDetails';
import UpdateSpot from './components/layout/Pages/UpdateSpot';
import CountryDetails from './components/layout/Cards/CountryDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
     children: [


       {
       path:'/',
       element:<Home></Home>,
       loader: () => fetch('http://localhost:5000/addSpot')
       },

       {
        path: '/allTouristSpot',
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch('http://localhost:5000/addSpot/')

       },

       {
        path: '/addTouristSpot',
        element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
       },

      {
        path:'/myList',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>
      },

        {
            path:'/viewSpot/:id',
            element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/addSpot/${params.id}`)
          },

      {
        path: '/login',
        element: <Login></Login>
      },
      {
          path:'/register',
          element: <Register></Register>

      },

      {
        path:'/updateSpot/:id',
        element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/addSpot/${params.id}`)
      
      },


      {
       path:'/countryDetails/:countri',
       element: <CountryDetails></CountryDetails>,
       loader:({params})=>fetch(`http://localhost:5000/country/${params.countri}`),

      }


     ]


  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
