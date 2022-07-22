import style from './success.module.css'
import success from '../../assets/images/logo.jpeg'
import { Link } from 'react-router-dom'

const LoginSuccess = () => {
    return (
        <div className={style.container}>
        <div className={style.sign}>
            <img src={success} alt="" height="250px" />
        </div>
            <div>
                <h1> Logged In!</h1>
                   <h3>Congratulations! You have successfully logged in </h3>

                       <div>
                        <button type="home" id="btn">
                            <Link className={style.tag} to="/">Back to home</Link>
                            </button>
                      </div> 
                </div>   
    </div>
    )
} 

export default LoginSuccess;