import style from './success.module.css'
import success from '../../assets/images/logo.jpeg'
import { Link } from 'react-router-dom'

const LoginSuccess = () => {

    const arrival = () => {
        alert("You hava 06:00 hours left to work today")
    }
    const breakTime = () => {
        alert("You hava 01:00 hour left for break")
    }
    return (
        <div className={style.container}>
        <div className={style.sign}>
            <img src={success} alt="" height="250px" />
        </div>
            <div>
                <h1> Logged In!</h1>
                   <h3>You have successfully logged in </h3>

                       <div className={style.david}>
                        <button type="home" id="btn">
                            <Link className={style.tag} to="/">HOME</Link>
                        </button>
                        <button onClick={arrival} type="home" id="btn">
                            <Link className={style.tag} to="/">ARRIVAL</Link>
                        </button>
                        <button onClick={breakTime} type="home" id="btn">
                            <Link className={style.tag} to="/">BREAK TIME</Link>
                        </button>
                        <button  type="home" id="btn">
                            <Link className={style.tag} to="/">DEPARTURE</Link>
                        </button>
                      </div> 
                </div>   
    </div>
    )

} 



export default LoginSuccess;