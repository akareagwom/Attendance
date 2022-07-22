import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
    return (
        <div className="container">
                <div className="side-image">
                    <div className="logo">

                    </div>
                
                </div>

                    <div className="form-container">
                        <div className="Login">
                            <div className="moop">
                                <h1>Login</h1>
                                {/* <h3>to sign your attendance with us</h3> */}
                                    <div className='weep' >
                                        <div className="name label">
                                            <div>
                                                <label className="putt-label">Email or phone number</label><br/>
                                                <input type="text" name="mail/phone" className='put' />
                                            </div>
                                        </div>
                                
                                            <div className="pass label">
                                                <div className="papa">
                                                <label className="putt-label">Password</label><br/>
                                                    <input type="text" name="password" className='put' />
                                                </div>
                                                
                                            </div>
                                    </div>  
                                        <div>
                                            <Link to="/Dashboard">
                                                <button type="login" className='us'>Login</button>

                                            </Link>
                                        </div>
                                        {/* <div className="account">
                                            <p className="login">Don't have an account?
                                                <Link to="/signup"> <span>Sign up</span> </Link>
                                            </p>
                                        </div> */}
                                    
                            </div>
                            </div>
                        </div>
        </div>
    );
}

export default Login;