import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainDashboard from "./maindashboard"; // ensure this path is correct

function StudentApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        {/* Remove any additional routes for now to simplify */}
      </Routes>
    </Router>
  );
}

export default StudentApp;
