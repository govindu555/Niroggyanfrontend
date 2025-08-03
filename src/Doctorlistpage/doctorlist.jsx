import { useEffect,useState } from "react"
import axios from "axios"
import {PacmanLoader} from "react-spinners"
import { NavLink } from "react-router-dom"
import "./doctorlist.css"

// this component for looking total doctors list

const DoctorsListPage=()=>{

    const [doctorlist,setDoctorlist]=useState([]) // this is storing total doctors list
    const [searchdoctor,setSearchdoctor]=useState([])// this is storing for searching data
    
    useEffect(()=>{
        doctorfun()
    },[])

    async function doctorfun(){
           const data= await axios.get("https://niroggyanbackend.onrender.com/getdoctors") // this is get total doctors list from mongodb with API 
           setDoctorlist(data.data)
           setSearchdoctor(data.data)
    }

    function searchfun(e){   // this is If user search particlare doctor then  receiving user data from serach input using onChange event and doing filter
        if(e.target.value!=""){
             let data=searchdoctor.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.specialization.toLowerCase().includes(e.target.value.toLowerCase()))
             setDoctorlist(data)
        }
        else{
            setDoctorlist(searchdoctor)
        }
    }

    return(
        <div className="doctorlist">
            <div>
                <input className="search" type="search" placeholder="Search, name or specialization" onChange={searchfun}/>
               {doctorlist.length>0?<div className="doctorlist2">
                    {doctorlist.map((item,index)=>(
                        <div className="doctorlist3" key={index}>
                           <NavLink to={`/doctor/${item._id}`}><img className="image" src={item.url}/></NavLink> 
                            <div>
                            <NavLink to={`/doctor/${item._id}`}><h1 className="name">{item.name}</h1></NavLink>
                            <h1 className="text">{item.specialization}</h1>
                            </div>
                            {item.status=="Not Available"?<h1 className="status status2">{item.status}</h1>:<h1 className="status">{item.status}</h1>}
                        </div>
                    ))}
                </div>:<div className="load"><PacmanLoader color="#ac00ff" /></div>}
            </div>
        </div>
    )
}

export default DoctorsListPage