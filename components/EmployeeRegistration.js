import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmployeeRegistration = () => {
  const [employee, setEmployee] = useState({
    name: "",
    address: "",
    state: "",
    country: "",
    qualification: [],
    religion: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setEmployee({ ...employee, qualification: [...employee.qualification, name] });
    } else {
      setEmployee({
        ...employee,
        qualification: employee.qualification.filter((q) => q !== name),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/employees", employee).then(() => {
      navigate("/employees");
    });
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
        <h3 className="d-flex justify-content-center">Employee Registation</h3>
          <div className="mb-2">
            <lable>Name:</lable>
            <input type="text" name="name" placeholder="Enter Name" className="form-control" onChange={handleInputChange} required/>
          </div>
          <div className="mb-2">
            <lable>Address:</lable>
            <input type="text" name="address" placeholder="Enter Address" className="form-control" onChange={handleInputChange} required/>
          </div>
          <div className="mb-2">
            <lable>Country:</lable>
            <input type="text" name="country" placeholder="Enter Country" className="form-control" onChange={handleInputChange} required/>
          </div>
          <div className="mb-2">
            <lable>State:</lable>
            <input type="text" name="state" placeholder="Enter State" className="form-control" onChange={handleInputChange} required/>
          </div>
          <div className="mb-2">
            <label>Qualification:</label>
            <input type="checkbox" name="BCA" onChange={handleCheckboxChange} /> BCA
            <input type="checkbox" name="MCA" onChange={handleCheckboxChange} /> MCA
            <input type="checkbox" name="B.Tech" onChange={handleCheckboxChange} /> B.Tech
          </div>
          <div className="mb-2">
            <label>Religion:</label>
            <input type="radio" name="religion" value="Hindu" onChange=
            {handleInputChange} /> Hindu
            <input type="radio" name="religion" value="Muslim" onChange={handleInputChange} /> Muslim
            <input type="radio" name="religion" value="Christian" onChange={handleInputChange} /> Christian
          </div>
          <div className="mb-2">
            <button className="btn btn-dark" type="submit">Add Employee</button>
          </div>
      </form>
      </div>
    </div>
    
  );
};

export default EmployeeRegistration;