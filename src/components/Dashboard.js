import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editFormData, setEditFormData] = useState(null);
  const [employees, setEmployees] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/"; // Redirect to login
  };

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
    setShowForm(false);
  };

  const deleteEmployee = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  const startEditEmployee = (index) => {
    setEditIndex(index);
    setEditFormData(employees[index]);
    setShowForm(false); // Ensure the create form is hidden when editing
  };

  const updateEmployee = (updatedEmployee) => {
    const updatedList = [...employees];
    updatedList[editIndex] = updatedEmployee;
    setEmployees(updatedList);
    setEditIndex(null);
    setEditFormData(null);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
        <h3>Welcome, {user.username}</h3>
        <button
          onClick={handleLogout}
          style={{
            padding: "10px",
            width: "100px",
            border: "1px solid #ccc",
            borderRadius: "20px",
            backgroundColor:"#82e0aa",
          }}
        >
          Logout
        </button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        style={{
          padding: "10px",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "30px",
          
        }}
      />
      <button
        onClick={() => {
          setShowForm(!showForm);
          setEditIndex(null); // Close edit form if it was open
        }}
        style={{
          padding: "10px",
          width: "150px",
          border: "1px solid #ccc",
          borderRadius: "30px",
          backgroundColor:"#82e0aa",
        }}
      >
        {showForm ? "Close Form" : "Create Employee"}
      </button>
      {showForm && <EmployeeForm addEmployee={addEmployee} />}
      {editIndex !== null && (
        <EmployeeForm
          addEmployee={updateEmployee}
          existingData={editFormData} // Pass existing data for editing
        />
      )}
      <EmployeeTable
        employees={employees}
        deleteEmployee={deleteEmployee}
        startEditEmployee={startEditEmployee}
      />
    </div>
  );
};

export default Dashboard;
