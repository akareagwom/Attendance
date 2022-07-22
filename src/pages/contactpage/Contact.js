import { Link } from "react-router-dom";
import './contact.css';

const Contact = () => {
    return ( 
        <div className="div001">
            <div className="image">
                <div className="logo"></div>
            </div>
            <div className="div002">
                <div className="div003">
                    <h1>Contact Admin</h1>
                    <form action="" className="form">
                        <div className="pee">
                          <label for="email" className="lbl">Email</label><br />
                        </div>
                          <input type="email" className="ipn" /><br />
                       
                        <div className="dee">
                          <label for="" className="lbl">Subject!</label><br />
                          <input type=""className="ipn" /><br />
                        </div>
                        <div className="mee">
                          <label for="" className="lbl">Description</label><br />
                          <textarea name="" id="" cols="60" rows="8"></textarea>
                        </div>
                    </form>
                </div>

                <div className="div004"> 
                    <Link className="link" to="/LoginPage">Submit</Link>
                    <Link className="link" to="/">Cancel</Link>
                </div>
                <div>
                    
                </div>
            </div>
       </div>
     );
}
 
export default Contact;