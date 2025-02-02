import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Payment.css';
import Heading from "./Heading";

const Payment = () => {
  // Static mock data directly in state
  const [payments] = React.useState([
    { month: 'January 2024', amountDue: 15000, status: 'Paid' },
    { month: 'February 2024', amountDue: 15000, status: 'Pending' },
    { month: 'March 2024', amountDue: 15000, status: 'Pending' },
  ]);

  // Calculate total balance directly
  const totalBalance = payments.reduce(
    (sum, payment) => (payment.status === 'Pending' ? sum + payment.amountDue : sum),
    0
  );

  return (
    <>
      <Heading
        title="Monthly Dues"
        subtitle="View and manage your monthly payments"
      />

      <div className="main-content">
        <section id="payments">
          <h2>Monthly Dues</h2>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Amount Due</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index}>
                  <td>{payment.month}</td>
                  <td>₹{payment.amountDue}</td>
                  <td>{payment.status}</td>
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