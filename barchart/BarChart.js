import React from "react";
import { Bar} from 'react-chartjs-2'
import './barchart.css'
import {Chart as chartJS} from 'chart.js/auto'
const BarChart = ({chartData}) => {
    return ( 
        <div className='chart' >
           <Bar data={chartData} />
        </div>
     );
}
 
export default BarChart;