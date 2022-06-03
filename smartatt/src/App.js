import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing-Page/LandigPage";
import Login from "./pages/Login-Page/LoginPage";
import Otp from "./pages/OTP/Otp";
import SignUp from "./pages/Signup/SignUp";
import LoginSuccess from "./pages/Success/Success";
import Verified from "./pages/Verification/Verification";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/landingpage" element={<Landing-Page />} />
          <Route path="/loginpage" element={<Login-page />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/verified" element={<Verified />} />
          <Route path="/login_success" element={<LoginSuccess />} />

          
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
