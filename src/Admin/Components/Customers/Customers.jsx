import React, { useEffect, useState } from 'react';
import './Customers.css';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import Navbar from '../admin-navbar/Navbar';

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost/devtest/reactjs/get_customers.php');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
      setError(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this customer?');
    if (confirmDelete) {
      try {
        await axios.post('http://localhost/devtest/reactjs/delete_customer.php', { id });
        // If deletion is successful, fetch updated data
        fetchData();
      } catch (error) {
        console.error('Error deleting customer:', error);
        setError(error);
      }
    }
  };

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
                <p>Error fetching customers: {error.message}</p>
              ) : (
                customers.length > 0 && (
                  <table >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joined On</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map((customer, index) => (
                        <tr className="user-data" key={index}>
                          <td>{customer.id}</td>
                          <td>{customer.user}</td>
                          <td>{customer.email}</td>
                          <td>{customer.created_at}</td>
                          <td>
                            <div className="edit-btn">
                              <button className="delete-btn" onClick={() => handleDelete(customer.id)}>
                                Delete
                              </button>
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
