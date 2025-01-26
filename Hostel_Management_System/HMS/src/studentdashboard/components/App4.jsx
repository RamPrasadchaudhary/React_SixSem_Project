import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainDashboard from "./studentdashboard"; //for student main view
import Payments from "./Payments"; //for payments
import Complaints from "./complaints"; //for complaints
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
