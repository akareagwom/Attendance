import React from "react";
import {Bar} from 'react-chartjs-2'
import {Pie} from 'react-chartjs-2'
import './barchart.css'
import {Chart as chartJS} from 'chart.js/auto'
const BarChart = ({chartData}) => {
    return ( 
        <div className="charts">
         <div className='chart' >
           <Bar data={chartData} />
        </div>
        <div className="mean">
        <div className='pie'>
          <Pie data={chartData} />
         </div>
        </div>

        </div>
     );
}
 
export default BarChart;

// {
//    labels: [Monday,Tuesday,Wednesday,Thursday,Friday],
//    datasets: 
//        {
//          data:[10,30,50,40,100]
// }
// }