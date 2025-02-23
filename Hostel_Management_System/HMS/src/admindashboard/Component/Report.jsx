import React, { useRef } from "react";
import "../Style/Report.css";
import Heading from "./Heading";
const Report = () => {
  const reportRef = useRef();

  // Function to handle printing the report
  const handlePrint = () => {
    const printContent = reportRef.current;
    const printWindow = window.open("", "", "width=800,height=600");
    printWindow.document.write("<html><head><title>Print Report</title></head><body>");
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <>
    <div>
      <Heading
        title="Monthly Hostel Report "
        subtitle="This is a report"
      />
    </div>
    <div className="report-page">
      <div className="print-button-wrapper">
        <button className="print-button" onClick={handlePrint}>
          Print Report
        </button>
      </div>

      <div ref={reportRef}>
        {/* Financial Summary */}
        <div className="card">
          <div className="card-header">
            <h3>Financial Summary</h3>
            <button className="action-button"><a href="Payment.jsx">Go to Payments</a></button>
          </div>
          <div className="card-content">
            <p>
              Total Payment Received from Mess: <span className="highlight">₹50,000</span>
            </p>
            <p>
              Total Payment Received from Maintenance: <span className="highlight">₹20,000</span>
            </p>
          </div>
        </div>

        {/* Complaints Summary */}
        <div className="card">
          <div className="card-header">
            <h3>Complaints Summary</h3>
            <button className="action-button">View Complaints</button>
          </div>
          <div className="card-content">
            <p>
              Electricity Issues: <span className="highlight">15</span>
            </p>
            <p>
              Food Quality Issues: <span className="highlight">8</span>
            </p>
            <p>
              Wifi Issues: <span className="highlight">10</span>
            </p>
            <p>
              Room Cleaning Issues: <span className="highlight">5</span>
            </p>
          </div>
        </div>

        {/* Staff and Residents */}
        <div className="card">
          <div className="card-header">
            <h3>Staff and Residents</h3>
            <button className="action-button">View Dashboard</button>
          </div>
          <div className="card-content">
            <p>
              Total Students in Hostel: <span className="highlight">250</span>
            </p>
            <p>
              Total Staff: <span className="highlight">30</span>
            </p>
            <p>
              Total Wardens: <span className="highlight">5</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Report;
