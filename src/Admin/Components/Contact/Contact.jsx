import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar'
import NavBar from '../admin-navbar/Navbar';
function Contact() {
    const [conatct, setContact] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/devtest/reactjs/get_contact.php');
        setContact(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
        setError(error);
      }
    };
  
    // const handleDelete = async (id) => {
    //   const confirmDelete = window.confirm('Are you sure you want to delete this customer?');
    //   if (confirmDelete) {
    //     try {
    //       await axios.post('http://localhost/devtest/reactjs/delete_customer.php', { id });
    //       // If deletion is successful, fetch updated data
    //       fetchData();
    //     } catch (error) {
    //       console.error('Error deleting customer:', error);
    //       setError(error);
    //     }
    //   }
    // };
  return (
    <div className="admin-Dashboard">
    <div className="admin-SideBar">
      <Sidebar />
    </div>
    <div className="admin-Content">
      <NavBar />
      <div className="dashboard-customers-info">
        <div className="dashboard-customers">
          <div className='customers-table'>
            <h2>Conatcts</h2>
            {error ? (
              <p>Error fetching conatct: {error.message}</p>
            ) : (
                conatct.length > 0 && (
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Message</th>
                      <th>Contacted On</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {conatct.map((conatcts, index) => (
                      <tr className="user-data" key={index}>
                        <td>{conatcts.id}</td>
                        <td>{conatcts.fname}</td>
                        <td>{conatcts.lname}</td>
                        <td>{conatcts.email}</td>
                        <td>{conatcts.message}</td>
                        <td>{conatcts.created_at}</td>
                        <td>
                          {/* <div className="edit-btn">
                            <button className="delete-btn" onClick={() => handleDelete(customer.id)}>
                              Delete
                            </button>
                          </div> */}
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

export default Contact
