import { Calendar } from "react-calendar";
import SideBar from "../../sidebar/SideBar";
import TopBar from "../../topbar/TopBar";
import 'react-calendar/dist/Calendar.css';
import {useState} from "react"
import BarChart from "../barchart/BarChart";
import {UserData} from '../data/Data';
// import { PieData } from "../piechart/PieChart";
import './Dashboard.css'
// import { PieData } from "../data2/data2";
// import PieChart from "../piechart/PieChart";
// import { Pie} from 'react-chartjs-2';


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
//     const [] = useState({
        
//    labels: PieData.map((data)=>data.month),
//    datasets: 
//        {
//         label: PieData.map((data)=>data.userGain),
//          data:[10,30,50,40,100],
       
// }

        
//     });
    // const data = {
    //     labels: [
    //       'Red',
    //       'Blue',
    //       'Yellow'
    //     ],
    //     datasets: [{
    //       label: 'My First Dataset',
    //       data: [300, 50, 100],
    //       backgroundColor: [
    //         'rgb(255, 99, 132)',
    //         'rgb(54, 162, 235)',
    //         'rgb(255, 205, 86)'
    //       ],
    //       hoverOffset: 4
    //     }]
    //   };



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
                <div className="mee">
                    <table className="leah">
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>School</th>
                        <th>Date</th>
                        <th>Time</th>
                        {/* <th>Email</th> */}
                        </tr>
                        <tr>
                            <td> <img src="./avatar.png" alt="" srcset=""/> Weng Du</td>
                            <td>2345623569</td>
                            <td>FUT</td>
                            <td>24th June</td>
                            <td>8:00am</td>
                            {/* <td>wengdu@gmail.com</td> */}
                        </tr>
                        <tr>
                            <td> <img src="./avatar.png" alt="" srcset="" /> Chun Li</td>
                            <td>1234567891</td>
                            <td>UJ</td>
                            <td>24th June</td>
                            <td>9:30am</td>
                            {/* <td>chunli@gmail.com</td> */}
                        </tr>
                    </table>
                </div>
                <div className="cctv">
                <Calendar value={value} onChange={onChange} className='dollar' />
                </div>
                {/* <PieChart/> */}

            </div>
        </div>
     );
}
 
export default Dashboard;