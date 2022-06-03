import { Link } from "react-router-dom"
import './otp.css'

const Otp = () => {
    return (
        <div className="container">

        <div className="side-image">
            <div className="logo">
                <p>Attendance taken by location</p>
            </div>
        
        </div>
        <div className="form-container">
            <div className="Login">
                <div className="form">
                    <h1>Enter OTP</h1>
                    <h3>Check your phone or email for the OTP</h3>
                    
                        <form>
                               <div className="name label">
                                   <div>
                                    <label className="input-label">Enter your One Time Password</label>
                                       <input type="text" name="OTP" />
                                   </div>
                  
                             </div>  
                             <div>
                                <button type="summit" id="btn">
                                    <Link className="tag" to="/verified">Summit</Link>
                                    </button>
                              </div> 
                         
                        </form> 
                </div>
            </div>
        </div>
        
        
    </div>
    )
}

export default Otp