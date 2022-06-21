import { useState } from "react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './calender.css'

const Calender = () => {
    const[date, setDate]=useState(new Date());
    const onChange = date =>{
        setDate(date)
    }
    return ( 
        <div>
            {/* <Calendar onChange={onChange} value={date} className="react-calender"/> */}
        </div>
     );
}
 
export default Calender;