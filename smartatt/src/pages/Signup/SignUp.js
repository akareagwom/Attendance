import { Link } from "react-router-dom";
import './signup.css';


const SignUp = () => {
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
            <h2 id="change">Create account</h2>
            <h3>to sign your attendance with us</h3>

            <form>
              <div className="name label">
                <div>
                  <label className="input-label">First name</label>
                  <input className="text1" type="text" name="Firstname" />
                </div>
                <div>
                  <label className="input-label">Last name</label>
                  <input type="text" name="Lastname" />
                </div>
              </div>
              <div className="form2 label">
                <div>
                  <label className="input-label">Email or Phone Number</label>
                  <input type="text" name="email/phone number" />
                </div>
                <div>
                  <label className="input-label">
                    Date of Birth <span className="date">(mm/dd/yy)</span>
                  </label>
                  <input type="text" name="lastname" />
                </div>
              </div>
              <div className="pass label">
                <div>
                  <label className="input-label">Password</label>
                  <input type="text" name="password" />
                </div>

                <div>
                  <label className="input-label">Confirm Password</label>
                  <input
                    type="text"
                    name="confrim password"
                    className="form-input"
                  />
                </div>
              </div>
              <div className=" label">
                <div>
                  <label className="input-label">Attach File</label>
                  <input
                    type="text"
                    name="confrim password"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="check">
                <div className="box1">
                  <input type="checkbox" name="box1" id="box 2" />
                  <label for="box1">Remember me</label>
                </div>
                <div>
                  <input type="checkbox" name="check1" id="check2" />
                  <label for="check1">
                    I agree to all <span>terms</span> and
                    <span>Privacy Policy</span>
                  </label>
                </div>
              </div>

              <div>
                <button type="create account" id="btn">
                  <Link className="tag" to="/otp">
                    Create Account
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
