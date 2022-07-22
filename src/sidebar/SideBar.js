import { Link } from "react-router-dom";
import  "./sidebar.css";
import Image from "../img/Logo.png";
// import person from "../img/person.png"
// import dash from "../img/dash.jpg"
// import attend from "../img/attend.jpg"



const SideBar = () => {
    return ( 
        <div>
            <div className="sidebar"> 
            <img className = "image1" src= { Image } alt="" />

                </div>
                <div className="side side">
                    <li><Link to='/Dashboard' className="info" > Dashboard</Link></li>
                    <li><Link to='/Individual' className="info" >Individual</Link></li>
                    <li><Link to='/Attendance' className="info" >Attendance</Link></li>
                    
                </div>
            </div>
     );
}
 
export default SideBar;