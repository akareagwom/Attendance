import { Link } from "react-router-dom"
import './landing.css'

const LandingPage = ()=> {
    return (
        <div className="content">
        <nav className="nav1">
            <h2>Attendance taken by location</h2>
            <Link to="">Contact Admin</Link>
        </nav>
            <div className="contentd1">
                <div className="contentd2">
                    <h1>Welcome</h1>
                </div>
                    <div className="tag1">
                        <button className="getstarted" id="btn">
                            <Link className="tag" to="/login">Get Started</Link>
                            </button>
                    </div>
                
            </div>
    </div>
    )
}

export default LandingPage;