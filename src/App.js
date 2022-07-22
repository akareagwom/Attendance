
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Attendance from "./pages/Attendance/Attendance";
import Dashboard from "./pages/Dashboard/Dashboard";
import Individual from "./pages/Individual/Individual";
import Interns from "./pages/interns/Interns";
import Messeges from "./pages/Messeges/Messeges";
import Private from "./pages/private/Private";
import Mentor from "./pages/mentors/Mentor";
import Settings from "./pages/Settings/Settings";
import Complain from "./pages/complains/Complain";
import Permission from "./pages/permission/Permission";
import Request from "./pages/request/Request";
import Men from "./pages/men/Men";
import Vate from "./pages/vate/Vate";
import { Calendar } from "react-calendar";
import BarChart from "./pages/barchart/BarChart";
import Intdash from "./pages/intdash/Intdash";
import Mendash from "./pages/mendash/Mendash";
import LandingPage from "./pages/LandingPage/LandingPage"
import LoginPage from "./pages/LoginPage/LoginPage";
import SideBar from "./sidebar/SideBar";
// import DataI from "./dataI";
import DataI from "./datai/DataI";

import {getAllStudents} from "./store/redux/student/action"

console.log(getAllStudents())

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/SideBar" element={<SideBar/>}></Route>
        <Route path="/LoginPage" element={<LoginPage />}>
        </Route>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Attendance" element={<Attendance />}>
        </Route>
        <Route path="/Individual" element={<Individual />} >      
         </Route>
        <Route path="/Messeges" element={<Messeges />}>
        </Route>
        <Route path="/Request" element={<Request />}>
        </Route>
        <Route path="/Permission" element={<Permission />}>
        </Route>
        <Route path="/Complain" element={<Complain />}>
        </Route>
        <Route path="/Interns" element={<Interns />}>
        </Route>
        <Route path="/Private" element={<Private />}>
        </Route>
        <Route path="/Mentor" element={<Mentor />}>
        </Route>
        <Route path="/Settings" element={<Settings />}>
        </Route>
        <Route path="/Men" element={<Men />}>
        </Route>
        <Route path="/Vate"element={<Vate />}>
        </Route> 
        <Route path="/Calender" element={<Calendar/>}>
        </Route>
        <Route path="/BarChart" element= {<BarChart/>}>
        </Route>
        <Route path="/Intdash" element= {<Intdash/>}>
        </Route>
        <Route path="/Mendash" element= {<Mendash/>}></Route>
        <Route path="/DataI" element= {<DataI/>}></Route>


      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
