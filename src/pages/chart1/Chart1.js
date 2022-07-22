import { Bar} from 'react-chartjs-2'
import {Chart as chartJS} from 'chart.js/auto'

const Chart1 = ({chartData}) => {
    return ( 
        <div className='chart1' >
           <Bar data={chartData} />
        </div>
     );
}
export default Chart1;