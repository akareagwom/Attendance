import SideBar from "../../sidebar/SideBar";
import "./Attendance.css"
import { Link } from "react-router-dom";
import BarChart from "../barchart/BarChart";


const Attendance = () => {

    return ( 
        <div>
              <SideBar />
            <div className="attend">
                <div>
            
                    <input type="text" placeholder="Search for students, mentors..." />
                </div>
                <h1>Attendance</h1>
                <div className="attendance">
                    <div className="static">
                    <Link to="">
                        <p>Interns</p></Link>
                        <h2>62</h2>
                    </div>
                    
                    
                    <div className="static">
                    <Link to=""> <p>Private Students</p> </Link>
                        <h2>62</h2>
                    </div>
                   
                   
                    <div className="static">
                    <Link to="/Men"><p>Mentors</p></Link>
                        <h2>62</h2>
                    </div>
                    <div className="list">
                        <ul>
                            <li>Nanbam</li>
                            <li>Nanbam</li>
                            <li>Nanbam</li>
                            <li>Nanbam</li>
                            <li>Nanbam</li>
                            <li>Nanbam</li>
                            <li>Nanbam</li>
                            <li>Nanbam</li>
                        </ul>
                    </div>
                    
                    


                </div>
            </div>
        </div>
     );
}
 
export default Attendance;