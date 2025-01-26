import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainDashboard from "./studentdashboard";
import Payments from "./Payments";
import Complaints from "./complaints";
function App4() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="/Complaints" element={<Complaints />} />
      </Routes>
    </Router>
  );
}

export default App4;
