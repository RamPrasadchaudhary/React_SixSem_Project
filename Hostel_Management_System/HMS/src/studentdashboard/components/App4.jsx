import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainDashboard from "./maindashboard";
import Complaints from "./complaints";
import Payments from "./Payments";
import "../styles/App4.css";

function StudentApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/Payments" element={<Payments />} />
      </Routes>
    </Router>
  );
}

export default StudentApp;
