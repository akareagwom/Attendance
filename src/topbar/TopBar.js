import { Link } from "react-router-dom";
import "./topbar.css"

const TopBar = () => {
    return (  
        <div>
            <div className="topbar">
                <div className="isaac">
                    {/* <input type="text" placeholder="Search for students..." /> */}
                </div>
                <h1>Dashboard</h1>
                <div className="inform">
                    
                    <div className="static">
                        <p>Registered Students</p>
                        <h3>45</h3>
                    </div>
                    
                    {/* <div className="static">
                        <p>Pending Request</p>
                        <h3>35</h3>
                    </div> */}
                                       
                    <div className="static">
                        <p>SignIn Time</p>
                        <h3>10:00am</h3>
                    </div>
                    
                    <div className="static">
                        <p>SignOut Time</p>
                        <h3>4:00pm</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default TopBar;