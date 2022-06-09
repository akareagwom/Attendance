import { Link } from "react-router-dom"
import './landing.css'

const LandingPage = ()=> {
    return (
    <div className="content">
         <nav className="nav1">
            <div className="logo"></div>
            <Link to="contact">Contact Admin</Link>
         </nav>
            <div className="contentd1">
                <div className="contentd2">
                    <h1>Welcome</h1>
                    <p id="p1">Attendace taken by location</p>
                </div>
                    <div className="tag1">
                            <Link className="getstarted" to="/loginpage">Get Started</Link>
                    </div>
                
            </div>
    </div>
    )
}

export default LandingPage;