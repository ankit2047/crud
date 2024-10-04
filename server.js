const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Employee = require('./models/Employee'); // Import Employee class

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/employeesdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Create Employee
app.post("/employees", async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.status(201).send(employee);
});

// Get All Employees
app.get("/employees", async (req, res) => {
  const employees = await Employee.find();
  res.status(200).send(employees);
});

// Get Employee by ID
app.get("/employees/:id", async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) return res.status(404).send("Employee not found");
  res.status(200).send(employee);
});

// Update Employee
app.put("/employees/:id", async (req, res) => {
    const id=req.params.id;
  const employee = await Employee.findByIdAndUpdate({_id:id}, {
    new: true,
    runValidators: true,
  });
  if (!employee) return res.status(404).send("Employee not found");
  res.status(200).send(employee);
});

// Delete Employee
app.delete("/employees/:id", async (req, res) => {
  const employee = await Employee.findByIdAndDelete(req.params.id);
  if (!employee) return res.status(404).send("Employee not found");
  res.status(200).send(employee);
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});