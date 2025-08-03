
import NavbarPage from './Navbarpage/navbar'
import SidebarPage from './Sidebarpage/sidebar'
import DoctorsListPage from './Doctorlistpage/doctorlist'
import DoctorDetailsPage from './doctordetailspage/doctordetails'
import FormPage from './formpage/form'
import PatientListPage from './patientlistpage/patientlist'
import PatientEditPage from './patienteditpage/patientedit'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'

 // this component for navigation from one page to another page

const App=()=>{
                 
  return (
    <>
      <div>
        <BrowserRouter>
          <NavbarPage/>
          <SidebarPage/>
          <Routes>
             <Route path='/' Component={DoctorsListPage}/>
             <Route path='/doctor/:id?' Component={DoctorDetailsPage}/>
             <Route path='/form/:id?' Component={FormPage}/>
             <Route path='/patient' Component={PatientListPage}/>
             <Route path='/edit/:id?' Component={PatientEditPage}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
