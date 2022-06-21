
import SideBar from "../../sidebar/SideBar";
// import TopBar from "../../topbar/TopBar";
import "./Individual.css"
import { Link } from "react-router-dom";


const Individuals = () => {
    return ( 
        <div className="individual">
           <SideBar />
            {/* <TopBar /> */}
               
            <div className="indivi">
                <div>
                    <input type="text" placeholder="Search" />
                </div>
                <h1>Individuals</h1>
                
                <div className="pam">
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
                </div>
                <table className="divide">
                    <tr>
                      <th>Name</th>
                      <th>ID</th>
                      <th>School</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Email</th>
                    </tr>
                    <tr>
                        <td> <img src="./avatar.png" alt="" srcset=""/> Weng Du</td>
                        <td>2345623569</td>
                        <td>FUT</td>
                        <td>26</td>
                        <td>Male</td>
                        <td>wengdu@gmail.com</td>
                      </tr>
                      <tr>
                        <td> <img src="./avatar.png" alt="" srcset="" /> Chun Li</td>
                        <td>1234567891</td>
                        <td>UJ</td>
                        <td>20</td>
                        <td>Female</td>
                        <td>chunli@gmail.com</td>
                      </tr>
                      <tr>
                        <td> <img src="./avatar.png" alt="" srcset="" /> Grace Bin</td>
                        <td>2347891452</td>
                        <td>Veritas University</td>
                        <td>17</td>
                        <td>Female</td>
                        <td>bin20@gmail.com</td>
                      </tr>
                      <tr>
                        <td> <img src="./avatar.png" alt="" srcset="" /> Chun Li</td>
                        <td>1234567891</td>
                        <td>UJ</td>
                        <td>20</td>
                        <td>Female</td>
                        <td>chunli@gmail.com</td>
                      </tr>
                      <tr>
                        <td><img src="./avatar.png" alt="" srcset="" />  Sam Smith</td>
                        <td>8888812345</td>
                        <td>Base University</td>
                        <td>22</td>
                        <td>Male</td>
                        <td>smith22@gmail.com</td>
                      </tr>
                      <tr>
                        <td> <img src="./avatar.png" alt="" srcset="" />  Megan B</td>
                        <td>4546474689</td>
                        <td>UJ</td>
                        <td>22</td>
                        <td>Female</td>
                        <td>meganb@gmail.com</td>
                      </tr>
                        <tr>
                          <td> <img src="./avatar.png" alt="" srcset="" /> Grace Bin</td>
                          <td>2347891452</td>
                          <td>Veritas University</td>
                          <td>17</td>
                          <td>Female</td>
                          <td>bin20@gmail.com</td>
                        </tr>
                        <tr>
                          <td> <img src="./avatar.png" alt="" srcset="" /> Chun Li</td>
                          <td>1234567891</td>
                          <td>UJ</td>
                          <td>20</td>
                          <td>Female</td>
                          <td>chunli@gmail.com</td>
                        </tr>
                        <tr>
                          <td> <img src="./avatar.png" alt="" srcset="" /> Chun Li</td>
                          <td>1234567891</td>
                          <td>UJ</td>
                          <td>20</td>
                          <td>Female</td>
                          <td>chunli@gmail.com</td>
                        </tr>
                        <tr>
                          <td> <img src="./avatar.png" alt="" srcset="" /> Chun Li</td>
                          <td>1234567891</td>
                          <td>UJ</td>
                          <td>20</td>
                          <td>Female</td>
                          <td>chunli@gmail.com</td>
                        </tr>
                        <tr>
                          <td> <img src="./avatar.png" alt="" srcset="" /> Chun Li</td>
                          <td>1234567891</td>
                          <td>UJ</td>
                          <td>20</td>
                          <td>Female</td>
                          <td>chunli@gmail.com</td>
                        </tr>
                        

                </table>
            
            </div>

        </div>
     );
}
 
export default Individuals;