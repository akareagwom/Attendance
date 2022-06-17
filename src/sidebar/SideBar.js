import { Link } from "react-router-dom";
import  "./sidebar.css"
import Logo from '../img/Logo.png'

const SideBar = () => {
    return ( 
        <div>
            <div className="sidebar"> 
                <div className="image">
                    <h1>SmartAtt</h1>
                </div>
                <div className="side">
                    <Link to='/' className="info" >Dashboard</Link>
                    <Link to='/Messeges' className="info" >Messages</Link>
                    <Link to='/Individual' className="info" >Individual</Link>
                    <Link to='/Attendance' className="info" >Attendance</Link>
                    <Link to='/Settings' className="info" >Settings</Link>
                </div>
            </div>
        </div>
     );
}
 
export default SideBar;