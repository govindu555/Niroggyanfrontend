import { useEffect,useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
import axios from "axios"
import { BsArrowLeft } from "react-icons/bs";
import "./doctordetails.css"

// this component for looking one doctor details

const DoctorDetailsPage=()=>{
    const pa=useParams()
    const [id,setId]=useState(pa.id) //this is storing for one doctor id

    const [doctordetails,setDoctordetails]=useState({}) // this is for storing for doctor details
    const [available,setAvailable]=useState(false) // this is for status is available or not available

    useEffect(()=>{
        doctor()
    },[])

    async function doctor(){
        const data= await  axios.get("https://niroggyanbackend.onrender.com/getonedoctor/"+id) //this is for get one doctor from mongodb with API
        setDoctordetails(data.data)
    }

    const nav=useNavigate() 

    function backfun(){
       nav("/")  // this is If user is click Arrow icon button then  navigate from doctor details to doctor list
    }

    function book(status){
        if(status!="Not Available"){ //this is If user click book appointment button then checking available or not incase if available then go to form page 
            nav(`/form/${id}`) 
        } 
        else{
            setAvailable(true)
        }
    }

    return(
        <div>
            <div className="doctorone">
                <h1 className="hi"><BsArrowLeft  className="arrow" onClick={backfun}/>Hi, Welcome...</h1>
                <div className="doctorone2">
                    <img className="imageone" src={doctordetails.url}/>
                    <div>
                        <h1 className="nameone">{doctordetails.name}</h1>
                        <h1 className="textone">{doctordetails.specialization}</h1>
                        <h1 className="textone">{doctordetails.experience}</h1>
                        <h1 className="textone">{doctordetails.location}</h1>
                    </div>
                    <div>
                        {doctordetails.status=="Not Available"?<h1 className="statusone statustwo">{doctordetails.status}</h1>:<h1 className="statusone">{doctordetails.status}</h1>}
                        <button type="button" className="book" onClick={()=>book(doctordetails.status)}>Book Appointment</button>
                        {available?<h1 className="sorry">Sorry, Not Available</h1>:<></>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorDetailsPage