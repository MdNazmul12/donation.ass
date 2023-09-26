import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DonationDetails = () => {
    const Data=useLoaderData();
    const {id}=useParams();
    const donation=Data.find(donation=>donation.id==id)
    // eslint-disable-next-line no-unused-vars
    const idInt=parseInt(id)
    const handleDonation=()=>{
        toast('you applied have a success')
        // eslint-disable-next-line no-undef
        saveDonation(id);
    }
   
    return (
        <div onClick={handleDonation} className="">
           <img className="h-[600px] mx-auto" src={donation.picture} alt="" />
           <div className="ml-[190px] ">
           <h2 className=" text-2xl font-bold">{donation.title}</h2>
           <p>{donation.description}</p>
           </div>
           <ToastContainer />
        </div>
    );
};

export default DonationDetails;