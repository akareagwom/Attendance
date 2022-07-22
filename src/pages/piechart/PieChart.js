import { Pie} from 'react-chartjs-2'
import React from "react";
// import {ChartJs,Tooltip,Title,ArcElement, Legend} from 'chart.js'
// ChartJs.register(
//     Tooltip,Title,ArcElement, Legend
// );

 const PieChart = ({chartData}) => {
    return ( 

        <div>
         <Pie data={chartData}  />
        </div>
     );
}
export default PieChart;