import React, { useEffect, useState } from 'react';
import "./TotalAdmins.css"
import axios from 'axios';
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../admin-navbar/Navbar";

function TotalAdmins() {
  const [admin, setAdmin] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost/devtest/reactjs/Admin/get_admin.php');
      console.log('Response:', response); // Check the response data in the console
      setAdmin(response.data);
    } catch (error) {
      console.error('Error fetching admins:', error);
      setError(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this Admin?');
    if (confirmDelete) {
      try {
        await axios.post('http://localhost/devtest/reactjs/Admin/delete_admin.php', { id });
        // If deletion is successful, fetch updated data
        fetchData();
      } catch (error) {
        console.error('Error deleting admin:', error);
        setError(error);
      }
    }
  };

  console.log('Admins:', admin); // Check the admin state in the console

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
              <h2>Admins</h2>
              {error ? (
                <p>Error fetching admins: {error.message}</p>
              ) : (
                admin.length > 0 && (
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Joined On</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {admin.map((admins, index) => (
                        <tr className="user-data" key={index}>
                          <td>{admins.id}</td>
                          <td>{admins.admin}</td>
                          <td>{admins.email}</td>
                          <td>{admins.pass}</td>
                          <td>{admins.created_at}</td>
                          <td>
                            <div className="edit-btn">
                              <button className="edit-btn">
                               Edit
                              </button>
                              <button className="delete-btn" onClick={() => handleDelete(admins.id)}>
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
  )
}

export default TotalAdmins;
