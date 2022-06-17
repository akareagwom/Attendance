import SideBar from "../../sidebar/SideBar";
import { Link } from "react-router-dom";

const Men = () => {
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
                    <Link to="/Attendance">
                        <p>Interns</p></Link>
                        <h2>62</h2>
                    </div>
                    
                    
                    <div className="static">
                    <Link to="/Vate"> <p>Private Students</p> </Link>
                        <h2>62</h2>
                    </div>
                   
                   
                    <div className="static">
                    <Link to="/Men"><p>Mentors</p></Link>
                        <h2>62</h2>
                    </div>
                    <div className="list">
                        <ul>
                            <li>Elohim</li>
                            <li>Elohim</li>
                            <li>Elohim</li>
                            <li>Elohim</li>
                            <li>Elohim</li>
                            <li>Elohim</li>
                            <li>Elohim</li>
                            <li>Elohim</li>
                        </ul>
                    </div>
                    


                </div>
            </div>
        </div>
     );
}
 
export default Men;