import { Calendar } from "react-calendar";
import SideBar from "../../sidebar/SideBar";
import TopBar from "../../topbar/TopBar";
import 'react-calendar/dist/Calendar.css';
import {useState} from "react"
import BarChart from "../barchart/BarChart";
import {UserData} from '../data/Data';
import './Dashboard.css'


const Dashboard = () => {
    const [value, onChange] = useState(new Date());
    const [newData,setNewData] = useState({
        labels: UserData.map((data)=>data.month),
        datasets: [
            {
                label: "Overall Attendance View",
                data: UserData.map((data)=> data.userGain),
                barPercentage: 20,
                backgroundColor: ["aqua","blue","aqua","grey","pink"],
                barThickness: 50,
                maxBarThickness: 30,
                minBarLength: 2,
                borderRadius: 4.5,
               
            },
        ],
    });


    return ( 
        <div className="lead">
            <SideBar />
            <div className="hydrogen">
                <div className="see">
                <TopBar />
                <div className="zinc">
                <BarChart chartData={newData}/>
                </div>
                </div >
                <div className="cctv">
                <Calendar value={value} onChange={onChange} />
                </div>
                <div className="mee">
                    <table className="leah">
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>School</th>
                        {/* <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th> */}
                        </tr>
                        <tr>
                            <td> <img src="./avatar.png" alt="" srcset=""/> Weng Du</td>
                            <td>2345623569</td>
                            <td>FUT</td>
                            {/* <td>26</td>
                            <td>Male</td>
                            <td>wengdu@gmail.com</td> */}
                        </tr>
                        <tr>
                            <td> <img src="./avatar.png" alt="" srcset="" /> Chun Li</td>
                            <td>1234567891</td>
                            <td>UJ</td>
                            {/* <td>20</td>
                            <td>Female</td>
                            <td>chunli@gmail.com</td> */}
                        </tr>
                    </table>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;