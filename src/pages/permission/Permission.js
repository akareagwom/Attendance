import SideBar from "../../sidebar/SideBar";
import { Link } from "react-router-dom";


const Permission = () => {
    return ( 
        <div>
            <SideBar />
            <div className="attend">
              <div>
            
              <input type="text" placeholder="Search for students, mentors..." />
             </div>
            <div className="attendance">
                    <div className="static">
                        <Link to="/Messeges"><p>Complaints</p></Link>
                    </div>
                    <div className="static">
                       <Link to="/Permission"> <p>Permission</p></Link>
                    </div>
                    <div className="static">
                       <Link to="/Request"><p>Requests</p></Link>
                    </div>
                </div>
             </div>
             <div>
                <table className="messege">
                    <tr>
                        <td> <img src="avatar.png" alt="" srcset="" /> </td>
                        <td><h4>Pam</h4>
                        <p>I will be absent today</p></td>
                        <td><p>Today,9:35</p></td>
                    </tr>    
                    <tr>
                        <td> <img src="./avatar.png" alt="" srcset="" /> </td>
                        <td><h4>Daniel</h4>
                        <p>Welldone</p></td>
                        <td><p>Today,9:38</p></td>
                        
                    </tr>    
                    <tr>
                        <td> <img src="./avatar.png" alt="" srcset="" /> </td>
                        <td><h4>Nanbam</h4>
                            <p>hahahaha</p></td>
                            <td><p>Today,9:32</p></td>
                        
                    </tr>    
                    <tr>
                        <td> <img src="./avatar.png" alt="" srcset="" /> </td>
                        <td><h4>Nanbam</h4>
                            <p>hahahaha</p></td>
                            <td><p>Today,9:32</p></td>
                       
                    </tr>    
                    <tr>
                        <td> <img src="./avatar.png" alt="" srcset="" /> </td>
                        <td><h4>Nanbam</h4>
                        <p>hahahaha</p></td>
                        <td><p>Today,9:30</p></td>
                    </tr>    
                    <tr>
                        <td> <img src="./avatar.png" alt="" srcset="" /> </td>
                        <td><h4>Elohim</h4>
                        <p>Welldone</p></td>
                        <td><p>Today,9:36</p></td>
                        
                    </tr>    
                    <tr>
                        <td> <img src="./avatar.png" alt="" srcset="" /> </td>
                        <td><h4>Nanbam</h4>
                            <p>hahahaha</p></td>
                            <td><p>Today,9:39</p></td>
                        
                    </tr>    
                    <tr>
                        <td> <img src="./avatar.png" alt="" srcset="" /> </td>
                        <td><h4>Nanbam</h4>
                            <p>hahahaha</p></td>
                            <td><p>Today,9:37</p></td>
                       
                    </tr>    
                    
                </table>
            </div>    
        </div>
     );
}
 
export default Permission;