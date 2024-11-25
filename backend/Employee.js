const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  submitDate: { type: Date, default: Date.now }, // Automatically adds submission date
  employeeId: { type: String, unique: true }     // Unique Employee ID
});

module.exports = mongoose.model('Employee', employeeSchema);
