import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from "../Sidebar/Sidebar"
import Navbar from "../admin-navbar/Navbar";

function Transactions() {
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState(null); // Track potential errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/devtest/reactjs/payment/get_payment.php'); // Modified URL
        setPayments(response.data);
      } catch (error) {
        // Handle errors gracefully, e.g., display an error message
        console.error('Error fetching payments:', error);
        setError(error); // Store error for potential display
      }
    };

    fetchData();
  }, []);
  return (
    <div className="admin-Dashboard">
    <div className="admin-SideBar">
      {/* Assuming Sidebar and Navbar are components */}
      <Sidebar />
    </div>
    <div className="admin-Content">
      <Navbar />
      <div className="dashboard-customers-info">
        <div className="dashboard-customers">
          <div className='customers-table'>
            <h2>Transaction Details</h2>
            {error ? (
              // Display error message if available
              <p>Error fetching payments: {error.message}</p>
            ) : (
              payments.length > 0 && (
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>User Name</th>
                      {/* <th>Expiry Date</th>
                      <th>Cvv</th> */}
                      <th>Amount</th>
                      <th>Transaction ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment, index) => (
                      <tr className="user-data" key={index}>
                        <td>{payment.id}</td>
                        <td>{payment.userName}</td>
                        {/* <td>{payment.expiryDate}</td>
                        <td>{payment.cvv}</td> */}
                        <td>{payment.amount}</td>
                        <td>{payment.transactionId}</td>
                       
                        <td>
                          {/* Add your edit/delete buttons here */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Transactions;
