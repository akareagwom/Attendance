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
                            <div className="form">
                                <h1>Login</h1>
                                <h3>to sign your attendance with us</h3>
                                    <div>
                                        <div className="name label">
                                            <div>
                                                <label className="input-label">Email or phone number</label>
                                                <input type="text" name="mail/phone" />
                                            </div>
                                        </div>
                                
                                            <div className="pass label">
                                                <div>
                                                <label className="input-label">Password</label>
                                                    <input type="text" name="password" />
                                                </div>
                                                
                                            </div>
                            </div>  
                                        <div>
                                            <Link to="/login_success">
                                                <button type="login">Login</button>

                                            </Link>
                                        </div>
                                        <div className="account">
                                            <p className="login">Don't have an account?
                                                <Link to="/signup"> <span>Sign up</span> </Link>
                                            </p>
                                        </div>
                                    
                            </div>
                            </div>
                        </div>
        </div>
    );
}

export default Login;