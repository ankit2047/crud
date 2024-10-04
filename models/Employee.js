const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name:  String,
  address: String,
  state: String,
  country:  String,
  qualification: [String],
  religion: String
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;