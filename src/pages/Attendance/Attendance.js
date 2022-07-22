import SideBar from "../../sidebar/SideBar";
import "./Attendance.css"
// import { Link } from "react-router-dom";
import {useState} from "react"
import chart1 from "../chart1/Chart1";
import {UserData} from '../data1/Data1';
import Chart1 from "../chart1/Chart1";
import { Link } from "react-router-dom";



const Attendance = () => {

    const [newData,setNewData] = useState({
        labels: UserData.map((data)=>data.days),
        datasets: [
            {
                label: "Overall Attendance View",
                data: UserData.map((data)=> data.userGained),
                barPercentage: 20,
                backgroundColor: ["aqua","blue","black","grey","pink"],
                barThickness: 50,
                maxBarThickness: 30,
                minBarLength: 2,
                borderRadius: 4.5,
               
            },
        ],
    });
    return ( 
        <div>
              <SideBar />
            <div className="attend">
                <div className="pen">
            
                    {/* <input type="text" placeholder="Search for students..." /> */}
                    <h1>Attendance</h1>
                </div>
                
                <div className="attendance">
                    {/* <div className="static">
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
                    </div> */}
                    <div className="list">
                        <ul>
                            <li><Link to="">Nanbam  Akita</Link></li>
                            <li><Link to="">Elohim  Bapman</Link></li>
                            <li><Link to="">Nkemdilim</Link> </li>
                            <li><Link to="">Akare  Agwom</Link></li>
                            <li><Link to="">Pam  Daniel</Link></li>
                            <li><Link to="">Filibus</Link></li>
                            <li><Link to="">Abdul</Link></li>
                            <li><Link to="">Nabila</Link></li>
                            <li><Link to="">Dami</Link></li>
                        </ul>
                    </div>
                    <div className="chair">
                        <Chart1 chartData={newData}/>
                    </div>
                    
                    


                </div>
            </div>
        </div>
     );
}
 
export default Attendance;