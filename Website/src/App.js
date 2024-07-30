import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";


import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MechanicalDepartment from './components/Courses/MechanicalDepartment';
import ElectricalDepartment from './components/Courses/ElectricalDepartment';
import ComputerDepartment from './components/Courses/ComputerDepartment';
import CivilDepartment from './components/Courses/CivilDepartment';
import Academics from "./components/Academics";
import Fees from './components/Admission/Fees';
import Rules from './components/Admission/Rules';
import AdmissionForm from "./components/Admission/AdmissionForm";
import PaymentPage from "./components/Admission/Payment";
import Facilities from './components/Facilities';
import About from "./About"
import PlacementPage from "./Placement";
import Contact from './components/Contact';
import Footer from './components/Footer';
import StudentReports from "./components/StudentReports";
import AboutFoodCourt from "./components/Foodcourt";
import Gym from "./components/Gym";
import Hostel from "./components/hostel";
import Library from "./components/Library";
import IndoorStadium from "./components/IndoorStadium";
import { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import TransportPage from "./components/transport";
import MessPage from "./components/mess";
import LabsPage from "./components/lab";

function App() {
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 1000);
  }, [])

  
  return (
    <>
    {
      loading ?
        <Loader />
      :
      <Router>
         <ScrollToTop smooth />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mechanicaldepartment' element={<MechanicalDepartment />} />
          <Route path='/electricaldepartment' element={<ElectricalDepartment/>} />
          <Route path='/computerdepartment' element={<ComputerDepartment/>} />
          <Route path='/Civildepartment' element={<CivilDepartment />} />
          <Route path='/fees' element={<Fees />} />
          <Route path='/admissionform' element={<AdmissionForm/>} />
          <Route path='/fees' element={<Fees />} />
          <Route path='/payment' element={<PaymentPage/>} />
          <Route path='/academics' element={<Academics/>} />
          <Route path='/rules' element={<Rules />} />
          <Route path='/facilities' element={<Facilities/>} />
          <Route path='/about' element={<About/>} />   
          <Route path='/Foodcourt' element={<AboutFoodCourt/>}/>
          <Route path='/Gym' element={<Gym/>}/>
          <Route path='/Library' element={<Library/>}/>
          <Route path='/Studentreport' element={<StudentReports/>}/>
          <Route path='/Indoorstadium' element={<IndoorStadium/>}/>
          <Route path='/placement' element={<PlacementPage/>}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/hostel' element={<Hostel/>} />
          <Route path='/transport' element={<TransportPage/>} />
          <Route path='/mess' element={<MessPage/>} />
          <Route path='/lab' element={<LabsPage/>} />
        
        </Routes>
        <Footer />
      </Router>
    }
    </>
  );
}

export default App;
