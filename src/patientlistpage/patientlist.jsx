import { useEffect, useState } from "react"
import "./patientlist.css"
import axios from "axios"
import { BsTrash3 } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// this component for looking total patient list

const PatientListPage=()=>{

    const [patientlist,setPatientlist]=useState([]) // this is storing for total patient list

     useEffect(()=>{
         patient()
     },[])
  
    async function patient(){
        const data=await axios.get("https://niroggyanbackend.onrender.com/getpatient") // this is getting total patient list from mongodb with API
        setPatientlist(data.data)
     }

    const nav=useNavigate()

    function editfun(id){    // this is If user click edit icon then go to edit page
            nav(`/edit/${id}`)
    }

    async function deletefun(id,id2){ 

        const d={status:"Available"}  // this is If user click delete icon then doctor status is update with available in mongodb using API
        axios.put("https://niroggyanbackend.onrender.com/doctordata/"+id2,d)

        const data=await axios.delete("https://niroggyanbackend.onrender.com/patientdelete/"+id) // this is If user click Delete icon then delete patient from mongodb
        setPatientlist(data.data)
    }


    return(
        <div>
            <div className="patientmain">
                <div className="patientlist">
                    <h1 className="patientname">S.No</h1>
                    <h1 className="patientname">Name</h1>
                    <h1 className="patientname">Email</h1>
                    <h1 className="patientname">Date</h1>
                </div>
                <div className="patientdetails">
                    {patientlist.map((item,index)=>(
                        <div>
                        <div className="patientdetails2" key={index}>
                            <h1 className="patientone">{index+1}</h1>
                            <h1 className="patientone">{item.name}</h1>
                            <h1 className="patientone">{item.email}</h1>
                            <h1 className="patientone">{item.date}</h1>
                            <div className="icons">
                               <button className="edit" onClick={()=>editfun(item._id)}><BsPencilSquare className="edit1" /></button>
                               <button className="delete" onClick={()=>deletefun(item._id,item.doctorid)}><BsTrash3 className="delete1"/></button>
                            </div>
                        </div>
                        <hr/>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default PatientListPage