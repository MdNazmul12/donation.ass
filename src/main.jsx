import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import DonationDetails from './Components/DonationDetails/DonationDetails';
import Donations from './Components/Donation/Donations';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
       path:"/",
       element:<Home></Home>
      },
       {
        path:"/donation",
        element:<Donations></Donations>
       },
      {
        path:"/donation/:id",
        element:<DonationDetails></DonationDetails>,
        loader:()=>fetch("../Data.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
