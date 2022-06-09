import { Link } from 'react-router-dom'
import verified from '../../assets/images/logo.jpeg'
import style from './verification.module.css'

const Verified = () => {
    return (
        <div>
             <div className={style.container}>
            <div className={style.sign}>
                <img src={verified}  alt='' />
            </div>
                <div>
                    <h1>VERIFIED!</h1>
                       <h3>You have sucessfully verified your account</h3>

                       <div>
                        <button type="login" id="btn">
                            <Link className="tag" to="/LoginPage ">Login</Link>
                            
                            </button>
                      </div> 
                    </div>   
            </div> 
        </div>
    )
}

export default Verified