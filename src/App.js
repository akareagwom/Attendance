import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Otp from "./pages/OTP/Otp";
import SignUp from "./pages/Signup/SignUp";
import LoginSuccess from "./pages/Success/Success";
import Verified from "./pages/Verification/Verification";
import Contact from "./pages/contactpage/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/verified" element={<Verified />} />
          <Route path="/login_success" element={<LoginSuccess />} />
          <Route path="/Contact"element={<Contact />} />

          
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
