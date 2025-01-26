// import App1 from './admindashboard/Component/App1'
//import App3 from './staffdashboard/component/App3'
import App4 from "./studentdashboard/components/App4";
//import ComplaintsList from './staffdashboard/component/complaintstaff'
//import StaffDashboard from './staffdashboard/component/dashboard1'
import Complaints from "./studentdashboard/components/complaints";
// import App from './FrontEndComponent/Component/App2'

function App() {
  return (
    <div>
      <App4 />
      <Complaints />
      {/* <MainDashboard /> */}
    </div>
  );
}

export default App;
