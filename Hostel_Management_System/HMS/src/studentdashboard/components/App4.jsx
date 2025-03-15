import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainDashboard from "./MainDashboard"; // Corrected import path
import Payments from "./Payments";
import Complaints from "./Complaints";
import EditProfile from "./EditProfile";
import Home from "../../FrontEndComponent/Component/Home";
import "../styles/App4.css";

function StudentApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/home" element={<Home />} /> {/* Add Home route */}
      </Routes>
    </Router>
  );
}

export default StudentApp;
