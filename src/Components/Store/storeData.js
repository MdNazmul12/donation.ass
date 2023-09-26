const getDonation=()=>{
    const storeDonation=localStorage.getItem('donation-apli');
    if(storeDonation){
        return JSON.parse(storeDonation)
    }
}
const saveDonation=id=>{
const storeDonation=getDonation();
const exists=storeDonation.find(donationId=>donationId==id);
if(!exists){
    storeDonation.push(id);
    localStorage.setItem('donation-apli',JSON.stringify(storeDonation))
}
}
export{saveDonation,getDonation}