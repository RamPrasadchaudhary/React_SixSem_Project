import "../styles/payments.css";
import Layout from "./layout";

const Payments = () => {
  const paymentsData = [
    { month: "January 2024", amount: "₹500", status: "Paid" },
    { month: "February 2024", amount: "₹500", status: "Unpaid" },
    { month: "March 2024", amount: "₹500", status: "Unpaid" },
    // More data...
  ];

  const totalBalance = paymentsData
    .filter((payment) => payment.status === "Unpaid")
    .reduce((acc, curr) => acc + parseInt(curr.amount.replace("₹", "")), 0);

  return (
    <Layout>
      <div className="container">
        <section className="content">
          <h2>Payment History</h2>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Amount</th>
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
                      <a href="/download-receipt" className="download-receipt">
                        Download Receipt
                      </a>
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
            <a href="/pay-now" className="button">
              Pay Now
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Payments;
