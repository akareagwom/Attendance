
import SideBar from "../../sidebar/SideBar";
// import TopFront from "../topfront/TopFront";
// import TopBar from "../../topbar/TopBar";
import "./Individual.css"
// import { Link } from "react-router-dom";
import Bin from "../../img/Bin.png"
import { useState, useHistory, useEffect } from "react";
// import DataI from "../../DataI";
// import { Button } from "@chakra-ui/react"
import { useDispatch } from "react-redux";
import { getAllStudents } from "../../store/redux/student/action";
import { getStudents } from "../../store/redux/student/index";


const Individuals = () => {
  const dispatch = useDispatch()
  const [search , setSearch] = useState('')
  useEffect(()=> {
    // dispatch(getAllStudents())
    dispatch(getStudents())
  },[])
    return ( 
        <div className="individual">
           <SideBar />
            {/* <TopFront /> */}
            {/* <div className="eddie">
              <TopBar />
            </div> */}
            <div className="indivi">
                <div className="nice">
                    <input type=
                    "search" placeholder="Search  for student..." 
                    value={search}
                    onChange= {(e) => setSearch(e.target.value)}/>
                    <h1>Individuals</h1>
                </div>
                
                
                {/* <div className="pam">
                   <div className="start">
                      <Link to=""> <p className="cancel">Interns</p></Link>
                      <h2>62</h2>
                   </div>
                   <div className="start">
                       <Link to="/Private"><p className="cancel">Private</p> </Link>
                       <h2>62</h2>
                   </div>
                   <div className="start">
                       <Link to="/Mentor"><p className="cancel">Mentors</p> </Link>
                       <h2>62</h2>
                   </div>
                </div> */}
                <div className="elo">
                <table className="divide">
                    <tr>
                      <th>Name</th>
                      <th>ID</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Delete</th>
                      {/* <th>Email</th> */}
                    </tr>
                    <tr>
                        <td> <img src="./avatar.png" alt="" srcset=""/> Weng Du</td>
                        <td>2345623569</td>
                        <td>24th June</td>
                        <td>9:15am</td>
                        <td><button><img src={Bin} alt= "" width="20px"/></button></td>
                        {/* <td>wengdu@gmail.com</td> */}
                      </tr>
                      <tr>
                        <td> <img src="./avatar.png" alt="" srcset="" /> Chun Li</td>
                        <td>1234567891</td>
                        <td>24th June</td>
                        <td>9:20am</td>
                        <td><button><img src={Bin} alt= "" width="20px" /></button></td>
                        {/* <td>chunli@gmail.com</td> */}
                      </tr>
                      <tr>
                        <td> <img src="./avatar.png" alt="" srcset="" /> Grace Bin</td>
                        <td>2347891452</td>
                        <td>24th June</td>
                        <td>9:45am</td>
                        <td><button><img src={Bin} alt= "" width="20px" /></button></td>
                        {/* <td>bin20@gmail.com</td> */}
                      </tr>
                      <tr>
                        <td> <img src="./avatar.png" alt="" srcset="" /> Chun Li</td>
                        <td>1234567891</td>
                        <td>24th June</td>
                        <td>9:30am</td>
                        <td><button><img src={Bin} alt= "" width="20px" /></button></td>
                        {/* <td>chunli@gmail.com</td> */}
                      </tr>
                      <tr>
                        <td><img src="./avatar.png" alt="" srcset="" />  Sam Smith</td>
                        <td>8888812345</td>
                        <td>24th June</td>
                        <td>9:00am</td>
                        <td><button><img src={Bin} alt= "" width="20px" /></button></td>
                        {/* <td>smith22@gmail.com</td> */}
                      </tr>
                      <tr>
                        <td> <img src="./avatar.png" alt="" srcset="" />  Megan B</td>
                        <td>4546474689</td>
                        <td>24th June</td>
                        <td>9:00am</td>
                        <td><button><img src={Bin} alt= "" width="20px" /></button></td>
                        {/* <td>meganb@gmail.com</td> */}
                      </tr>
                        <tr>
                          <td> <img src="./avatar.png" alt="" srcset="" /> Grace Bin</td>
                          <td>2347891452</td>
                          <td>24th June</td>
                          <td>9:30am</td>
                          <td><button><img src={Bin} alt= "" width="20px" /></button></td>
                          {/* <td>bin20@gmail.com</td> */}
                        </tr>
                        <tr>
                          <td> <img src="./avatar.png" alt="" srcset="" /> Chun Li</td>
                          <td>1234567891</td>
                          <td>24th June</td>
                          <td>9:00am</td>
                          <td><button><img src={Bin} alt= "" width="20px" /></button></td>
                          {/* <td>chunli@gmail.com</td> */}
                        </tr>
                        <tr>
                          <td> <img src="./avatar.png" alt="" srcset="" /> Chun Li</td>
                          <td>1234567891</td>
                          <td>24th June</td>
                          <td>9:00am</td>
                          <td><button><img src={Bin} alt= "" width="20px" /></button></td>
                          {/* <td>chunli@gmail.com</td> */}
                        </tr>
                        <tr>
                          <td> <img src="./avatar.png" alt="" srcset="" /> Chun Li</td>
                          <td>1234567891</td>
                          <td>24th June</td>
                          <td>9:00am</td>
                          <td><button><img src={Bin} alt= "" width="20px" /></button></td>
                          {/* <td>chunli@gmail.com</td> */}
                        </tr>
                        <tr>
                          <td> <img src="./avatar.png" alt="" srcset="" /> Chun Li</td>
                          <td>1234567891</td>
                          <td>24th June</td>
                          <td>20</td>
                          <td><button><img src={Bin} alt= "" width="20px" /></button></td>
                          {/* <td>chunli@gmail.com</td> */}
                        </tr>
                        {/* fetch('http://localhost:3200')
                        .then(response => response.json())
                        .then(data => console.log(data)); */}

                </table>
                </div>
               
            
            </div>
            {/* <DataI/> */}
          </div>

        
     );
}
 
export default Individuals;