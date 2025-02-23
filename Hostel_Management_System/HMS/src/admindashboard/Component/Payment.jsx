import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Payment.css';
import Heading from "./Heading";

const Payment = () => {
  // Updated mock data based on the table structure
  const [payments] = React.useState([
    { id: 1, name: 'John Doe', dueAmount: 15000, paidAmount: 15000, remainingAmount: 0, lastPaymentDate: '2024-01-05', status: 'Paid' },
    { id: 2, name: 'Jane Smith', dueAmount: 15000, paidAmount: 10000, remainingAmount: 5000, lastPaymentDate: '2024-02-10', status: 'Pending' },
    { id: 3, name: 'Robert Brown', dueAmount: 15000, paidAmount: 5000, remainingAmount: 10000, lastPaymentDate: '2024-03-15', status: 'Pending' },
  ]);

  // Calculate total balance due
  const totalBalance = payments.reduce((sum, payment) => sum + payment.remainingAmount, 0);

  return (
    <>
      <Heading
        title="Manage Payment"
        subtitle="View and manage your payments"
      />

      <div className="main-content">
        <section id="payments">
          <h2>Monthly Dues</h2>
          <table>
            <thead>
              <tr>
                <th>S_ID</th>
                <th>Name</th>
                <th>Due Amount</th>
                <th>Paid Amount</th>
                <th>Remaining Amount</th>
                <th>Last P. Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td>{payment.id}</td>
                  <td>{payment.name}</td>
                  <td>₹{payment.dueAmount}</td>
                  <td>₹{payment.paidAmount}</td>
                  <td>₹{payment.remainingAmount}</td>
                  <td>{payment.lastPaymentDate}</td>
                  <td className="actions">
                    {payment.status === 'Paid' ? (
                      <a href="#" className="download-receipt">Download Receipt</a>
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="total-balance">
            <h3>Total Balance Due</h3>
            <p>₹{totalBalance}</p>
            {/* <Link to="/payment-options" className="button">Pay Now</Link> */}
          </div>
        </section>

        <footer>
          <p>&copy; 2024 Hostel Management</p>
        </footer>
      </div>
    </>
  );
};

export default Payment;
