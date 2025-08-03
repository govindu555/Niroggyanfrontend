import axios from "axios";
import "./form.css"
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

// this component for taking patient data from user

const FormPage=()=>{

    const pa=useParams()
    const [id,setId]=useState(pa.id) // this is storing for one docotr id

    const [patientdata,setpatientdata]=useState({
        name:"",                       //this is storing data from form tag
        email:"",
        date:"",
        doctorid:id
    })

    const nav=useNavigate()
  
    function patientfun(e){               // this is If user enter patient details then  getting data from form tag using onChange event
        const {name,value}=e.target
        setpatientdata({...patientdata,[name]:value})
    }


    async function submitfun(e){    // this is If user click submit button then receiving data 
          e.preventDefault();

         const status=window.confirm("Are you Confirm...")

       if(status==true){    // this is for user confirmation or not
           axios.post("https://niroggyanbackend.onrender.com/patientdata",patientdata) // this is send patient data to mongodb with API

           const data={status:"Not Available"} //this is If user is comfirmed then doctor status is update with not available using API
           axios.put("https://niroggyanbackend.onrender.com/doctordata/"+id,data)
           nav("/patient") // this is If user is comfirmed then go to patient list
        }
   }


    return(
        <div>
            <div className="patient">
                <h1 className="headname">Enter Patient Details...</h1>
                <form onSubmit={submitfun} className="form">
                    <div className="patient2">
                        <h1 className="patientname">Name*</h1>
                        <input className="input" type="text" placeholder="Name" name="name" onChange={patientfun} required/>
                    </div>
                    <div className="patient2">
                        <h1 className="patientname">Email*</h1>
                        <input className="input" type="email" placeholder="Email" name="email" onChange={patientfun} required/>
                    </div>
                    <div className="patient2">
                        <h1 className="patientname">Date/Time*</h1>
                        <input className="input" type="date" placeholder="Date/Time" name="date" onChange={patientfun} required/>
                    </div>
                    <div className="submit">
                        <input className="submit2" type="submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormPage