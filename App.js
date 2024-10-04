import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeRegistration from "./components/EmployeeRegistration";
import EmployeeList from "./components/EmployeeList";
import EmployeeUpdate from "./components/EmployeeUpdate";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeView from "./components/EmployeeView";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeRegistration />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/update/:id" element={<EmployeeUpdate />} />
        <Route path="/view/:id" element={<EmployeeView />} ></Route>
      </Routes>
    </Router>
  );
};

export default App;