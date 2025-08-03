
import { NavLink } from "react-router-dom"
import "./sidebar.css"

// this component for looking side navbar

const SidebarPage=()=>{
    return(
        <div className="side">
            <div>
                <h1 className="sidename"><NavLink to="/">Doctors List</NavLink></h1>
                <h1 className="sidename"><NavLink to="/patient">Patient List</NavLink></h1>
            </div>
        </div>
    )
}

export default SidebarPage