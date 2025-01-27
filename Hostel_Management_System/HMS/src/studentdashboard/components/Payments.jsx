import "../styles/payments.css";

const Payments = () => {
  const paymentsData = [
    { month: "January 2024", amount: "₹500", status: "Paid" },
    // More data...
  ];

  const totalBalance = paymentsData
    .filter((payment) => payment.status === "Unpaid")
    .reduce((acc, curr) => acc + parseInt(curr.amount.replace("₹", "")), 0);

  return (
    <div className="payments-container">
      <header>
        <h1>Payments</h1>
      </header>
      <section>
        <table>{/* Table structure */}</table>
        <div>Total Balance Due: ₹{totalBalance}</div>
      </section>
    </div>
  );
};

export default Payments;
