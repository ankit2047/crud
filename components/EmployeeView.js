import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EmployeeView = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/employees/${id}`).then((response) => {
      setEmployee(response.data);
    });
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
      <h3 className="d-flex justify-content-center" >View Employee</h3>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Address:</strong> {employee.address}</p>
      <p><strong>Country:</strong> {employee.country}</p>
      <p><strong>State:</strong> {employee.state}</p>
      <p><strong>Qualification:</strong> {employee.qualification.join(", ")}</p>
      <p><strong>Religion:</strong> {employee.religion}</p>
      <button className="btn btn-danger" onClick={() => navigate("/employees")}>Back to List</button>
      </div>
    </div>
  );
};

export default EmployeeView;