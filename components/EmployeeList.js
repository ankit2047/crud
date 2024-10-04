import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/employees").then((response) => {
      setEmployees(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/employees/${id}`).then(() => {
      setEmployees(employees.filter((emp) => emp._id !== id));
    });
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-60 bg-white rounded p-3">
            <h3 className="d-flex justify-content-center">Employee List</h3>
                <table className="table">
                    <thead>
                        <tr>
                          <th>Name</th>
                          <th>Address</th>
                          <th>State</th>
                          <th>Country</th>
                          <th>Qualification</th>
                          <th>Religion</th>
                          <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp) => (
                        <tr key={emp._id}>
                          <td>{emp.name}</td>
                          <td>{emp.address}</td>
                          <td>{emp.state}</td>
                          <td>{emp.country}</td>
                          <td>{emp.qualification.join(", ")}</td>
                          <td>{emp.religion}</td>
                          <td>
                            <Link to={`/update/${emp._id}`} className="btn btn-primary">Edit</Link>
                            <Link to={`/view/${emp._id}`} className="btn btn-success">View</Link>
                            <button className="btn btn-danger" onClick={() => handleDelete(emp._id)}>Delete</button>

                            {/* <button className="btn btn-primary" onClick={() => navigate(`/edit/${emp._id}`)}>Edit</button> */}
                            {/* <button className="btn btn-success" onClick={() => navigate(`/edit/${emp._id}`)}>View</button> */}
                            
                           
                          </td>
                        </tr>
                      ))}
                    </tbody>
                </table>
            </div>
        </div>
  );
};

export default EmployeeList;