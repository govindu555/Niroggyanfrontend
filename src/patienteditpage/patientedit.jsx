import axios from "axios";
import "./patientedit.css"
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

// this component for taking patient update data

const PatientEditPage=()=>{

    const pa=useParams()
    const [id,setId]=useState(pa.id)// this is storing patient id

        const [patientdata,setpatientdata]=useState({
        name:"",
        email:"",              // this is storing patient update data
        date:"",
    })
  
    function patientfun(e){       // this is If user enter patient details then  getting data from form tag using onChange event
        const {name,value}=e.target
        setpatientdata({...patientdata,[name]:value})
    }

    const nav=useNavigate() 

    async function submitfun(e){      // this is If user click submit button then receiving data 
       e.preventDefault();
       const status=window.confirm("Are you Confirm...")  

       if(status==true){             // this is for user confirmation or not
          axios.put("https://niroggyanbackend.onrender.com/patientedit/"+id,patientdata)    // this is send patient update data to mongodb with API
          nav("/patient")     // this is If user is comfirmed then go to patient list
        }
    }


    return(
         <div>
            <div className="patient">
                <h1 className="headname">Edit Patient Details...</h1>
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

export default PatientEditPage