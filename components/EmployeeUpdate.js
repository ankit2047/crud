import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EmployeeUpdate = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: "",
    address: "",
    country: "",
    state: "",
    qualification: [],
    religion: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/employees/${id}`).then((response) => {
      setEmployee(response.data);
    });
  }, [id]);

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
    axios.put(`http://localhost:5000/employees/${id}`, employee).then(() => {
      navigate("/employees");
    });
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h3 className="d-flex justify-content-center">Update Employee</h3>
          <div className="mb-2">
            <lable>Name:</lable>
            <input type="text" name="name" value={employee.name} placeholder="Enter Name" 
            className="form-control" onChange={handleInputChange} />
          </div>
          <div className="mb-2">
            <lable>Address:</lable>
            <input type="text" name="address" value={employee.address} placeholder=" Enter Address" className="form-control"  onChange={handleInputChange} />
          </div>
          <div className="mb-2">
            <lable>Country:</lable>
            <input type="text" name="country" value={employee.country} placeholder="Enter Country" className="form-control" onChange={handleInputChange} />
          </div>
          <div className="mb-2">
            <lable>State:</lable>
            <input type="text" name="State" value={employee.state} placeholder="Enter State" className="form-control" onChange={handleInputChange} />
          </div>
          <div className="mb-2">
            <lable className="">Qualification:</lable>
            <input
            type="checkbox"
            name="BCA"
            checked={employee.qualification.includes("BCA")}
            onChange={handleCheckboxChange}
            className=""
          /> BCA
          <input
            type="checkbox"
            name="MCA"
            checked={employee.qualification.includes("MCA")}
            onChange={handleCheckboxChange}
          /> MCA
          <input
            type="checkbox"
            name="B.Tech"
            checked={employee.qualification.includes("B.Tech")}
            onChange={handleCheckboxChange}
          /> B.Tech
          </div>
          <div className="mb-2">
            <lable>Religion:</lable>
            <input type="radio" name="religion" value="Hindu" checked={employee.religion === "Hindu"} onChange={handleInputChange} /> Hindu
            <input type="radio" name="religion" value="Muslim" checked={employee.religion === "Muslim"} onChange={handleInputChange} /> Muslim
            <input type="radio" name="religion" value="Christian" checked={employee.religion === "Christian"} onChange={handleInputChange} /> Christian
          </div>
          <div>
          <button className="btn btn-info" type="submit">Update Employee</button>
          </div>
          
        </form>
      </div>
    </div>
    
  );
};

export default EmployeeUpdate;
















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function Edit(){
//     const {_id}=useParams();
//     const [data, setData]=useState([])

//     useEffect(()=>{
//         axios.get("http://localhost:5000/employees/"+_id)
//         .then(res=> setData(res.data))
//         .catch(err=>console.log(err))
//     }, [_id])
    
//     const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//   };

// //   const handleCheckboxChange = (e) => {
// //     const { name, checked } = e.target;
// //     if (checked) {
// //       setData({ ...data, qualification: [...data.qualification, name] });
// //     } else {
// //       setData({
// //         ...data,
// //         qualification: data.qualification.filter((q) => q !== name),
// //       });
// //     }
// //   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:5000/employees", data)
//     .then(res => {
//         alert("Data update sucessfully")
//       navigate("/employees");
//     });
//   };

//     return(
//         <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//       <div className="w-50 bg-white rounded p-3">
//         <form onSubmit={handleSubmit}>
//         <h3 className="d-flex justify-content-center">Employee Update</h3>
//           <div className="mb-2">
//             <lable>Name:</lable>
//             <input type="text" name="name" value={data.name} placeholder="Enter Name" className="form-control" onChange={handleInputChange}/>
//           </div>
//           <div className="mb-2">
//             <lable>Address:</lable>
//             <input type="text" name="address" value={data.address} placeholder="Enter Address" className="form-control" onChange={handleInputChange} />
//           </div>
//           <div className="mb-2">
//             <lable>Country:</lable>
//             <input type="text" name="country" value={data.country} placeholder="Enter Country" className="form-control" onChange={handleInputChange} />
//           </div>
//           <div className="mb-2">
//             <lable>State:</lable>
//             <input type="text" name="state" value={data.state} placeholder="Enter State" className="form-control" onChange={handleInputChange} />
//           </div>
//           <div className="mb-2">
//             <label>Qualification:</label>
//             <input type="checkbox" name="BCA" /> BCA
//             <input type="checkbox" name="MCA" /> MCA
//             <input type="checkbox" name="B.Tech" /> B.Tech
//           </div>
//           <div className="mb-2">
//             <label>Religion:</label>
//             <input type="radio" name="religion" value="Hindu"  onChange={handleInputChange} /> Hindu
//             <input type="radio" name="religion" value="Muslim"  onChange={handleInputChange}/> Muslim
//             <input type="radio" name="religion" value="Christian"  onChange={handleInputChange}/> Christian
//           </div>
//           <div className="mb-2">
//             <button className="btn btn-dark" type="submit">Update</button>
//           </div>
//       </form>
//       </div>
//     </div>
//     )
// }

// export default Edit;