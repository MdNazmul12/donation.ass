/* eslint-disable react/prop-types */
import{Link} from"react-router-dom";
const DonationCard = ({ donation }) => {
    // eslint-disable-next-line no-unused-vars
    const { id,title, category, category_bg_color, description, picture } = donation;
    // eslint-disable-next-line no-unused-vars
    const handaleDonation=()=>{
         console.log(donation)
    }
    return (
        <div onClick={"handaleDonation"} className="">
        
           <Link to={`/donation/${id}`}>
           <div className="card bg-base-100 shadow-xl">
            <figure><img className="w-[300px] h-[300px]" src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h4 className="card-title text-xl text-bold">{title}</h4>
                    <h2 className="text-2xl">{category} <span></span> </h2>
                    

                </div>
           
              
            </div>
           </Link>
        </div>
    );
};

export default DonationCard;