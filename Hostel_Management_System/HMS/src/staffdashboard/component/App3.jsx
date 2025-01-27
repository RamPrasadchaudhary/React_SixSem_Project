import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Complaintstaff from "./complaintstaff";
import Dashboard from "./dashboard1";
function App3() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/complaints-details" element={<Complaintstaff />} />
      </Routes>
    </Router>
  );
}

export default App3;
