import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile" ;
import Navbar from "./components/Navbar"
import Petrol from "./components/services/PetrolService"
import LocationPopup from "./components/locationpop";
import GarageList from "./components/shownearbygarage";
import Navbarr from "./storage/temp";
import Tracker from "./components/tracker";
//import About from "./pages/About";




export default function App() {
 return(
  <div>
     <Navbar/>
       
  <div className="mt-10">
   <Routes>
  <Route path='/' element={<Home/>}/>  
  <Route path='/profile' element={<Profile/>}/> 
  <Route path='/petrol' element={<Petrol/>}/>  
 {/*<Route path='/about' element={<About/>}/> */ }
  <Route path='/shownearbygarages' element={<GarageList/>}/>  
  <Route path='/temp' element={<Navbarr/>}/> 
  <Route path='/track' element={<Tracker/>}/>  

</Routes></div>
</div>
 )
}


