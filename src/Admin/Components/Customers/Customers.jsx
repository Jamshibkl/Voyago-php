import React, { useEffect, useState } from 'react';
import './Customers.css';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import Navbar from '../admin-navbar/Navbar';

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null); // Track potential errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/devtest/reactjs/get_customers.php'); // Modified URL
        setCustomers(response.data);
      } catch (error) {
        // Handle errors gracefully, e.g., display an error message
        console.error('Error fetching customers:', error);
        setError(error); // Store error for potential display
      }
    };

    fetchData();
  }, []);

  return (
    <div className="admin-Dashboard">
      <div className="admin-SideBar">
        <Sidebar />
      </div>
      <div className="admin-Content">
        <Navbar />
        <div className="dashboard-customers-info">
          <div className="dashboard-customers">
            <div className='customers-table'>
            <h2>Customers</h2>
            {error ? (
              // Display error message if available
              <p>Error fetching customers: {error.message}</p>
            ) : (
              customers.length > 0 && (
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Joined On</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer, index) => (
                      <tr className="user-data" key={index}>
                        <td>{customer.id}</td>
                        <td>{customer.user}</td>
                        <td>{customer.email}</td>
                        <td>{customer.created_at}</td>
                        <td >
                    <div className="edit-btn">
                      <button className="delete-btn">Delete</button>
                    </div>
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

export default Customers;
