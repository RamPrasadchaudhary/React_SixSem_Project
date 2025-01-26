import "../styles/payments.css";

const Payments = () => {
  const paymentsData = [
    { month: "January 2024", amount: "₹500", status: "Paid" },
    { month: "February 2024", amount: "₹500", status: "Unpaid" },
    { month: "March 2024", amount: "₹500", status: "Unpaid" },
    { month: "April 2024", amount: "₹500", status: "Unpaid" },
    { month: "May 2024", amount: "₹500", status: "Unpaid" },
    { month: "June 2024", amount: "₹500", status: "Unpaid" },
    { month: "July 2024", amount: "₹500", status: "Paid" },
    { month: "August 2024", amount: "₹500", status: "Unpaid" },
    { month: "September 2024", amount: "₹500", status: "Unpaid" },
    { month: "October 2024", amount: "₹500", status: "Unpaid" },
    { month: "November 2024", amount: "₹500", status: "Unpaid" },
    { month: "December 2024", amount: "₹500", status: "Unpaid" },
  ];

  const totalBalance = paymentsData
    .filter((payment) => payment.status === "Unpaid")
    .reduce((acc, curr) => acc + parseInt(curr.amount.replace("₹", "")), 0);

  return (
    <div className="payments-container">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <nav>
        <ul className="navbar">
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/payments" className="active">
              Payments
            </a>
          </li>
          <li>
            <a href="/complaints">Complaints</a>
          </li>
        </ul>
      </nav>
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
            {paymentsData.map((payment, index) => (
              <tr key={index}>
                <td>{payment.month}</td>
                <td>{payment.amount}</td>
                <td>{payment.status}</td>
                <td className="actions">
                  {payment.status === "Paid" ? (
                    <a href="#" className="download-receipt">
                      Download Receipt
                    </a>
                  ) : (
                    <a href="#" className="na">
                      N/A
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-balance">
          <h3>Total Balance Due</h3>
          <p>₹{totalBalance}</p>
          <a href="/payment-options" className="button">
            Pay Now
          </a>
        </div>
      </section>
      <footer>
        <p>&copy; 2024 Hostel Management</p>
      </footer>
    </div>
  );
};

export default Payments;
